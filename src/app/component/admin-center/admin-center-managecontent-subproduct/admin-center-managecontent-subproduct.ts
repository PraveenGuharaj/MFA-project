import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../admin-center-service';

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
  subProductApi: any;

  constructor(private adminCenterService: AdminCenterService) { }
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

  ngOnInit() {
    this.getSubProductApi();
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
}
