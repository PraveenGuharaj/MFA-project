import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-offer-discount-discount-management',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './offer-discount-discount-management.html',
  styleUrl: './offer-discount-discount-management.scss',
})
export class OfferDiscountDiscountManagement {
  @Input() subProduct: boolean = false;

  products = [
    {
      offerId: 98,
      partnerName: 'Amazon',
      offerTitle: '10% Off',
      offerType: 'Welcome',
      rewardType: 'Points',
      validFrom: '29/10/2025 13:14:00',
      validTo: '29/10/2025 13:14:00',
      status: 'Active',
      actionsType: 'image'

    },
    {
      offerId: 98,
      partnerName: 'Flipkart',
      offerTitle: 'WER',
      offerType: 'Referral',
      rewardType: 'Voucher',
      validFrom: '29/10/2025 13:14:00',
      validTo: '29/10/2025 13:14:00',
      status: 'Active',
      actionsType: 'image'

    },
    {
      offerId: 98,
      partnerName: 'Amazon',
      offerTitle: 'Product 4',
      offerType: 'Welcome',
      rewardType: 'Cashback',
      validFrom: '29/10/2025 13:14:00',
      validTo: '29/10/2025 13:14:00',
      status: 'Active',
      actionsType: 'image'

    },
    {
      offerId: 98,
      partnerName: 'PARTNER_DKB',
      offerTitle: 'Zoho',
      offerType: 'Referral',
      rewardType: 'Points',
      validFrom: '29/10/2025 13:14:00',
      validTo: '29/10/2025 13:14:00',
      status: 'Active',
      actionsType: 'image'

    },
    {
      offerId: 98,
      partnerName: 'Amazon',
      offerTitle: 'New Year',
      offerType: 'Welcome',
      rewardType: 'Points',
      validFrom: '29/10/2025 13:14:00',
      validTo: '29/10/2025 13:14:00',
      status: 'Active',
      actionsType: 'image'

    },
    {
      offerId: 98,
      partnerName: 'Amazon',
      offerTitle: '10% Off',
      offerType: 'Referral',
      rewardType: 'Points',
      validFrom: '29/10/2025 13:14:00',
      validTo: '29/10/2025 13:14:00',
      status: 'Active',
      actionsType: 'image'

    },
    {
      offerId: 98,
      partnerName: 'Amazon',
      offerTitle: '10% Off',
      offerType: 'Welcome',
      rewardType: 'Points',
      validFrom: '29/10/2025 13:14:00',
      validTo: '29/10/2025 13:14:00',
      status: 'Active',
      actionsType: 'image'

    }
  ];


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}