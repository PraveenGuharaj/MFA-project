import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../admin-center-service';
import { MatDialog } from '@angular/material/dialog';
import { AdminCenterAddLicense } from '../admin-center-add-license/admin-center-add-license';
import { ComonPopup } from '../../../shared/comon-popup/comon-popup';
import { CommonToaster } from '../../../shared/services/common-toaster';
@Component({
  selector: 'app-admin-center-manage-license',
  imports: [
    CommonModule,
    MatIconModule,
    ComonPopup
  ],
  templateUrl: './admin-center-manage-license.html',
  styleUrl: './admin-center-manage-license.scss',
})
export class AdminCenterManageLicense {
  @Input() subProduct: boolean = false;
  getLicenseData: any;
  showDeleteConfirm: boolean = false;
  selectedProduct: any;
  constructor(private adminCenterService: AdminCenterService, public dialog: MatDialog,
    private commonToaster: CommonToaster
  ) { }

  ngOnInit() {
    this.getLicense();
    this.adminCenterService.refresh$.subscribe(() => {
      console.log('Refreshing table...');
      this.getLicense();
    });
  }

  openModal(product: any) {
    console.log('product', product);

    const dialogRef = this.dialog.open(AdminCenterAddLicense, {
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
        this.getLicense();
        // this.loadSubProducts(); // 🔥 refresh list / API call
      }
    });
  }


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }

  getLicense() {
    this.adminCenterService.getLicense().subscribe((res: any) => {
      this.getLicenseData = res.data
    })
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

      licenseId: this.selectedProduct.licenseId,
      domainName: null,
      expiryDate: null,
      warningStatus: null,
      alertStatus: null,
      status: null,
      createdBy: null,
      action: "DELETE",
      notificationDeliveries: null

    }

    this.showDeleteConfirm = false;
    // this.selectedProduct = null;
    this.adminCenterService.deleteLicense(payload).subscribe((res) => {
      console.log('res', res);
      if (res.status.code == "000000") {
        this.commonToaster.showSuccess('Product License Deleted Successfully');
        this.getLicense();
      }

    })
  }
}
