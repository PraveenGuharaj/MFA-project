import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-admin-center-manage-license',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './admin-center-manage-license.html',
  styleUrl: './admin-center-manage-license.scss',
})
export class AdminCenterManageLicense {
  @Input() subProduct: boolean = false;
  ngOnInit() {
    console.log('subProduct', this.subProduct)
  }

  products = [
    {
      domain: 'Domain1',
      notificationTypes: 'SMS',
      expiryDate: '01-12-2025',
      alertStatus: 'False',
      warningStatus: 'False',
      status: 'Active',
      actionsType: 'image'
    },
    {
      domain: 'Domain2',
      notificationTypes: 'Email',
      expiryDate: '01-12-2025',
      alertStatus: 'True',
      warningStatus: 'True',
      status: 'Active',
      actionsType: 'image'
    },
    {
      domain: 'Domain3',
      notificationTypes: 'Push',
      expiryDate: '01-12-2025',
      alertStatus: 'False',
      warningStatus: 'False',
      status: 'Active',
      actionsType: 'image'
    },
    {
      domain: 'Domain4',
      notificationTypes: 'SMS',
      expiryDate: '01-12-2025',
      alertStatus: 'True',
      warningStatus: 'True',
      status: 'Active',
      actionsType: 'image'
    },
    {
      domain: 'Domain5',
      notificationTypes: 'Email',
      expiryDate: '01-12-2025',
      alertStatus: 'False',
      warningStatus: 'False',
      status: 'Active',
      actionsType: 'image'
    },
    {
      domain: 'Domain6',
      notificationTypes: 'Push',
      expiryDate: '01-12-2025',
      alertStatus: 'True',
      warningStatus: 'True',
      status: 'Active',
      actionsType: 'image'
    },
    {
      domain: 'Domain7',
      notificationTypes: 'SMS',
      expiryDate: '01-12-2025',
      alertStatus: 'False',
      warningStatus: 'False',
      status: 'Active',
      actionsType: 'image'
    },
    {
      domain: 'Domain8',
      notificationTypes: 'Email',
      expiryDate: '01-12-2025',
      alertStatus: 'True',
      warningStatus: 'True',
      status: 'Active',
      actionsType: 'image'
    },
    {
      domain: 'Domain9',
      notificationTypes: 'Push',
      expiryDate: '01-12-2025',
      alertStatus: 'False',
      warningStatus: 'False',
      status: 'Active',
      actionsType: 'image'
    },
    {
      domain: 'Domain10',
      notificationTypes: 'SMS',
      expiryDate: 'CRD-004',
      alertStatus: 'True',
      warningStatus: 'True',
      status: 'Active',
      actionsType: 'image'
    }
  ];


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}
