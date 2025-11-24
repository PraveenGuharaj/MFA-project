import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-merchant-categories',
  imports: [
    CommonModule, MatIconModule, MatButtonModule, FormsModule
  ],
  templateUrl: './merchant-categories.html',
  styleUrl: './merchant-categories.scss',
})
export class MerchantCategories {
  statusFilter = 'All Status';

  categories = [
    {
      name: 'Sports & Fitness',
      description: 'Sports equipment and fitness centers',
      merchantsCount: 15,
      status: 'Active',
    },
    {
      name: 'Electronics',
      description: 'Consumer electronics and gadgets',
      merchantsCount: 23,
      status: 'Active',
    },
    {
      name: 'Food & Beverage',
      description: 'Restaurants, cafes, and food delivery',
      merchantsCount: 42,
      status: 'Active',
    },
    {
      name: 'E-commerce',
      description: 'Online shopping platforms',
      merchantsCount: 18,
      status: 'Inactive',
    },
  ];

  editCategory(category: any) {
    console.log('Editing category:', category);
  }

  deleteCategory(category: any) {
    console.log('Deleting category:', category);
  }
}