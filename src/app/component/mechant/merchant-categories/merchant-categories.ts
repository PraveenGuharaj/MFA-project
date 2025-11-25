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
  editingCategory: any = null;
  isEditMode = false;
  showDeleteModal = false;
  deletingCategory: any = null;
  editCategory(category: any) {
    this.isEditMode = true;
    this.editingCategory = category;

    this.newCategory = {
      name: category.name,
      description: category.description,
      status: category.status === 'Active'
    };

    this.showAddCategoryModal = true;
  }
  deleteCategory(category: any) {
    this.deletingCategory = category;
    this.showDeleteModal = true;
  }

  // Modal Controls
  openAddCategoryModal() {
    this.showAddCategoryModal = true;
  }

  closeAddCategoryModal() {
    this.showAddCategoryModal = false;
    this.resetModal();
    this.isEditMode = false;
    this.editingCategory = null;
  }

  createCategory() {
    const newCat = {
      name: this.newCategory.name,
      description: this.newCategory.description,
      status: this.newCategory.status ? 'Active' : 'Inactive',
      merchantsCount: 0
    };

    this.categories.unshift(newCat); // show at top immediately
    this.closeAddCategoryModal();
  }

  saveCategory() {
    if (this.isEditMode) {
      this.editingCategory.name = this.newCategory.name;
      this.editingCategory.description = this.newCategory.description;
      this.editingCategory.status = this.newCategory.status ? 'Active' : 'Inactive';
    } else {
      const newCat = {
        name: this.newCategory.name,
        description: this.newCategory.description,
        status: this.newCategory.status ? 'Active' : 'Inactive',
        merchantsCount: 0
      };

      this.categories.unshift(newCat); // show on top
    }

    this.closeAddCategoryModal();
  }

  resetModal() {
    this.newCategory = { name: '', description: '', status: true };
  }

  confirmDelete() {
    this.categories = this.categories.filter(c => c !== this.deletingCategory);
    this.closeDeleteModal();
  }

  closeDeleteModal() {
    this.showDeleteModal = false;
    this.deletingCategory = null;
  }

}