import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-admin-center-retail-product',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './admin-center-retail-product.html',
  styleUrl: './admin-center-retail-product.scss',
})
export class AdminCenterRetailProduct {
  @Input() subProduct: boolean = false;

  products = [
    {
      subProductId: 'Gold Savings Account',

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


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}
