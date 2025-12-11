import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-admin-center-device-management',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './admin-center-device-management.html',
  styleUrl: './admin-center-device-management.scss',
})
export class AdminCenterDeviceManagement {
   @Input() subProduct: boolean = false;
   
  products = [
    {
      id: 73,
      applicationMode: 'Production',
      bundleidentifier: 'com.pro',
      iPhoneCertPassword: 'sysadmin123',
      iPadCertUploaded: 'Yes',
      status: 'Active',
      actionsType: 'image'
    },
    {
      id: 101,
      applicationMode: 'Production',
      bundleidentifier: 'com.pro',
      iPhoneCertPassword: 'sysadmin123',
      iPadCertUploaded: 'Yes',
      status: 'Active',
      actionsType: 'image'
    },
    {
      id: 52,
      applicationMode: 'Production',
      bundleidentifier: 'bundle',
      iPhoneCertPassword: 'sysadmin123',
      iPadCertUploaded: 'Yes',
      status: 'Active',
      actionsType: 'image'
    },
    {
      id: 111,
      applicationMode: 'Production',
      bundleidentifier: 'com.bankapp.ios.dev',
      iPhoneCertPassword: 'sysadmin123',
      iPadCertUploaded: 'Yes',
      status: 'Active',
      actionsType: 'image'
    },
    {
      id: 134,
      applicationMode: 'Production',
      bundleidentifier: 'com.proi',
      iPhoneCertPassword: 'sysadmin123',
      iPadCertUploaded: 'Yes',
      status: 'Active',
      actionsType: 'image'
    },
    {
      id: 34,
      applicationMode: 'Production',
      bundleidentifier: 'Security Question',
      iPhoneCertPassword: 'sysadmin123',
      iPadCertUploaded: 'Yes',
      status: 'Active',
      actionsType: 'image'
    },
    {
      id: 46,
      applicationMode: 'Production',
      bundleidentifier: 'bundle',
      iPhoneCertPassword: 'sysadmin123',
      iPadCertUploaded: 'Yes',
      status: 'Active',
      actionsType: 'image'
    },
    {
      id: 121,
      applicationMode: 'Production',
      bundleidentifier: 'com.bankapp.ios.dev',
      iPhoneCertPassword: 'sysadmin123',
      iPadCertUploaded: 'Yes',
      status: 'Active',
      actionsType: 'image'
    },
    {
      id: 122,
      applicationMode: 'Production',
      bundleidentifier: 'bundle',
      iPhoneCertPassword: 'sysadmin123',
      iPadCertUploaded: 'Yes',
      status: 'Active',
      actionsType: 'image'
    },
    {
      id: 133,
      applicationMode: 'Production',
      bundleidentifier: 'com.bankapp.ios.dev',
      iPhoneCertPassword: 'sysadmin123',
      iPadCertUploaded: 'Yes',
      status: 'Active',
      actionsType: 'image'
    }
  ];


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}
