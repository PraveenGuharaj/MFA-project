import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-merchant-product',
  imports: [
    CommonModule, MatIconModule, MatButtonModule, FormsModule

  ],
  templateUrl: './merchant-product.html',
  styleUrl: './merchant-product.scss',
})
export class MerchantProduct {
  statusFilter = 'All Status';

  categories = [
    {
      name: 'Footwear',
      icon: 'directions_run',
      status: 'Active',
      subProducts: [
        { name: 'Running Shoes', itemCount: 45 },
        { name: 'Basketball Shoes', itemCount: 32 },
        { name: 'Casual Sneakers', itemCount: 68 }
      ]
    },
    {
      name: 'Smartphones',
      icon: 'phone_iphone',
      status: 'Active',
      subProducts: [
        { name: 'iPhone', itemCount: 28 },
        { name: 'Samsung Galaxy', itemCount: 35 },
        { name: 'Google Pixel', itemCount: 18 }
      ]
    },
    {
      name: 'Coffee & Tea',
      icon: 'local_cafe',
      status: 'Active',
      subProducts: [
        { name: 'Espresso', itemCount: 42 },
        { name: 'Cold Brew', itemCount: 31 },
        { name: 'Specialty Tea', itemCount: 25 }
      ]
    },
    {
      name: 'Apparel',
      icon: 'checkroom',
      status: 'Inactive',
      subProducts: [
        { name: 'T-Shirts', itemCount: 156 },
        { name: 'Jeans', itemCount: 89 },
        { name: 'Jackets', itemCount: 67 }
      ]
    }
  ];

  manageSubProducts(category: any) {
  }

}
