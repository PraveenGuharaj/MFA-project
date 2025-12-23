import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-master-data-currency',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './master-data-currency.html',
  styleUrl: './master-data-currency.scss',
})
export class MasterDataCurrency {
  @Input() subProduct: boolean = false;

  products = [
    {
      unitId: 'PRD',
      currencyCode: 'AUS',
      currencyIsoCode: 'BannerID6',
      QCB: 'Yes',
      spotRateReciprocal: 'Yes',
      noOfDecimal: 'Yes',
      language: 'Yes',
      status: 'Yes'
    },
    {
      unitId: 'PRD',
      currencyCode: 'USA',
      currencyIsoCode: 'Banner56',
      QCB: 'Yes',
      spotRateReciprocal: 'Yes',
      noOfDecimal: 'Yes',
      language: 'Yes',
      status: 'Yes'
    },
    {
      unitId: 'PRD',
      currencyCode: 'BRA',
      currencyIsoCode: 'Terms',
      QCB: 'Yes',
      spotRateReciprocal: 'Yes',
      noOfDecimal: 'Yes',
      language: 'Yes',
      status: 'Yes'
    },
    {
      unitId: 'PRD',
      currencyCode: 'FRA',
      currencyIsoCode: 'Language',
      QCB: 'Yes',
      spotRateReciprocal: 'Yes',
      noOfDecimal: 'Yes',
      language: 'Yes',
      status: 'Yes'
    },
    {
      unitId: 'PRD',
      currencyCode: 'AUS',
      currencyIsoCode: 'BannerID6',
      QCB: 'Yes',
      spotRateReciprocal: 'Yes',
      noOfDecimal: 'Yes',
      language: 'Yes',
      status: 'Yes'
    },
    {
      unitId: 'PRD',
      currencyCode: 'AUS',
      currencyIsoCode: 'BannerID6',
      QCB: 'Yes',
      spotRateReciprocal: 'Yes',
      noOfDecimal: 'Yes',
      language: 'Yes',
      status: 'Yes'
    }
  ];


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}
