import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-work-flow-product-management',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './work-flow-product-management.html',
  styleUrl: './work-flow-product-management.scss',
})
export class WorkFlowProductManagement {
  @Input() subProduct: boolean = false;

  products = [
    {
      domain: 'BO',
      unit: 'PRD',
      productCode: 'USER_MANAGEMENT_CONFIG',
      productDescription: 'User Management',
      priority: 1,
      status: 'Active',
      actionsType: 'image'

    },
    {
      domain: 'BO',
      unit: 'PRD',
      productCode: 'PARTNER_ONBOARDING_CONFIG',
      productDescription: 'Partner Onboarding',
      priority: 1,
      status: 'Active',
      actionsType: 'image'

    },
    {
      domain: 'BO',
      unit: 'PRD',
      productCode: 'CUSTOMER_SERVICE_CONFIG',
      productDescription: 'Customer Service',
      priority: 1,
      status: 'Active',
      actionsType: 'image'

    },
    {
      domain: 'BO',
      unit: 'PRD',
      productCode: 'NOTIFICATIONS_MANAGEMENT_CONFIG',
      productDescription: 'Notifications Management',
      priority: 1,
      status: 'Active',
      actionsType: 'image'

    },
    {
      domain: 'BO',
      unit: 'PRD',
      productCode: 'LICENSE_CONFIG',
      productDescription: 'License Management',
      priority: 1,
      status: 'Active',
      actionsType: 'image'

    },
    {
      domain: 'BO',
      unit: 'PRD',
      productCode: 'OTP_BIO_CONFIGURATION',
      productDescription: 'User Management',
      priority: 1,
      status: 'Active',
      actionsType: 'image'

    }
  ];


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}
