import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../../admin-center/admin-center-service';
import { MatDialog } from '@angular/material/dialog';
import { CommonToaster } from '../../../shared/services/common-toaster';
import { ComonPopup } from '../../../shared/comon-popup/comon-popup';
import { WorkFlowAddChildProduct } from '../work-flow-add-child-product/work-flow-add-child-product';

@Component({
  selector: 'app-work-flow-child-product-manangement',
  imports: [
    CommonModule,
    MatIconModule,
    ComonPopup
  ],
  templateUrl: './work-flow-child-product-manangement.html',
  styleUrl: './work-flow-child-product-manangement.scss',
})
export class WorkFlowChildProductManangement {
  @Input() subProduct: boolean = false;
  getChildProduct: any;
  pageSize = 10;
  currentPage = 1;
  totalPages = 0;
  pagedProducts: any[] = [];
  showDeleteConfirm: boolean = false;
  selectedProduct: any;
  domainId: any;


  constructor(private adminCenterService: AdminCenterService,
    public dialog: MatDialog,
    private commonToaster: CommonToaster
  ) { }


  ngOnInit() {
    this.getChildProductApi();
    this.adminCenterService.refresh$.subscribe((res: any) => {
      console.log('Refreshing table...', res);
      this.domainId = res;
      this.getChildProductApi();
    });
  }

  getChildProductApi() {
    const payload = {
      domainId: this.domainId || 'BO',
    }
    this.adminCenterService.getChildProductMgmt(payload).subscribe((res: any) => {
      this.getChildProduct = res.data;
    })
  }


  openModal(product: any) {
    console.log('product', product);

    const dialogRef = this.dialog.open(WorkFlowAddChildProduct, {
      width: '60%',
      height: 'auto',
      position: { right: '0' },
      data: {
        editData: product,
        isEdit: true
      }
    });

    //  THIS IS THE IMPORTANT PART
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with:', result);

      if (result === 'retaiClose') {
        console.log('success');
        this.getChildProductApi();
        // this.loadSubProducts(); //  refresh list / API call
      }
    });
  }

  openDeletePopup(product: any) {
    this.selectedProduct = product;
    this.showDeleteConfirm = true;
  }

  cancelDelete() {
    this.showDeleteConfirm = false;
    this.selectedProduct = null;
  }

  confirmDelete() {
    console.log('Deleting product:', this.selectedProduct);

    const payload = {
      productCode: this.selectedProduct.productCode,
      subProductCode: this.selectedProduct.subProductCode,
      childMenuProdCode: this.selectedProduct.childMenuProdCode,
      childMenuDesc: this.selectedProduct.childMenuDesc,
      childMenuUrl: this.selectedProduct.childMenuUrl,
      priority: this.selectedProduct.priority,
      action: "DELETE"
    }

    this.showDeleteConfirm = false;
    // this.selectedProduct = null;
    this.adminCenterService.createChildProduct(payload).subscribe((res: any) => {
      console.log('res', res);
      if (res.status.code == "000000") {
        this.commonToaster.showSuccess(res.status.description);
        this.getChildProductApi();
      }

    })
  }

  setPage(page: number) {
    if (page < 1 || page > this.totalPages) return;

    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedProducts = this.getChildProduct.slice(start, end);
  }

  get pages(): number[] {
    const total = this.totalPages;
    const current = this.currentPage;

    if (total <= 5) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    const pages = new Set<number>();

    // Always include first and last
    pages.add(1);
    pages.add(total);

    // Include current and neighbors
    pages.add(current);
    pages.add(current - 1);
    pages.add(current + 1);

    // Remove invalid numbers
    return Array.from(pages)
      .filter(p => p > 0 && p <= total)
      .sort((a, b) => a - b);
  }


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}
