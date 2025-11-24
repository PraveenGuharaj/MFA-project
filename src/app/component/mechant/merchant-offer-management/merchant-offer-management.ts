import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-merchant-offer-management',
  imports: [
    CommonModule, MatIconModule, MatButtonModule, FormsModule

  ],
  templateUrl: './merchant-offer-management.html',
  styleUrl: './merchant-offer-management.scss',
})
export class MerchantOfferManagement {

  offers = [
    {
      merchantName: 'Nike Store',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
      title: 'Summer Sale - 30% Off',
      discount: '30%',
      discountType: 'Percentage',
      category: 'Seasonal',
      validPeriod: '6/1/2024 - 8/31/2024',
      status: 'Active',
    },
    {
      merchantName: 'Apple Store',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
      title: 'Back to School Bundle',
      discount: '$200',
      discountType: 'Fixed',
      category: 'New Customer',
      validPeriod: '8/15/2024 - 9/30/2024',
      status: 'Active',
    },
    {
      merchantName: 'Starbucks',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Starbucks_logo_2011.svg',
      title: 'Buy One Get One Free',
      discount: '1 Free',
      discountType: 'BOGO',
      category: 'Loyalty',
      validPeriod: '7/1/2024 - 7/31/2024',
      status: 'Pending',
    },
  ];

  createOffer() {
    console.log('Create a new offer');
  }

}