import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-manage-parameter',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './manage-parameter.html',
  styleUrl: './manage-parameter.scss',
})
export class ManageParameter {
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
