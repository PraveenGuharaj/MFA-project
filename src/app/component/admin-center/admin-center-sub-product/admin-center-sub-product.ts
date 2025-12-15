import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

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

  products = [
    {
      subProductId: 'PR0014',
      subProductType: 'Digital Savings Account',
      subProductNameEnglish: 'بطاقت',
      subProductNameArabic: 'بطاقت',
      subProductDescriptionEnglish: 'A convenient online savings account that allows customers...',
      subProductDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
      status: 'Enabled',
      priority: 1

    },
    {
      subProductId: 'PR0014',
      subProductType: 'Digital Savings Account',
      subProductNameEnglish: 'بطاقت',
      subProductNameArabic: 'بطاقت',
      subProductDescriptionEnglish: 'A convenient online savings account that allows customers...',
      subProductDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
      status: 'Enabled',
      priority: 1

    },
    {
      subProductId: 'PR0014',
      subProductType: 'Digital Savings Account',
      subProductNameEnglish: 'بطاقت',
      subProductNameArabic: 'بطاقت',
      subProductDescriptionEnglish: 'A convenient online savings account that allows customers...',
      subProductDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
      status: 'Enabled',
      priority: 1

    },
    {
      subProductId: 'PR0014',
      subProductType: 'Digital Savings Account',
      subProductNameEnglish: 'بطاقت',
      subProductNameArabic: 'بطاقت',
      subProductDescriptionEnglish: 'A convenient online savings account that allows customers...',
      subProductDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
      status: 'Enabled',
      priority: 1

    },
    {
      subProductId: 'PR0014',
      subProductType: 'Digital Savings Account',
      subProductNameEnglish: 'بطاقت',
      subProductNameArabic: 'بطاقت',
      subProductDescriptionEnglish: 'A convenient online savings account that allows customers...',
      subProductDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
      status: 'Enabled',
      priority: 1

    },
    {
      subProductId: 'PR0014',
      subProductType: 'Digital Savings Account',
      subProductNameEnglish: 'بطاقت',
      subProductNameArabic: 'بطاقت',
      subProductDescriptionEnglish: 'A convenient online savings account that allows customers...',
      subProductDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
      status: 'Enabled',
      priority: 1

    },
    {
      subProductId: 'PR0014',
      subProductType: 'Digital Savings Account',
      subProductNameEnglish: 'بطاقت',
      subProductNameArabic: 'بطاقت',
      subProductDescriptionEnglish: 'A convenient online savings account that allows customers...',
      subProductDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
      status: 'Enabled',
      priority: 1

    }
  ];


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}
