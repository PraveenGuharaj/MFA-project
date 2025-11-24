import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-merchant-categories',
  imports: [
    CommonModule, MatIconModule, MatButtonModule, FormsModule, MatSlideToggleModule
  ],
  templateUrl: './merchant-categories.html',
  styleUrls: ['./merchant-categories.scss'],
})
export class MerchantCategories {
  statusFilter = 'All Status';
  showAddCategoryModal = false;

  // Modal Data
  newCategory = {
    name: '',
    description: '',
    status: true,
  };

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

  // Methods for managing categories
  editCategory(category: any) {
    console.log('Editing category:', category);
  }

  deleteCategory(category: any) {
    console.log('Deleting category:', category);
  }

  // Modal Controls
  openAddCategoryModal() {
    this.showAddCategoryModal = true;
  }

  closeAddCategoryModal() {
    this.showAddCategoryModal = false;
    this.resetModal();
  }

  createCategory() {
    this.categories.push({
      ...this.newCategory,
      status: this.newCategory.status ? 'Active' : 'Inactive',
      merchantsCount: 0
    });

    console.log('New Category:', this.newCategory);
    this.closeAddCategoryModal();
  }

  resetModal() {
    this.newCategory = { name: '', description: '', status: true };
  }
}