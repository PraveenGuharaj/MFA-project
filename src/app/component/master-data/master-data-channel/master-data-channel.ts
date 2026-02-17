import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../../admin-center/admin-center-service';

@Component({
  selector: 'app-master-data-channel',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './master-data-channel.html',
  styleUrl: './master-data-channel.scss',
})
export class MasterDataChannel {
  @Input() subProduct: boolean = false;
  getChannelData: any;

  constructor(private adminCenterService: AdminCenterService) { }

  ngOnInit() {
    this.getChannelApi();
  }

  products = [
    {
      channelId: 'AUS',
      countryDescription: 'Australia',
      description: 'BannerID6',
      status: 'Yes',
      actionsType: 'image'
    },
    {
      channelId: 'USA',
      countryDescription: 'United States of America',
      description: 'Banner56',
      status: 'Yes',
      actionsType: 'image'
    },
    {
      channelId: 'BRA',
      countryDescription: 'Brazil',
      description: 'Terms',
      status: 'Yes',
      actionsType: 'image'
    },
    {
      channelId: 'FRA',
      countryDescription: 'France',
      description: 'Language',
      status: 'Yes',
      actionsType: 'image'
    },
    {
      channelId: 'IND',
      countryDescription: 'India',
      description: 'Banner56',
      status: 'Yes',
      actionsType: 'image'
    },
    {
      channelId: 'FRA',
      countryDescription: 'France',
      description: 'Language',
      status: 'Yes',
      actionsType: 'image'
    }
  ];

  getChannelApi() {
    this.adminCenterService.getMasterChannel().subscribe((res: any) => {
      this.getChannelData = res.data;
    })
  }


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}
