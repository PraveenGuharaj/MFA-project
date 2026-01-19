import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../admin-center-service';

@Component({
  selector: 'app-admin-center-sub-product',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './admin-center-sub-product.html',
  styleUrl: './admin-center-sub-product.scss',
})
export class AdminCenterSubProduct {
  @Input() subProduct: boolean = false;
  // products: any;
  products = [
    {
      subProductId: 'Gold Savings Account',
      subProductType: 'Gold Savings Account',
      subProductNameEnglish: [
        'High interest savings',
        'High interest savings',
        'High interest savings'
      ],
      subProductNameArabic: 'All',
      subProductDescriptionEnglish: 'SAV-001',
      subProductDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
      status: 'Active',
      actionsType: 'image',
      priority: 1

    },
    {
      subProductId: 'Standard Current Account',
      subProductType: 'Standard Current Account',
      subProductNameEnglish: [
        'High interest savings',
        'High interest savings',
        'High interest savings'
      ],
      subProductNameArabic: 'Web',
      subProductDescriptionEnglish: 'CUR-002',
      subProductDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
      status: 'Active',
      actionsType: 'image',
      priority: 1

    },
    {
      subProductId: 'Personal Loan',
      subProductType: 'Personal Loan',
      subProductNameEnglish: [
        'High interest savings',
        'High interest savings',
        'High interest savings'
      ],
      subProductNameArabic: 'Mobile',
      subProductDescriptionEnglish: 'LON-003',
      subProductDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
      status: 'Active',
      actionsType: 'image',
      priority: 1

    },
    {
      subProductId: 'Platinum Credit Card',
      subProductType: 'Platinum Credit Card',
      subProductNameEnglish: [
        'High interest savings',
        'High interest savings',
        'High interest savings'
      ],
      subProductNameArabic: 'All',
      subProductDescriptionEnglish: 'CRD-004',
      subProductDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
      status: 'Active',
      actionsType: 'image',
      priority: 1

    },
    {
      subProductId: 'Fixed Deposit',
      subProductType: 'Fixed Deposit',
      subProductNameEnglish: [
        'High interest savings',
        'High interest savings',
        'High interest savings'
      ],
      subProductNameArabic: 'All',
      subProductDescriptionEnglish: 'SAV-001',
      subProductDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
      status: 'Active',
      actionsType: 'image',
      priority: 1

    },
    {
      subProductId: 'Gold Savings Account',
      subProductType: 'Gold Savings Account',
      subProductNameEnglish: [
        'High interest savings',
        'High interest savings',
        'High interest savings'
      ],
      subProductNameArabic: 'All',
      subProductDescriptionEnglish: 'SAV-001',
      subProductDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
      status: 'Active',
      actionsType: 'image',
      priority: 1

    },
    {
      subProductId: 'Gold Savings Account',
      subProductType: 'Gold Savings Account',
      subProductNameEnglish: [
        'High interest savings',
        'High interest savings',
        'High interest savings'
      ],
      subProductNameArabic: 'All',
      subProductDescriptionEnglish: 'SAV-001',
      subProductDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
      status: 'Active',
      actionsType: 'image',
      priority: 1

    }
  ];

  constructor(private adminCenterService: AdminCenterService) { }
  ngOnInit(): void {
    console.log('getproduct');

    this.getProducts();
  }

  getProducts() {
    this.adminCenterService.getAllSubProducts().subscribe({
      next: (res) => {
        console.log('res', res);
        // this.products = res;
      },
      error: (err) => {
        console.error('API Error:', err);
      }
    });
  }

  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}