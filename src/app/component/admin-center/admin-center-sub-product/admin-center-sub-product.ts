import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../admin-center-service';
import { MatDialog } from '@angular/material/dialog';
import { AdminCenterAddSubProduct } from '../admin-center-add-sub-product/admin-center-add-sub-product';
import { DashboardSubProduct } from '../../dashboard/dashboard-sub-product/dashboard-sub-product';
import { ComonPopup } from '../../../shared/comon-popup/comon-popup';

@Component({
  selector: 'app-admin-center-sub-product',
  imports: [
    CommonModule,
    MatIconModule,
    ComonPopup
  ],
  templateUrl: './admin-center-sub-product.html',
  styleUrl: './admin-center-sub-product.scss',
})
export class AdminCenterSubProduct {
  @Input() subProduct: boolean = false;
  products: any;
  selectedProduct: any;
  showDeleteConfirm: boolean = false;

  constructor(private adminCenterService: AdminCenterService, public dialog: MatDialog) { }
  ngOnInit(): void {
    console.log('getproduct');

    this.getProducts();
  }



  //  openModal(product: any) {
  //     console.log('product', product);

  //     this.dialog.open(DashboardSubProduct, {
  //       width: '60%',  // Adjust width as needed
  //       height: 'auto',
  //       position: {
  //         right: '0',  // Ensure it opens on the right
  //       },
  //       data: {
  //         editData: product,
  //         isEdit: true
  //       },
  //     });

  //   }



  openModal(product: any) {
    console.log('product', product);

    const dialogRef = this.dialog.open(DashboardSubProduct, {
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

      if (result === 'SUCCESS') {
        console.log('success');
        this.getProducts();
        // this.loadSubProducts(); // 🔥 refresh list / API call
      }
    });
  }

  openDeletePopup(product: any) {
    this.selectedProduct = product;
    this.showDeleteConfirm = true;
  }

  getProducts() {
    this.adminCenterService.getAllSubProducts().subscribe({
      next: (res) => {
        console.log('res', res);
        this.products = res;
      },
      error: (err) => {
        console.error('API Error:', err);
      }
    });
  }

  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }

  cancelDelete() {
    this.showDeleteConfirm = false;
    this.selectedProduct = null;
  }

  confirmDelete() {
    console.log('Deleting product:', this.selectedProduct);
    const deleteString = this.selectedProduct.subProductId.toString();
    this.showDeleteConfirm = false;
    // this.selectedProduct = null;
    this.adminCenterService.deleteSubProduct(deleteString).subscribe((res) => {
      console.log('res', res);
      if (res.status.code == '000000') {
        this.getProducts();
      }
    })
  }
}