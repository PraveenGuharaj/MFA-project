import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../../admin-center/admin-center-service';
import { ComonPopup } from '../../../shared/comon-popup/comon-popup';
import { MatDialog } from '@angular/material/dialog';
import { CommonToaster } from '../../../shared/services/common-toaster';
import { WorkFlowAddDomain } from '../work-flow-add-domain/work-flow-add-domain';

@Component({
  selector: 'app-work-flow-domain-management',
  imports: [
    CommonModule,
    MatIconModule,
    ComonPopup
  ],
  templateUrl: './work-flow-domain-management.html',
  styleUrl: './work-flow-domain-management.scss',
})
export class WorkFlowDomainManagement {
  @Input() subProduct: boolean = false;
  getDomainMgmt: any;
  showDeleteConfirm: boolean = false;
  selectedProduct: any;
  pageSize = 10;
  currentPage = 1;
  totalPages = 0;
  pagedProducts: any[] = [];


  constructor(private adminCenterService: AdminCenterService,
    public dialog: MatDialog,
    private commonToaster: CommonToaster
  ) { }

  ngOnInit() {
    this.getDomainMgmtApi();
    this.adminCenterService.refresh$.subscribe(() => {
      this.getDomainMgmtApi();
    });
  }

  openModal(product: any) {
    console.log('product', product);

    const dialogRef = this.dialog.open(WorkFlowAddDomain, {
      width: '60%',
      height: 'auto',
      position: { right: '0' },
      data: {
        editData: product,
        isEdit: true
      }
    });

    // 👇 THIS IS THE IMPORTANT PART
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with:', result);

      if (result === 'retaiClose') {
        console.log('success');
        this.getDomainMgmtApi();
        // this.loadSubProducts(); // 🔥 refresh list / API call
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
      name: this.selectedProduct.domainId
    }

    this.showDeleteConfirm = false;
    // this.selectedProduct = null;
    this.adminCenterService.deleteDomainMgmt(payload).subscribe((res) => {
      console.log('res', res);
      if (res.status.code == "000000") {
        this.commonToaster.showSuccess(res.status.description);
        this.getDomainMgmtApi();
      }

    })
  }


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }

  getDomainMgmtApi() {
    this.adminCenterService.getDomainMgmt().subscribe((res: any) => {
      this.getDomainMgmt = res.data;
      this.totalPages = Math.ceil(this.getDomainMgmt.length / this.pageSize);
      this.setPage(1)
    })
  }

  setPage(page: number) {
    if (page < 1 || page > this.totalPages) return;

    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedProducts = this.getDomainMgmt.slice(start, end);
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
}
