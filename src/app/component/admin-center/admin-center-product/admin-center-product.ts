import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-admin-center-product',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './admin-center-product.html',
  styleUrl: './admin-center-product.scss',
})
export class AdminCenterProduct {
  @Input() subProduct: boolean = false;

  products = [
    {
      productCode: 'PR0014',
      productNameEnglish: 'Digital Savings Account',
      productNameArabic: 'بطاقت',
      productDescriptionEnglish: 'A convenient online savings account that allows customers...',
      productDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
      status: 'Enabled',
      priority: 1

    },
    {
      productCode: 'PR0014',
      productNameEnglish: 'Digital Savings Account',
      productNameArabic: 'بطاقت',
      productDescriptionEnglish: 'A convenient online savings account that allows customers...',
      productDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
      status: 'Enabled',
      priority: 1

    },
    {
      productCode: 'PR0014',
      productNameEnglish: 'Digital Savings Account',
      productNameArabic: 'بطاقت',
      productDescriptionEnglish: 'A convenient online savings account that allows customers...',
      productDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
      status: 'Enabled',
      priority: 1

    },
    {
      productCode: 'PR0014',
      productNameEnglish: 'Digital Savings Account',
      productNameArabic: 'بطاقت',
      productDescriptionEnglish: 'A convenient online savings account that allows customers...',
      productDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
      status: 'Enabled',
      priority: 1

    },
    {
      productCode: 'PR0014',
      productNameEnglish: 'Digital Savings Account',
      productNameArabic: 'بطاقت',
      productDescriptionEnglish: 'A convenient online savings account that allows customers...',
      productDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
      status: 'Enabled',
      priority: 1

    },
    {
      productCode: 'PR0014',
      productNameEnglish: 'Digital Savings Account',
      productNameArabic: 'بطاقت',
      productDescriptionEnglish: 'A convenient online savings account that allows customers...',
      productDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
      status: 'Enabled',
      priority: 1

    },
    {
      productCode: 'PR0014',
      productNameEnglish: 'Digital Savings Account',
      productNameArabic: 'بطاقت',
      productDescriptionEnglish: 'A convenient online savings account that allows customers...',
      productDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
      status: 'Enabled',
      priority: 1

    }
  ];


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}
