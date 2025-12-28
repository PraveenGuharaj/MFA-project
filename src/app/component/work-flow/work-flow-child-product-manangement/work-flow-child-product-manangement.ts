import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-work-flow-child-product-manangement',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './work-flow-child-product-manangement.html',
  styleUrl: './work-flow-child-product-manangement.scss',
})
export class WorkFlowChildProductManangement {
  @Input() subProduct: boolean = false;

  products = [
    {
      domainId: 'BO',
      productCode: 'USER_MANAGEMENT_CONFIG',
      subProductCode: 'USER_MANAGEMENT_CONFIG',
      childMenuProductCode: 'User Management',
      childMenuURL: 'User Management',
      status: 'Active'

    },
    {
      domainId: 'BO',
      productCode: 'PARTNER_ONBOARDING_CONFIG',
      subProductCode: 'PARTNER_ONBOARDING_CONFIG',
      childMenuProductCode: 'Partner Onboarding',
      childMenuURL: 'Partner Onboarding',
      status: 'Active'

    },
    {
      domainId: 'BO',
      productCode: 'CUSTOMER_SERVICE_CONFIG',
      subProductCode: 'CUSTOMER_SERVICE_CONFIG',
      childMenuProductCode: 'Customer Service',
      childMenuURL: 'Customer Service',
      status: 'Active'

    },
    {
      domainId: 'BO',
      productCode: 'NOTIFICATIONS_MANAGEMENT_CONFIG',
      subProductCode: 'NOTIFICATIONS_MANAGEMENT_CONFIG',
      childMenuProductCode: 'Notifications Management',
      childMenuURL: 'Notifications Management',
      status: 'Active'

    },
    {
      domainId: 'BO',
      productCode: 'LICENSE_CONFIG',
      subProductCode: 'LICENSE_CONFIG',
      childMenuProductCode: 'License Management',
      childMenuURL: 'License Management',
      status: 'Active'

    },
    {
      domainId: 'BO',
      productCode: 'OTP_BIO_CONFIGURATION',
      subProductCode: 'OTP_BIO_CONFIGURATION',
      childMenuProductCode: 'User Management',
      childMenuURL: 'User Management',
      status: 'Active'

    }
  ];


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}
