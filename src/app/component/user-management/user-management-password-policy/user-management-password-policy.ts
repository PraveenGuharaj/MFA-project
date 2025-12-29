import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-management-password-policy',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './user-management-password-policy.html',
  styleUrl: './user-management-password-policy.scss',
})
export class UserManagementPasswordPolicy {
  @Input() subProduct: boolean = false;

  products = [
    {
      domain: 'AUS',
      policyName: 'Australia',
      channel: 'BannerID6',
      category: 'AUS',
      rules: 'Blue',
      status: 'Yes',
      actionsType: 'image',

    },
    {
      domain: 'USA',
      policyName: 'United States of America',
      channel: 'Banner56',
      category: 'USA',
      rules: 'Green',
      status: 'Yes',
      actionsType: 'image',

    },
    {
      domain: 'BRA',
      policyName: 'Brazil',
      channel: 'Terms',
      category: 'BRA',
      rules: 'Yellow',
      status: 'Yes',
      actionsType: 'image',

    },
    {
      domain: 'FRA',
      policyName: 'France',
      channel: 'Language',
      category: 'FRA',
      rules: 'Green',
      status: 'Yes',
      actionsType: 'image',

    },
    {
      domain: 'IND',
      policyName: 'India',
      channel: 'Banner56',
      category: 'IND',
      rules: 'Green',
      status: 'Yes',
      actionsType: 'image',

    },
    {
      domain: 'FRA',
      policyName: 'France',
      channel: 'Language',
      category: 'FRA',
      rules: 'Green',
      status: 'Yes',
      actionsType: 'image',

    }
  ];


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}
