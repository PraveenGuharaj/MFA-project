import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../admin-center-service';
import { MatDialog } from '@angular/material/dialog';
import { AdminCenterAddSubProduct } from '../admin-center-add-sub-product/admin-center-add-sub-product';
import { ComonPopup } from '../../../shared/comon-popup/comon-popup';
import { CommonToaster } from '../../../shared/services/common-toaster';

@Component({
  selector: 'app-admin-center-managecontent-subproduct',
  imports: [
    CommonModule,
    MatIconModule,
    ComonPopup
  ],
  templateUrl: './admin-center-managecontent-subproduct.html',
  styleUrl: './admin-center-managecontent-subproduct.scss',
})
export class AdminCenterManagecontentSubproduct {
  @Input() subProduct: boolean = false;
  subProductApi: any;
  showDeleteConfirm: boolean = false;
  selectedProduct: any;

  constructor(private adminCenterService: AdminCenterService, public dialog: MatDialog, private commonToaster: CommonToaster) { }

  ngOnInit() {
    this.getSubProductApi();
    this.adminCenterService.refresh$.subscribe(() => {
      console.log('Refreshing table...');
      this.getSubProductApi();
    });
  }

  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }

  getSubProductApi() {
    this.adminCenterService.getSubProduct().subscribe((res: any) => {
      console.log('ressss', res);
      this.subProductApi = res.data;

    })
  }

  openModal(product: any) {
    console.log('product', product);

    const dialogRef = this.dialog.open(AdminCenterAddSubProduct, {
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
        this.getSubProductApi();
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

      subProductId: this.selectedProduct.subProductId

    }

    this.showDeleteConfirm = false;
    // this.selectedProduct = null;
    this.adminCenterService.deleteAdminCenterSubProduct(payload).subscribe((res) => {
      console.log('res', res);
      if (res.status.code == "000000") {
        this.commonToaster.showSuccess('Product License Deleted Successfully');
        this.getSubProductApi();
      }

    })
  }
}
