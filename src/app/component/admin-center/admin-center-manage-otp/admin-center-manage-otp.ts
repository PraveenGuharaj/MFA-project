import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-admin-center-manage-otp',
  imports: [
      CommonModule,
    MatIconModule
  ],
  templateUrl: './admin-center-manage-otp.html',
  styleUrl: './admin-center-manage-otp.scss',
})
export class AdminCenterManageOtp {
   @Input() subProduct: boolean = false;
  ngOnInit() {
    console.log('subProduct', this.subProduct)
  }

  products = [
    {
      domain: 'Domain1',
      channel: 'Mobile Banking',
      category: 'SAV-001',
      otpLength: 4,
      otpExpiry: '100s',
      maxAttempts: 4,
      deliveryModes: 'SMS',
      status: 'Active',
      actionsType: 'image'
    },
   {
      domain: 'Domain2',
      channel: 'WebPortal',
      category: 'CUR-002',
      otpLength: 3,
      otpExpiry: '300s',
      maxAttempts: 3,
      deliveryModes: 'PUSH',
      status: 'Active',
      actionsType: 'image'
    },
     {
      domain: 'Domain3',
      channel: 'Mobile App',
      category: 'LON-003',
      otpLength: 2,
      otpExpiry: '100s',
      maxAttempts: 2,
      deliveryModes: 'PUSH',
      status: 'Active',
      actionsType: 'image'
    },
     {
      domain: 'Domain4',
      channel: 'Mobile Banking',
      category: 'CRD-004',
      otpLength: 5,
      otpExpiry: '50s',
      maxAttempts: 5,
      deliveryModes: 'SMS',
      status: 'Active',
      actionsType: 'image'
    },
    {
      domain: 'Domain5',
      channel: 'WebPortal',
      category: 'DEP-005',
      otpLength: 1,
      otpExpiry: '60s',
      maxAttempts: 1,
      deliveryModes: 'SMS',
      status: 'Active',
      actionsType: 'image'
    },
     {
      domain: 'Domain4',
      channel: 'Mobile Banking',
      category: 'CRD-004',
      otpLength: 5,
      otpExpiry: '50s',
      maxAttempts: 5,
      deliveryModes: 'SMS',
      status: 'Active',
      actionsType: 'image'
    },
    {
      domain: 'Domain5',
      channel: 'WebPortal',
      category: 'DEP-005',
      otpLength: 1,
      otpExpiry: '60s',
      maxAttempts: 1,
      deliveryModes: 'SMS',
      status: 'Active',
      actionsType: 'image'
    },
     {
      domain: 'Domain4',
      channel: 'Mobile Banking',
      category: 'CRD-004',
      otpLength: 5,
      otpExpiry: '50s',
      maxAttempts: 5,
      deliveryModes: 'SMS',
      status: 'Active',
      actionsType: 'image'
    },
    {
      domain: 'Domain5',
      channel: 'WebPortal',
      category: 'DEP-005',
      otpLength: 1,
      otpExpiry: '60s',
      maxAttempts: 1,
      deliveryModes: 'SMS',
      status: 'Active',
      actionsType: 'image'
    },
     {
      domain: 'Domain4',
      channel: 'Mobile Banking',
      category: 'CRD-004',
      otpLength: 5,
      otpExpiry: '50s',
      maxAttempts: 5,
      deliveryModes: 'SMS',
      status: 'Active',
      actionsType: 'image'
    },
    {
      domain: 'Domain5',
      channel: 'WebPortal',
      category: 'DEP-005',
      otpLength: 1,
      otpExpiry: '60s',
      maxAttempts: 1,
      deliveryModes: 'SMS',
      status: 'Active',
      actionsType: 'image'
    },
     {
      domain: 'Domain4',
      channel: 'Mobile Banking',
      category: 'CRD-004',
      otpLength: 5,
      otpExpiry: '50s',
      maxAttempts: 5,
      deliveryModes: 'SMS',
      status: 'Active',
      actionsType: 'image'
    },
    {
      domain: 'Domain5',
      channel: 'WebPortal',
      category: 'DEP-005',
      otpLength: 1,
      otpExpiry: '60s',
      maxAttempts: 1,
      deliveryModes: 'SMS',
      status: 'Active',
      actionsType: 'image'
    }
  ];


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}
