import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-admin-center-push-notification',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './admin-center-push-notification.html',
  styleUrl: './admin-center-push-notification.scss',
})
export class AdminCenterPushNotification {
  @Input() subProduct: boolean = false;
  ngOnInit() {
    console.log('subProduct', this.subProduct)
  }

  products = [
    {
      id: 1273,
      segmentID: 1,
      customerType: 'com.pro',
      customerSegment: 'N',
      name: 'mkr1207026',
      phoneNumber: '+974***2529',
      emailID: 'testcorpx@gmail.com',
      deviceOs: 'android'
    },
    {
      id: 6101,
      segmentID: 1,
      customerType: 'com.pro',
      customerSegment: 'N',
      name: 'mkr1207026',
      phoneNumber: '+974***2529',
      emailID: 'testcorpx@gmail.com',
      deviceOs: 'iPhone'
    },
    {
      id: 1252,
      segmentID: 1,
      customerType: 'bundle',
      customerSegment: 'N',
      name: 'mkr1207026',
      phoneNumber: '+974***2529',
      emailID: 'testcorpx@gmail.com',
      deviceOs: 'android'
    },
    {
      id: 6111,
      segmentID: 1,
      customerType: 'com.bankapp.ios.dev',
      customerSegment: 'N',
      name: 'mkr1207026',
      phoneNumber: '+974***2529',
      emailID: 'testcorpx@gmail.com',
      deviceOs: 'iPhone'
    },
    {
      id: 1252,
      segmentID: 1,
      customerType: 'com.proi',
      customerSegment: 'N',
      name: 'mkr1207026',
      phoneNumber: '+974***2529',
      emailID: 'testcorpx@gmail.com',
      deviceOs: 'android'
    },
    {
      id: 6111,
      segmentID: 1,
      customerType: 'Security Question',
      customerSegment: 'N',
      name: 'mkr1207026',
      phoneNumber: '+974***2529',
      emailID: 'testcorpx@gmail.com',
      deviceOs: 'iPhone'
    },
    {
      id: 5134,
      segmentID: 1,
      customerType: 'bundle',
      customerSegment: 'N',
      name: 'mkr1207026',
      phoneNumber: '+974***2529',
      emailID: 'testcorpx@gmail.com',
      deviceOs: 'android'
    },
    {
      id: 1234,
      segmentID: 1,
      customerType: 'com.bankapp.ios.dev',
      customerSegment: 'N',
      name: 'mkr1207026',
      phoneNumber: '+974***2529',
      emailID: 'testcorpx@gmail.com',
      deviceOs: 'iPhone'
    },
    {
      id: 2346,
      segmentID: 1,
      customerType: 'bundle',
      customerSegment: 'N',
      name: 'mkr1207026',
      phoneNumber: '+974***2529',
      emailID: 'testcorpx@gmail.com',
      deviceOs: 'android'
    },
    {
      id: 2121,
      segmentID: 1,
      customerType: 'com.bankapp.ios.dev',
      customerSegment: 'N',
      name: 'mkr1207026',
      phoneNumber: '+974***2529',
      emailID: 'testcorpx@gmail.com',
      deviceOs: 'iPhone'
    }
  ];


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}
