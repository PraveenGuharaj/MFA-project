import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-block-unblock-users',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './block-unblock-users.html',
  styleUrl: './block-unblock-users.scss',
})
export class BlockUnblockUsers {
  @Input() subProduct: boolean = false;

  products = [
    {
      userId: 'Ram 123',
      nationalId: 220703223,
      failureAttempts: 0,
      lastLoginDate: '04/12/2025',
      userName: 'BO User',
      userStatus: 'Act',
      failureReason: 'Invalid login password',
      time: '12:55:32',
      actionsType: 'image'
    },
    {
      userId: 'Admin123',
      nationalId: 220703223,
      failureAttempts: 3,
      lastLoginDate: '04/12/2025',
      userName: 'BO User',
      userStatus: 'Act',
      failureReason: 'Invalid login password',
      time: '12:55:32',
      actionsType: 'image'
    },
    {
      userId: 'Ram 123',
      nationalId: 220703223,
      failureAttempts: 4,
      lastLoginDate: '04/12/2025',
      userName: 'BO User',
      userStatus: 'Act',
      failureReason: 'Invalid login password',
      time: '12:55:32',
      actionsType: 'image'
    },
    {
      userId: 'Admin123',
      nationalId: 220703223,
      failureAttempts: 1,
      lastLoginDate: '04/12/2025',
      userName: 'BO User',
      userStatus: 'Act',
      failureReason: 'Invalid login password',
      time: '12:55:32',
      actionsType: 'image'
    },
    {
      userId: 'Ram 123',
      nationalId: 220703223,
      failureAttempts: 2,
      lastLoginDate: '04/12/2025',
      userName: 'BO User',
      userStatus: 'Act',
      failureReason: 'Invalid login password',
      time: '12:55:32',
      actionsType: 'image'
    },
    {
      userId: 'Admin123',
      nationalId: 220703223,
      failureAttempts: 0,
      lastLoginDate: '04/12/2025',
      userName: 'BO User',
      userStatus: 'Act',
      failureReason: 'Invalid login password',
      time: '12:55:32',
      actionsType: 'image'
    },
    {
      userId: 'Ram 123',
      nationalId: 220703223,
      failureAttempts: 0,
      lastLoginDate: '04/12/2025',
      userName: 'BO User',
      userStatus: 'Act',
      failureReason: 'Invalid login password',
      time: '12:55:32',
      actionsType: 'image'
    },
    {
      userId: 'Admin123',
      nationalId: 220703223,
      failureAttempts: 0,
      lastLoginDate: '04/12/2025',
      userName: 'BO User',
      userStatus: 'Act',
      failureReason: 'Invalid login password',
      time: '12:55:32',
      actionsType: 'image'
    },
    {
      userId: 'Ram 123',
      nationalId: 220703223,
      failureAttempts: 0,
      lastLoginDate: '04/12/2025',
      userName: 'BO User',
      userStatus: 'Act',
      failureReason: 'Invalid login password',
      time: '12:55:32',
      actionsType: 'image'
    },
    {
      userId: 'Admin123',
      nationalId: 220703223,
      failureAttempts: 0,
      lastLoginDate: '04/12/2025',
      userName: 'BO User',
      userStatus: 'Act',
      failureReason: 'Invalid login password',
      time: '12:55:32',
      actionsType: 'image'
    }
  ];


  onProductfailureAttemptsChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}
