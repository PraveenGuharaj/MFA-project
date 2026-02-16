import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../admin-center-service';
import { ComonPopup } from '../../../shared/comon-popup/comon-popup';
import { CommonToaster } from '../../../shared/services/common-toaster';
import { MatDialog } from '@angular/material/dialog';
import { AdminCenterAddDeviceManagement } from '../admin-center-add-device-management/admin-center-add-device-management';

@Component({
  selector: 'app-admin-center-device-management',
  imports: [
    CommonModule,
    MatIconModule,
    ComonPopup
  ],
  templateUrl: './admin-center-device-management.html',
  styleUrl: './admin-center-device-management.scss',
})
export class AdminCenterDeviceManagement {
  @Input() subProduct: boolean = false;
  getDeviceMgmtApi: any;
  pageSize = 10;
  currentPage = 1;
  totalPages = 0;
  pagedProducts: any[] = [];
  showDeleteConfirm: boolean = false;
  selectedProduct: any;
  constructor(private adminCenterService: AdminCenterService, public dialog: MatDialog,
    private commonToaster: CommonToaster) {

  }

  ngOnInit() {
    this.getDeviceMgmt();
    this.adminCenterService.refresh$.subscribe(() => {
      console.log('Refreshing table...');
      this.getDeviceMgmt();
    });
  }

  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }

  getDeviceMgmt() {
    this.adminCenterService.getDeviceManagement().subscribe((res: any) => {
      this.getDeviceMgmtApi = res.data;
      this.totalPages = Math.ceil(this.getDeviceMgmtApi.length / this.pageSize);
      this.setPage(1);

    })
  }

  openModal(product: any) {
    console.log('product', product);

    const dialogRef = this.dialog.open(AdminCenterAddDeviceManagement, {
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
        this.getDeviceMgmt();
        // this.loadSubProducts(); //  refresh list / API call
      }
    });
  }

  setPage(page: number) {
    if (page < 1 || page > this.totalPages) return;

    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedProducts = this.getDeviceMgmtApi.slice(start, end);
  }

  get pages(): number[] {
    if (this.totalPages <= 5) {
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }

    if (this.currentPage <= 3) {
      return [1, 2, 3];
    }

    if (this.currentPage >= this.totalPages - 2) {
      return [this.totalPages - 2, this.totalPages - 1, this.totalPages];
    }

    return [
      this.currentPage - 1,
      this.currentPage,
      this.currentPage + 1
    ];
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

    const payload = [{
      id: this.selectedProduct.id,
      action: "DELETE",
    }]

    this.showDeleteConfirm = false;
    // this.selectedProduct = null;
    this.adminCenterService.createDeviceMgmt(payload).subscribe((res: any) => {
      console.log('res', res);
      if (res.result.code == "000000") {
        this.getDeviceMgmt();
        this.commonToaster.showSuccess('  Deleted Successfully');
      }

    })
  }
}
