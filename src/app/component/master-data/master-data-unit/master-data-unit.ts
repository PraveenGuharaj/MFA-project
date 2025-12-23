import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-master-data-unit',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './master-data-unit.html',
  styleUrl: './master-data-unit.scss',
})
export class MasterDataUnit {
  @Input() subProduct: boolean = false;

  products = [
    {
      unitId: 'AUS',
      description: 'Australia',
      colour: 'White',
      unitDescription: 'Yes',
      countryCode: 'image',
      countryDescription: 'Yes',
      timeZone: 'Yes'
    },
    {
      unitId: 'USA',
      description: 'United States of America',
      colour: 'White',
      unitDescription: 'Yes',
      countryCode: 'image',
      countryDescription: 'Yes',
      timeZone: 'Yes'
    },
    {
      unitId: 'BRA',
      description: 'Brazil',
      colour: 'White',
      unitDescription: 'Yes',
      countryCode: 'image',
      countryDescription: 'Yes',
      timeZone: 'Yes'
    },
    {
      unitId: 'FRA',
      description: 'France',
      colour: 'White',
      unitDescription: 'Yes',
      countryCode: 'image',
      countryDescription: 'Yes',
      timeZone: 'Yes'
    },
    {
      unitId: 'IND',
      description: 'India',
      colour: 'White',
      unitDescription: 'Yes',
      countryCode: 'image',
      countryDescription: 'Yes',
      timeZone: 'Yes'
    },
    {
      unitId: 'FRA',
      description: 'France',
      colour: 'White',
      unitDescription: 'Yes',
      countryCode: 'image',
      countryDescription: 'Yes',
      timeZone: 'Yes'
    }
  ];


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}
