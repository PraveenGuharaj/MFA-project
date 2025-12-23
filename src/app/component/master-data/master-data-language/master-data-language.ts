import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-master-data-language',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './master-data-language.html',
  styleUrl: './master-data-language.scss',
})
export class MasterDataLanguage {
  @Input() subProduct: boolean = false;

  products = [
    {
      languageCode: 'AUS',
      languageDescription: 'Australia',
      description: 'BannerID6',
      status: 'Yes',
      actionsType: 'image'
    },
    {
      languageCode: 'USA',
      languageDescription: 'United States of America',
      description: 'Banner56',
      status: 'Yes',
      actionsType: 'image'
    },
    {
      languageCode: 'BRA',
      languageDescription: 'Brazil',
      description: 'Terms',
      status: 'Yes',
      actionsType: 'image'
    },
    {
      languageCode: 'FRA',
      languageDescription: 'France',
      description: 'Language',
      status: 'Yes',
      actionsType: 'image'
    },
    {
      languageCode: 'IND',
      languageDescription: 'India',
      description: 'Banner56',
      status: 'Yes',
      actionsType: 'image'
    },
    {
      languageCode: 'FRA',
      languageDescription: 'France',
      description: 'Language',
      status: 'Yes',
      actionsType: 'image'
    }
  ];


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}
