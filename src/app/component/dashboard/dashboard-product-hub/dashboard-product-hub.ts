import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard-product-hub',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './dashboard-product-hub.html',
  styleUrl: './dashboard-product-hub.scss',
})
export class DashboardProductHub {
  @Input() subProduct: boolean = false;

  products = [
    {
      name: 'Gold Savings Account',
      description: [
        'High interest savings account',
        'High interest savings account'
      ],
      parentProduct: 'Gold Savings Account',
      channel: 'All',
      screen: 'SAV-001',
      status: 'Active',
      priority: 4,
      actionsType: 'mat-icon'
    },
    {
      name: 'Standard Current Account',
      parentProduct: 'Standard Current Account',
      description: ['High interest savings accou…'],
      channel: 'Web',
      screen: 'CUR-002',
      status: 'Active',
      priority: 3,
      actionsType: 'image'
    },
    {
      name: 'Personal Loan',
      parentProduct: 'Personal Loan',
      description: ['High interest savings accou…'],
      channel: 'Mobile',
      screen: 'LON-003',
      status: 'Inactive',
      priority: 2,
      actionsType: 'mat-icon'
    },
    {
      name: 'Platinum Credit Card',
      parentProduct: 'Platinum Credit Card',
      description: ['High interest savings accou…'],
      channel: 'All',
      screen: 'CRD-004',
      status: 'Active',
      priority: 5,
      actionsType: 'mat-icon'
    },
    {
      name: 'Fixed Deposit',
      parentProduct: 'Fixed Deposit',
      description: ['High interest savings accou…'],
      channel: 'Web',
      screen: 'DEP-005',
      status: 'Active',
      priority: 1,
      actionsType: 'mat-icon'
    }
  ];


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}
