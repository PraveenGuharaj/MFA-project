import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../admin-center-service';
import { ComonPopup } from '../../../shared/comon-popup/comon-popup';
import { MatDialog } from '@angular/material/dialog';
import { DashboardAddRetailProduct } from '../../dashboard/dashboard-add-retail-product/dashboard-add-retail-product';

@Component({
  selector: 'app-admin-center-retail-product',
  imports: [
    CommonModule,
    MatIconModule,
    ComonPopup
  ],
  templateUrl: './admin-center-retail-product.html',
  styleUrl: './admin-center-retail-product.scss',
})
export class AdminCenterRetailProduct {
  @Input() subProduct: boolean = false;
  products: any;
  showDeleteConfirm: boolean = false;
  selectedProduct: any;
  constructor(private adminCenterService: AdminCenterService, public dialog: MatDialog) { }


  // products = [
  //   {
  //     subProductId: 'Gold Savings Account',

  //     subProductNameEnglish: [
  //       'High interest savings',
  //       'High interest savings',
  //       'High interest savings'
  //     ],
  //     subProductNameArabic: 'All',
  //     subProductDescriptionEnglish: 'SAV-001',
  //     subProductDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
  //     status: 'Active',
  //     actionsType: 'image',
  //     priority: 1

  //   },
  //   {
  //     subProductId: 'Standard Current Account',

  //     subProductNameEnglish: [
  //       'High interest savings',
  //       'High interest savings',
  //       'High interest savings'
  //     ],
  //     subProductNameArabic: 'Web',
  //     subProductDescriptionEnglish: 'CUR-002',
  //     subProductDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
  //     status: 'Active',
  //     actionsType: 'image',
  //     priority: 1

  //   },
  //   {
  //     subProductId: 'Personal Loan',

  //     subProductNameEnglish: [
  //       'High interest savings',
  //       'High interest savings',
  //       'High interest savings'
  //     ],
  //     subProductNameArabic: 'Mobile',
  //     subProductDescriptionEnglish: 'LON-003',
  //     subProductDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
  //     status: 'Active',
  //     actionsType: 'image',
  //     priority: 1

  //   },
  //   {
  //     subProductId: 'Platinum Credit Card',

  //     subProductNameEnglish: [
  //       'High interest savings',
  //       'High interest savings',
  //       'High interest savings'
  //     ],
  //     subProductNameArabic: 'All',
  //     subProductDescriptionEnglish: 'CRD-004',
  //     subProductDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
  //     status: 'Active',
  //     actionsType: 'image',
  //     priority: 1

  //   },
  //   {
  //     subProductId: 'Fixed Deposit',

  //     subProductNameEnglish: [
  //       'High interest savings',
  //       'High interest savings',
  //       'High interest savings'
  //     ],
  //     subProductNameArabic: 'All',
  //     subProductDescriptionEnglish: 'SAV-001',
  //     subProductDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
  //     status: 'Active',
  //     actionsType: 'image',
  //     priority: 1

  //   },
  //   {
  //     subProductId: 'Gold Savings Account',

  //     subProductNameEnglish: [
  //       'High interest savings',
  //       'High interest savings',
  //       'High interest savings'
  //     ],
  //     subProductNameArabic: 'All',
  //     subProductDescriptionEnglish: 'SAV-001',
  //     subProductDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
  //     status: 'Active',
  //     actionsType: 'image',
  //     priority: 1

  //   },
  //   {
  //     subProductId: 'Gold Savings Account',

  //     subProductNameEnglish: [
  //       'High interest savings',
  //       'High interest savings',
  //       'High interest savings'
  //     ],
  //     subProductNameArabic: 'All',
  //     subProductDescriptionEnglish: 'SAV-001',
  //     subProductDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
  //     status: 'Active',
  //     actionsType: 'image',
  //     priority: 1

  //   }
  // ];

  ngOnInit(): void {
    console.log('getproduct');
    this.adminCenterService.refresh$.subscribe(() => {
      console.log('Refreshing table...');
      this.getProducts(); // 🔥 refresh API call
    });
    this.getProducts();
  }


  openModal(product: any) {
    console.log('product', product);

    const dialogRef = this.dialog.open(DashboardAddRetailProduct, {
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
        this.getProducts();
        // this.loadSubProducts(); // 🔥 refresh list / API call
      }
    });
  }

  getProducts() {
    this.adminCenterService.getAllProducts().subscribe({
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

  deleteProduct(id: number) {


    // this.adminCenterService.deleteRetailProduct(id).subscribe({
    //   next: () => {
    //     alert('Product deleted successfully');
    //   },
    //   error: (err) => {
    //     console.error(err);
    //     alert('Delete failed');
    //   }
    // });
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
    // 🔥 CALL DELETE API HERE
    console.log('Deleting product:', this.selectedProduct);

    this.showDeleteConfirm = false;
    // this.selectedProduct = null;
    this.adminCenterService.deleteRetailProduct(this.selectedProduct.productId).subscribe((res) => {
      console.log('res', res);
      if (res.status.code == "SUCCESS") {
        this.getProducts();
      }

    })
  }

}
