import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-work-flow-role-management',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './work-flow-role-management.html',
  styleUrl: './work-flow-role-management.scss',
})
export class WorkFlowRoleManagement {
  @Input() subProduct: boolean = false;

  products = [
    {
      domainName: 'BO',
      roleName: 'PRD',
      roleID: 'USER_MANAGEMENT_CONFIG',
      hierarchyLevel: 'User Management',
      actionsType: 'image',
      status: 'Active'

    },
    {
      domainName: 'BO',
      roleName: 'PRD',
      roleID: 'PARTNER_ONBOARDING_CONFIG',
      hierarchyLevel: 'Partner Onboarding',
      actionsType: 'image',
      status: 'Active'

    },
    {
      domainName: 'BO',
      roleName: 'PRD',
      roleID: 'CUSTOMER_SERVICE_CONFIG',
      hierarchyLevel: 'Customer Service',
      actionsType: 'image',
      status: 'Active'

    },
    {
      domainName: 'BO',
      roleName: 'PRD',
      roleID: 'NOTIFICATIONS_MANAGEMENT_CONFIG',
      hierarchyLevel: 'Notifications Management',
      actionsType: 'image',
      status: 'Active'

    },
    {
      domainName: 'BO',
      roleName: 'PRD',
      roleID: 'LICENSE_CONFIG',
      hierarchyLevel: 'License Management',
      actionsType: 'image',
      status: 'Active'

    },
    {
      domainName: 'BO',
      roleName: 'PRD',
      roleID: 'OTP_BIO_CONFIGURATION',
      hierarchyLevel: 'User Management',
      actionsType: 'image',
      status: 'Active'

    }
  ];


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}
