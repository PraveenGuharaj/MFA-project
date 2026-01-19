import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../../admin-center/admin-center-service';

@Component({
  selector: 'app-master-data-country',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './master-data-country.html',
  styleUrl: './master-data-country.scss',
})
export class MasterDataCountry {
  @Input() subProduct: boolean = false;
  products: any;
  activeProduct: any;
  inActiveProduct: any;

  // products = [
  //   {
  //     countryCode: 'AUS',
  //     countryDescription: 'Australia',
  //     isoCountryCode: 'BannerID6',
  //     countryCodeISO3a: 'AUS',
  //     colour: 'Blue',
  //     unitDescription: 3,
  //     baseCurrency: 'medium'

  //   },
  //   {
  //     countryCode: 'USA',
  //     countryDescription: 'United States of America',
  //     isoCountryCode: 'Banner56',
  //     countryCodeISO3a: 'USA',
  //     colour: 'Green',
  //     unitDescription: 2,
  //     baseCurrency: 'small'

  //   },
  //   {
  //     countryCode: 'BRA',
  //     countryDescription: 'Brazil',
  //     isoCountryCode: 'Terms',
  //     countryCodeISO3a: 'BRA',
  //     colour: 'Yellow',
  //     unitDescription: 2,
  //     baseCurrency: 'small'

  //   },
  //   {
  //     countryCode: 'FRA',
  //     countryDescription: 'France',
  //     isoCountryCode: 'Language',
  //     countryCodeISO3a: 'FRA',
  //     colour: 'Blue',
  //     unitDescription: 1,
  //     baseCurrency: 'medium'

  //   },
  //   {
  //     countryCode: 'IND',
  //     countryDescription: 'India',
  //     isoCountryCode: 'Banner56',
  //     countryCodeISO3a: 'IND',
  //     colour: 'Blue',
  //     unitDescription: 3,
  //     baseCurrency: 'medium'

  //   },
  //   {
  //     countryCode: 'FRA',
  //     countryDescription: 'France',
  //     isoCountryCode: 'Language',
  //     countryCodeISO3a: 'FRA',
  //     colour: 'Blue',
  //     unitDescription: 3,
  //     baseCurrency: 'medium'

  //   }
  // ];

  constructor(private adminCenterService: AdminCenterService) { }

  ngOnInit() {
    this.adminCenterService.getAllCountry().subscribe((res) => {
      console.log('country', res);
      this.products = res;
      this.activeProduct = this.products?.data.filter((i: any) => i.status == 'ACT');
      this.inActiveProduct = this.products?.data.filter((i: any) => i.status == 'IAC');


    })
  }


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}
