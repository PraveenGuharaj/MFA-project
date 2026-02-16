import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../../admin-center/admin-center-service';
import { ComonPopup } from '../../../shared/comon-popup/comon-popup';
import { CommonToaster } from '../../../shared/services/common-toaster';
import { MatDialog } from '@angular/material/dialog';
import { OfferDiscountAddDiscountManagement } from '../offer-discount-add-discount-management/offer-discount-add-discount-management';

@Component({
  selector: 'app-offer-discount-discount-management',
  imports: [
    CommonModule,
    MatIconModule,
    ComonPopup
  ],
  templateUrl: './offer-discount-discount-management.html',
  styleUrl: './offer-discount-discount-management.scss',
})
export class OfferDiscountDiscountManagement {
  @Input() subProduct: boolean = false;
  getDiscountMgmt: any;
  showDeleteConfirm: boolean = false;
  selectedProduct: any;
  constructor(private adminCenterService: AdminCenterService, public dialog: MatDialog,
    private commonToaster: CommonToaster) { }




  ngOnInit() {
    this.getDiscountMgmtAPi();
    this.adminCenterService.refresh$.subscribe(() => {
      console.log('Refreshing table...');
      this.getDiscountMgmtAPi();
    });
  }

  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }

  getDiscountMgmtAPi() {
    this.adminCenterService.getDiscountMgmt().subscribe((res: any) => {
      this.getDiscountMgmt = res.data;
    })
  }

  openModal(product: any) {
    console.log('product', product);

    const dialogRef = this.dialog.open(OfferDiscountAddDiscountManagement, {
      width: '60%',
      height: 'auto',
      position: { right: '0' },
      data: {
        editData: product,
        isEdit: true
      }
    });

    // 👇 THIS IS THE IMPORTANT PART
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('Dialog closed with:', result);

      if (result === 'retaiClose') {
        console.log('success');
        this.getDiscountMgmtAPi();
        // this.loadSubProducts(); // refresh list / API call
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

      discountId: this.selectedProduct.discountId

    }

    this.showDeleteConfirm = false;
    // this.selectedProduct = null;
    this.adminCenterService.deleteDiscountMgmt(payload).subscribe((res) => {
      console.log('res', res);
      if (res.status.code == "000000") {
        this.commonToaster.showSuccess(res.status.description);
        this.getDiscountMgmtAPi();
      }

    })
  }
}