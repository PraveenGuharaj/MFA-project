import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-admin-center-partner-onboarding',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './admin-center-partner-onboarding.html',
  styleUrl: './admin-center-partner-onboarding.scss',
})
export class AdminCenterPartnerOnboarding {
  @Input() subProduct: boolean = false;

  products = [
    {
      productId: 6,
      companyName: 'Banner testing',
      companyRegistrationNo: 'BannerID6',
      startDate: '34534',
      endDate: 3,
      status: 'Active',
      actionsType: 'image'
    },
    {
      productId: 5,
      companyName: 'Banner testing',
      companyRegistrationNo: 'BannerID6',
      startDate: '563',
      endDate: 2,
      status: 'Active',
      actionsType: 'image'
    },
    {
      productId: 1,
      companyName: 'Banner testing',
      companyRegistrationNo: 'BannerID6',
      startDate: '3425',
      endDate: 2,
      status: 'Active',
      actionsType: 'image'
    },
    {
      productId: 2,
      companyName: 'Banner testing',
      companyRegistrationNo: 'BannerID6',
      startDate: '2345',
      endDate: 1,
      status: 'Active',
      actionsType: 'image'
    },
    {
      productId: 1,
      companyName: 'Banner testing',
      companyRegistrationNo: 'BannerID6',
      startDate: '34534',
      endDate: 1,
      status: 'Active',
      actionsType: 'image'
    },
    {
      productId: 1,
      companyName: 'Banner testing',
      companyRegistrationNo: 'BannerID6',
      startDate: '34534',
      endDate: 3,
      status: 'Active',
      actionsType: 'image'
    },
    {
      productId: 2,
      companyName: 'Banner testing',
      companyRegistrationNo: 'BannerID6',
      startDate: '34534',
      endDate: 3,
      status: 'Active',
      actionsType: 'image'
    },
    {
      productId: 1,
      companyName: 'Banner testing',
      companyRegistrationNo: 'BannerID6',
      startDate: '34534',
      endDate: 3,
      status: 'Active',
      actionsType: 'image'
    },
    {
      productId: 6,
      companyName: 'Banner testing',
      companyRegistrationNo: 'BannerID6',
      startDate: '34534',
      endDate: 3,
      status: 'Active',
      actionsType: 'image'
    },
    {
      productId: 6,
      companyName: 'Banner testing',
      companyRegistrationNo: 'BannerID6',
      startDate: '34534',
      endDate: 3,
      status: 'Active',
      actionsType: 'image'
    }
  ];


  onProductcompanyRegistrationNoChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}