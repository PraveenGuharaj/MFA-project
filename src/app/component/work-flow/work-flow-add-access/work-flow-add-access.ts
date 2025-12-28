import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-work-flow-add-access',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './work-flow-add-access.html',
  styleUrl: './work-flow-add-access.scss',
})
export class WorkFlowAddAccess {
  @Input() subProduct: boolean = false;

  products = [
    {
      domain: 'BO',
      product: 'USER_MANAGEMENT_CONFIG',
      subProductCode: 'USER_MANAGEMENT_CONFIG',
      accessCode: 'SUMMARY',
      accessDescription: 'MODIFY',
      priority: 1,
      actionsType: 'image'

    },
    {
      domain: 'BO',
      product: 'PARTNER_ONBOARDING_CONFIG',
      subProductCode: 'PARTNER_ONBOARDING_CONFIG',
      accessCode: 'ADD',
      accessDescription: 'MODIFY',
      priority: 1,
      actionsType: 'image'

    },
    {
      domain: 'BO',
      product: 'CUSTOMER_SERVICE_CONFIG',
      subProductCode: 'CUSTOMER_SERVICE_CONFIG',
      accessCode: 'MODIFY',
      accessDescription: 'MODIFY',
      priority: 1,
      actionsType: 'image'

    },
    {
      domain: 'BO',
      product: 'NOTIFICATIONS_MANAGEMENT_CONFIG',
      subProductCode: 'NOTIFICATIONS_MANAGEMENT_CONFIG',
      accessCode: 'ADD',
      accessDescription: 'MODIFY',
      priority: 1,
      actionsType: 'image'

    },
    {
      domain: 'BO',
      product: 'LICENSE_CONFIG',
      subProductCode: 'LICENSE_CONFIG',
      accessCode: 'SUMMARY',
      accessDescription: 'MODIFY',
      priority: 1,
      actionsType: 'image'

    },
    {
      domain: 'BO',
      product: 'OTP_BIO_CONFIGURATION',
      subProductCode: 'OTP_BIO_CONFIGURATION',
      accessCode: 'MODIFY',
      accessDescription: 'MODIFY',
      priority: 1,
      actionsType: 'image'

    }
  ];


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}
