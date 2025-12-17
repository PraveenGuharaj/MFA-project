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
      value: 'Banner testing',
      remarks: 'BannerID6',
      status: 'Active',
      actionsType: 'image'
    },
    {
      key: 1,
      value: 'Banner testing',
      remarks: 'BannerID6',
      status: 'Active',
      actionsType: 'image'
    },
    {
      key: 1,
      value: 'Banner testing',
      remarks: 'BannerID6',
      status: 'Active',
      actionsType: 'image'
    },
    {
      key: 1,
      value: 'Banner testing',
      remarks: 'BannerID6',
      status: 'Active',
      actionsType: 'image'
    },
    {
      key: 1,
      value: 'Banner testing',
      remarks: 'BannerID6',
      status: 'Active',
      actionsType: 'image'
    },
    {
      key: 1,
      value: 'Banner testing',
      remarks: 'BannerID6',
      status: 'Active',
      actionsType: 'image'
    },
    {
      key: 1,
      value: 'Banner testing',
      remarks: 'BannerID6',
      status: 'Active',
      actionsType: 'image'
    },
    {
      key: 1,
      value: 'Banner testing',
      remarks: 'BannerID6',
      status: 'Active',
      actionsType: 'image'
    },
    {
      key: 1,
      value: 'Banner testing',
      remarks: 'BannerID6',
      status: 'Active',
      actionsType: 'image'
    },
    {
      key: 1,
      value: 'Banner testing',
      remarks: 'BannerID6',
      status: 'Active',
      actionsType: 'image'
    }
  ];


  onProductremarksChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}
