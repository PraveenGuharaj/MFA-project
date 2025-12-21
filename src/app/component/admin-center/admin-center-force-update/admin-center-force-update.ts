import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-admin-center-force-update',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './admin-center-force-update.html',
  styleUrl: './admin-center-force-update.scss',
})
export class AdminCenterForceUpdate {
  @Input() subProduct: boolean = false;

  products = [
    {
      key: 1,
      country: 'Qatar',
      channel: 'Mobile Banking',
      platform: 'Mobile Banking',
      version: '2',
      forceUpdate: 'Yes',
      remarks: 'BannerID6',
      status: 'Active',
      actionsType: 'image'
    },
    {
      key: 2,
      country: 'India',
      channel: 'WebPortal',
      platform: 'Mobile Banking',
      version: '2',
      forceUpdate: 'Yes',
      remarks: 'Banner56',
      status: 'Active',
      actionsType: 'image'
    },
    {
      key: 3,
      country: 'Qatar',
      channel: 'Mobile App',
      platform: 'Mobile Banking',
      version: '2',
      forceUpdate: 'Yes',
      remarks: 'Terms',
      status: 'Active',
      actionsType: 'image'
    },
    {
      key: 4,
      country: 'India',
      channel: 'Mobile Banking',
      platform: 'Mobile Banking',
      version: '2',
      forceUpdate: 'Yes',
      remarks: 'Language',
      status: 'Active',
      actionsType: 'image'
    },
    {
      key: 5,
      country: 'Qatar',
      channel: 'Mobile App',
      platform: 'Mobile Banking',
      version: '2',
      forceUpdate: 'Yes',
      remarks: 'Banner56',
      status: 'Active',
      actionsType: 'image'
    },
    {
      key: 6,
      country: 'India',
      channel: 'Mobile Banking',
      platform: 'Mobile Banking',
      version: '2',
      forceUpdate: 'Yes',
      remarks: 'Language',
      status: 'Active',
      actionsType: 'image'
    },
    {
      key: 7,
      country: 'Qatar',
      channel: 'Mobile App',
      platform: 'Mobile Banking',
      version: '2',
      forceUpdate: 'Yes',
      remarks: 'BannerID6',
      status: 'Active',
      actionsType: 'image'
    },
    {
      key: 8,
      country: 'India',
      channel: 'Mobile Banking',
      platform: 'Mobile Banking',
      version: '2',
      forceUpdate: 'Yes',
      remarks: 'BannerID6',
      status: 'Active',
      actionsType: 'image'
    },
    {
      key: 1,
      country: 'Qatar',
      channel: 'Mobile App',
      platform: 'Mobile Banking',
      version: '2',
      forceUpdate: 'Yes',
      remarks: 'BannerID6',
      status: 'Active',
      actionsType: 'image'
    },
    {
      key: 1,
      country: 'India',
      channel: 'Mobile Banking',
      platform: 'Mobile Banking',
      version: '2',
      forceUpdate: 'Yes',
      remarks: 'BannerID6',
      status: 'Active',
      actionsType: 'image'
    }
  ];


  onProductremarksChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}
