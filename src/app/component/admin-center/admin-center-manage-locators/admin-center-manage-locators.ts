import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../admin-center-service';
import { ComonPopup } from '../../../shared/comon-popup/comon-popup';
import { CommonToaster } from '../../../shared/services/common-toaster';
import { MatDialog } from '@angular/material/dialog';
import { AdminCenterAddAtm } from '../admin-center-add-atm/admin-center-add-atm';

@Component({
  selector: 'app-admin-center-manage-locators',
  imports: [
    CommonModule,
    MatIconModule,
    ComonPopup
  ],
  templateUrl: './admin-center-manage-locators.html',
  styleUrl: './admin-center-manage-locators.scss',
})
export class AdminCenterManageLocators {
  @Input() subProduct: boolean = false;
  getAtm: any;
  selectedProduct: any;
  pageSize = 10;
  currentPage = 1;
  totalPages = 0;
  showDeleteConfirm: boolean = false;

  pagedProducts: any[] = [];

  constructor(private adminCenterService: AdminCenterService, public dialog: MatDialog,
    private commonToaster: CommonToaster) { }

  ngOnInit() {
    this.getAtmLoactor();
    this.adminCenterService.refresh$.subscribe(() => {
      console.log('Refreshing table...');
      this.getAtmLoactor();
    });
  }

  getAtmLoactor() {
    this.adminCenterService.getAtmLocator().subscribe((res: any) => {
      console.log('getAtm', res);
      this.getAtm = res.data;

    })
  }

  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }

  openModal(product: any) {
    console.log('product', product);

    const dialogRef = this.dialog.open(AdminCenterAddAtm, {
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
        this.getAtmLoactor();
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
      locatorId: this.selectedProduct.locatorId,
    }

    this.showDeleteConfirm = false;
    // this.selectedProduct = null;
    this.adminCenterService.deleteAtmLocator(payload).subscribe((res) => {
      console.log('res', res);
      if (res.status.code == "000000") {
        this.commonToaster.showSuccess(res.status.description);
        this.getAtmLoactor();
      }

    })
  }
}
