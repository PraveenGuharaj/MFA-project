import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../../admin-center/admin-center-service';
import { ComonPopup } from '../../../shared/comon-popup/comon-popup';
import { MatDialog } from '@angular/material/dialog';
import { CommonToaster } from '../../../shared/services/common-toaster';
import { AdminCenterAddProduct } from '../../admin-center/admin-center-add-product/admin-center-add-product';
import { WorkFlowAddProduct } from '../work-flow-add-product/work-flow-add-product';


@Component({
  selector: 'app-work-flow-product-management',
  imports: [
    CommonModule,
    MatIconModule,
    ComonPopup
  ],
  templateUrl: './work-flow-product-management.html',
  styleUrl: './work-flow-product-management.scss',
})
export class WorkFlowProductManagement {
  @Input() subProduct: boolean = false;
  getProductMgmt: any;
  showDeleteConfirm: boolean = false;
  selectedProduct: any;
  pageSize = 10;
  currentPage = 1;
  totalPages = 0;
  pagedProducts: any[] = [];
  domainId: any;

  constructor(private adminCenterService: AdminCenterService,
    public dialog: MatDialog,
    private commonToaster: CommonToaster
  ) { }

  ngOnInit() {
    this.getPoductMgmtAPi();
    this.adminCenterService.refresh$.subscribe((res: any) => {
      console.log('Refreshing table...', res);
      this.domainId = res;
      this.getPoductMgmtAPi();
    });
  }


  getPoductMgmtAPi() {
    const payload = {
      "domainId": this.domainId || 'BO',
      "name": "",
      "unitId": ""
    }


    this.adminCenterService.getProductMgmt(payload).subscribe((res: any) => {
      this.getProductMgmt = res.data;
    })
  }


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }

  openModal(product: any) {
    console.log('product', product);

    const dialogRef = this.dialog.open(WorkFlowAddProduct, {
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
        this.getPoductMgmtAPi();
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
      name: "NOTIFICATIONS_MANAGEMENT_CONFIG",
      domainId: this.selectedProduct.domain
    }

    this.showDeleteConfirm = false;
    // this.selectedProduct = null;
    this.adminCenterService.deleteProductMgmt(payload).subscribe((res) => {
      console.log('res', res);
      if (res.status.code == "000000") {
        this.commonToaster.showSuccess(res.status.description);
        this.getPoductMgmtAPi();
      }

    })
  }
}
