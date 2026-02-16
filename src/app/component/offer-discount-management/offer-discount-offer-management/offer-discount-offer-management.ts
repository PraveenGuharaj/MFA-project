import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../../admin-center/admin-center-service';

@Component({
  selector: 'app-offer-discount-offer-management',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './offer-discount-offer-management.html',
  styleUrl: './offer-discount-offer-management.scss',
})
export class OfferDiscountOfferManagement {
  @Input() subProduct: boolean = false;
  getOfferMgmt: any;

  constructor(private adminCenterService: AdminCenterService) { }

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

  ngOnInit() {
    this.getOfferMgmtApi();
    this.adminCenterService.refresh$.subscribe(() => {
      console.log('Refreshing table...');
      this.getOfferMgmtApi();
    });
  }

  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }

  getOfferMgmtApi() {
    this.adminCenterService.getOfferMgmt().subscribe((res: any) => {
      this.getOfferMgmt = res.data;
    })
  }
}
