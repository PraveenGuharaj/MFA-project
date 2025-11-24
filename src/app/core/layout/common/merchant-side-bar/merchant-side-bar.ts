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
    { label: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { label: 'Merchants', icon: 'store', route: '/merchants' },
    { label: 'Categories', icon: 'category', route: '/categories' },
    { label: 'Products', icon: 'inventory_2', route: '/products' },
    { label: 'Offers', icon: 'local_offer', route: '/offers' },
    { label: 'Settings', icon: 'settings', route: '/settings' }
  ];

}