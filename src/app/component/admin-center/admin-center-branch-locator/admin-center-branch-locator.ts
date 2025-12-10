import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-admin-center-branch-locator',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './admin-center-branch-locator.html',
  styleUrl: './admin-center-branch-locator.scss',
})
export class AdminCenterBranchLocator {
  @Input() subProduct: boolean = false;
  ngOnInit() {
    console.log('subProduct', this.subProduct)
  }

  products = [
    {
      name: 'ATM 01',
      atmCode: '1234',
      city: 'Doha',
      country: 'Qatar',
      atmType: 'Mobile ATM',
      coordinates: '28.6139° N,77.2088° E',
      deliveryModes: 'SMS',
      status: 'Active',
      actionsType: 'image'
    },
    {
      name: 'ATM 02',
      atmCode: '1234',
      city: 'Delhi',
      country: 'India',
      atmType: 'Cash Dispenser ATM',
      coordinates: '25.2854° N,51.5310° E',
      deliveryModes: 'PUSH',
      status: 'Active',
      actionsType: 'image'
    },
    {
      name: 'ATM 03',
      atmCode: '1234',
      city: 'Doha',
      country: 'Qatar',
      atmType: 'Basic ATM',
      coordinates: '28.6139° N,77.2088° E',
      deliveryModes: 'PUSH',
      status: 'Active',
      actionsType: 'image'
    },
    {
      name: 'ATM 04',
      atmCode: '1234',
      city: 'Dubai',
      country: 'Qatar',
      atmType: 'Basic ATM',
      coordinates: '25.2854° N,51.5310° E',
      deliveryModes: 'SMS',
      status: 'Active',
      actionsType: 'image'
    },
    {
      name: 'ATM 05',
      atmCode: '1234',
      city: 'Delhi',
      country: 'India',
      atmType: 'Mobile ATM',
      coordinates: '28.6139° N,77.2088° E',
      deliveryModes: 'SMS',
      status: 'Active',
      actionsType: 'image'
    },
    {
      name: 'ATM 06',
      atmCode: '1234',
      city: 'Delhi',
      country: 'India',
      atmType: 'Cash Dispenser ATM',
      coordinates: '25.2854° N,51.5310° E',
      deliveryModes: 'SMS',
      status: 'Active',
      actionsType: 'image'
    },
    {
      name: 'ATM 07',
      atmCode: '1234',
      city: 'Doha',
      country: 'Qatar',
      atmType: 'Basic ATM',
      coordinates: '28.6139° N,77.2088° E',
      deliveryModes: 'SMS',
      status: 'Active',
      actionsType: 'image'
    },
    {
      name: 'ATM 08',
      atmCode: '1234',
      city: 'Delhi',
      country: 'India',
      atmType: 'White Label ATM',
      coordinates: '25.2854° N,51.5310° E',
      deliveryModes: 'SMS',
      status: 'Active',
      actionsType: 'image'
    },
    {
      name: 'ATM 09',
      atmCode: '1234',
      city: 'Doha',
      country: 'Qatar',
      atmType: 'Mobile ATM',
      coordinates: '28.6139° N,77.2088° E',
      deliveryModes: 'SMS',
      status: 'Active',
      actionsType: 'image'
    },
    {
      name: 'ATM 10',
      atmCode: 'Delhi',
      city: 'CRD-004',
      country: 'India',
      atmType: 'Cash Dispenser ATM',
      coordinates: '25.2854° N,51.5310° E',
      deliveryModes: 'SMS',
      status: 'Active',
      actionsType: 'image'
    }
  ];


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}
