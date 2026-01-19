import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../admin-center-service';
import { ComonPopup } from '../../../shared/comon-popup/comon-popup';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  productForm!: FormGroup;
  editIndex: number | null = null;
  constructor(private adminCenterService: AdminCenterService, private fb: FormBuilder) { }


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

    this.getProducts();
  }

  initForm(p: any) {
    this.productForm = this.fb.group({
      name: [p.name],
      description: [p.description],
      status: [p.status],
      priority: [p.priority]
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

    })
  }

  editProduct(product: any, index: number) {
    this.editIndex = index;
    this.productForm = this.fb.group({
      name: [product.name],
      description: [product.description],
      status: [product.status],
      priority: [product.priority]
    });
  }

  cancelEdit() {
    this.editIndex = null;
  }

  updateProduct(product: any) {
    const updatedFields = this.getChangedValues(this.productForm, product);

    if (Object.keys(updatedFields).length === 0) {
      this.cancelEdit();
      return;
    }

    const payload = {
      id: product.id,
      ...updatedFields
    };

    console.log('UPDATE PAYLOAD:', payload);

    // 🔴 Call update API here
    // this.productService.updateProduct(payload).subscribe(() => {
    //   Object.assign(product, updatedFields);
    //   this.cancelEdit();
    // });

    // Simulate success
    Object.assign(product, updatedFields);
    this.cancelEdit();
  }

  private getChangedValues(form: FormGroup, original: any) {
    const changed: any = {};
    Object.keys(form.controls).forEach(key => {
      if (form.value[key] !== original[key]) {
        changed[key] = form.value[key];
      }
    });
    return changed;
  }



}
