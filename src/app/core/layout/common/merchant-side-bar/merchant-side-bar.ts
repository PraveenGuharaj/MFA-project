import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-merchant-side-bar',
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './merchant-side-bar.html',
  styleUrl: './merchant-side-bar.scss',
})
export class MerchantSideBar {

  menuItems = [
    { label: 'Merchants', icon: 'store', route: '/merchant/merchants' },
    { label: 'Categories', icon: 'category', route: '/merchant/categories' },
    { label: 'Offers', icon: 'local_offer', route: '/merchant/offers' },
    { label: 'settings', icon: 'local_offer', route: '/merchant/setting' },
    { label: 'Product', icon: 'local_offer', route: '/merchant/product' }
  ];

}