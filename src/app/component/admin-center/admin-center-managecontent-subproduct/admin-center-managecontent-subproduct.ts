import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-admin-center-managecontent-subproduct',
  imports: [
      CommonModule,
    MatIconModule
  ],
  templateUrl: './admin-center-managecontent-subproduct.html',
  styleUrl: './admin-center-managecontent-subproduct.scss',
})
export class AdminCenterManagecontentSubproduct {
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
      actionsType: 'image',
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
      actionsType: 'image',
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
      actionsType: 'image',
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
      actionsType: 'image',
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
      actionsType: 'image',
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
      actionsType: 'image',
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
      actionsType: 'image',
      priority: 1

    }
  ];


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}
