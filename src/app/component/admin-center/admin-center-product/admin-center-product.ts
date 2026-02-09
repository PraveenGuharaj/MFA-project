import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../admin-center-service';

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
  getProductData: any;

  constructor(private adminCenterService: AdminCenterService) { }

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

  ngOnInit() {
    this.getProductApi();
  }

  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }

  getProductApi() {
    this.adminCenterService.getProduct().subscribe((res: any) => {
      console.log('getproduct', res);
      this.getProductData = res.data;
    })
  }
}
