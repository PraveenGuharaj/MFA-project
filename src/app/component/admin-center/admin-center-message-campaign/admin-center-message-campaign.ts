import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-admin-center-message-campaign',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './admin-center-message-campaign.html',
  styleUrl: './admin-center-message-campaign.scss',
})
export class AdminCenterMessageCampaign {
  @Input() subProduct: boolean = false;
 
  products = [
    {
      campaignId: '3a323c2e-0e5a-4016-bdab-c10e1d18e6ed',
      campaignName: 'Special Offer',
      createdOn: '20/07/2025 16:57:25',
      executedOn: '20/07/2025 16:57:25',
      notificationType: 'image',
      actionsType: 'image'
    },
    {
      campaignId: '3a323c2e-0e5a-4016-bdab-c10e1d18e6ed',
      campaignName: 'Wishes',
      createdOn: '20/07/2025 16:57:25',
      executedOn: '20/07/2025 16:57:25',
      notificationType: 'image',
      actionsType: 'image'
    },
    {
      campaignId: '3a323c2e-0e5a-4016-bdab-c10e1d18e6ed',
      campaignName: 'Date checking',
      createdOn: '20/07/2025 16:57:25',
      executedOn: '20/07/2025 16:57:25',
      notificationType: 'image',
      actionsType: 'image'
    },
    {
      campaignId: '3a323c2e-0e5a-4016-bdab-c10e1d18e6ed',
      campaignName: 'Sale',
      createdOn: '20/07/2025 16:57:25',
      executedOn: '20/07/2025 16:57:25',
      notificationType: 'image',
      actionsType: 'image'
    },
    {
      campaignId: '3a323c2e-0e5a-4016-bdab-c10e1d18e6ed',
      campaignName: 'Wishes',
      createdOn: '20/07/2025 16:57:25',
      executedOn: '20/07/2025 16:57:25',
      notificationType: 'image',
      actionsType: 'image'
    },
    {
      campaignId: '3a323c2e-0e5a-4016-bdab-c10e1d18e6ed',
      campaignName: 'Offer',
      createdOn: '20/07/2025 16:57:25',
      executedOn: '20/07/2025 16:57:25',
      notificationType: 'image',
      actionsType: 'image'
    },
    {
      campaignId: '3a323c2e-0e5a-4016-bdab-c10e1d18e6ed',
      campaignName: 'Wishes',
      createdOn: '20/07/2025 16:57:25',
      executedOn: '20/07/2025 16:57:25',
      notificationType: 'image',
      actionsType: 'image'
    }
  ];


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}
