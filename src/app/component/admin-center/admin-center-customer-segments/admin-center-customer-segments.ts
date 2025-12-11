import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-admin-center-customer-segments',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './admin-center-customer-segments.html',
  styleUrl: './admin-center-customer-segments.scss',
})
export class AdminCenterCustomerSegments {
  @Input() subProduct: boolean = false;
  ngOnInit() {
    console.log('subProduct', this.subProduct)
  }

  products = [
    {
      unit: 'Special Offer',
      segmentId: 1,
      segmentCode: 'N',
      segmentDesc: 'Corporate',
      segmentType: 'Custom',
      segmentStatus: 'Active',
      actionsType: 'image'
    },
    {
      unit: 'Wishes',
      segmentId: 2,
      segmentCode: 'N',
      segmentDesc: 'Mobile Banking',
      segmentType: 'Custom',
      segmentStatus: 'Active',
      actionsType: 'image'
    },
    {
      unit: 'Date checking',
      segmentId: 3,
      segmentCode: 'N',
      segmentDesc: 'Internet Banking',
      segmentType: 'Custom',
      segmentStatus: 'Active',
      actionsType: 'image'
    },
    {
      unit: 'Sale',
      segmentId: 4,
      segmentCode: 'N',
      segmentDesc: 'Banking',
      segmentType: 'Custom',
      segmentStatus: 'Active',
      actionsType: 'image'
    },
    {
      unit: 'Offer',
      segmentId: 5,
      segmentCode: 'N',
      segmentDesc: 'Insurance',
      segmentType: 'Custom',
      segmentStatus: 'Active',
      actionsType: 'image'
    },
    {
      unit: 'Wishes',
      segmentId: 6,
      segmentCode: 'N',
      segmentDesc: 'Banking',
      segmentType: 'Custom',
      segmentStatus: 'Active',
      actionsType: 'image'
    },
    {
      unit: 'Date checking',
      segmentId: 7,
      segmentCode: 'N',
      segmentDesc: 'Corporate',
      segmentType: 'Custom',
      segmentStatus: 'Active',
      actionsType: 'image'
    },
    {
      unit: 'Wishes',
      segmentId: 8,
      segmentCode: 'N',
      segmentDesc: 'Mobile Banking',
      segmentType: 'Custom',
      segmentStatus: 'Active',
      actionsType: 'image'
    },
    {
      unit: 'Offer',
      segmentId: 9,
      segmentCode: 'N',
      segmentDesc: 'Internet Banking',
      segmentType: 'Custom',
      segmentStatus: 'Active',
      actionsType: 'image'
    },
    {
      unit: 'Wishes',
      segmentId: 10,
      segmentCode: 'N',
      segmentDesc: 'Banking',
      segmentType: 'Custom',
      segmentStatus: 'Active',
      actionsType: 'image'
    }
  ];


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}