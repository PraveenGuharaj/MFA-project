import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-work-flow-sub-product-management',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './work-flow-sub-product-management.html',
  styleUrl: './work-flow-sub-product-management.scss',
})
export class WorkFlowSubProductManagement {
  @Input() subProduct: boolean = false;

  products = [
    {
      domain: 'BO',
      product: 'PRD',
      subProductCode: 'USER_MANAGEMENT_CONFIG',
      subProductDescription: 'User Management',
      enterSubProductURL: 'User Management',
      status: 'Active'

    },
    {
      domain: 'BO',
      product: 'PRD',
      subProductCode: 'PARTNER_ONBOARDING_CONFIG',
      subProductDescription: 'Partner Onboarding',
      enterSubProductURL: 'Partner Onboarding',
      status: 'Active'

    },
    {
      domain: 'BO',
      product: 'PRD',
      subProductCode: 'CUSTOMER_SERVICE_CONFIG',
      subProductDescription: 'Customer Service',
      enterSubProductURL: 'Customer Service',
      status: 'Active'

    },
    {
      domain: 'BO',
      product: 'PRD',
      subProductCode: 'NOTIFICATIONS_MANAGEMENT_CONFIG',
      subProductDescription: 'Notifications Management',
      enterSubProductURL: 'Notifications Management',
      status: 'Active'

    },
    {
      domain: 'BO',
      product: 'PRD',
      subProductCode: 'LICENSE_CONFIG',
      subProductDescription: 'License Management',
      enterSubProductURL: 'License Management',
      status: 'Active'

    },
    {
      domain: 'BO',
      product: 'PRD',
      subProductCode: 'OTP_BIO_CONFIGURATION',
      subProductDescription: 'User Management',
      enterSubProductURL: 'User Management',
      status: 'Active'

    }
  ];


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}
