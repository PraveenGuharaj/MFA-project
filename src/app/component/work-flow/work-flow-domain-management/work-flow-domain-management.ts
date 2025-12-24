import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-work-flow-domain-management',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './work-flow-domain-management.html',
  styleUrl: './work-flow-domain-management.scss',
})
export class WorkFlowDomainManagement {
  @Input() subProduct: boolean = false;

  products = [
    {
      domain: 'PARTNER',
      domainDescription: 'Partners',
      status: 'Active',
      priority: 2,
      actionsType: 'image'

    },
    {
      domain: 'BO',
      domainDescription: 'BackOffice',
      status: 'Active',
      priority: 4,
      actionsType: 'image'

    },
    {
      domain: 'GATEWAY',
      domainDescription: 'API Gateway Portal',
      status: 'Inactive',
      priority: 6,
      actionsType: 'image'

    },
    {
      domain: 'GATEWAYPORTAL',
      domainDescription: 'Gateway Portal-unused',
      status: 'Active',
      priority: 8,
      actionsType: 'image'

    },
    {
      domain: 'CMC',
      domainDescription: 'Corporate App',
      status: 'Active',
      priority: 10,
      actionsType: 'image'

    },
    {
      domain: 'BOAPP',
      domainDescription: 'BOAPP',
      status: 'Inactive',
      priority: 12,
      actionsType: 'image'

    }
  ];


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}
