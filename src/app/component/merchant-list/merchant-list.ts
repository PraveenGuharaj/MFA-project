import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-merchant-list',
  imports: [
    CommonModule, MatIconModule, MatButtonModule, FormsModule
  ],
  templateUrl: './merchant-list.html',
  styleUrl: './merchant-list.scss',
})
export class MerchantList {
  showDeleteModal = false;
  deletingMerchant: any = null;
  deletingIndex: number | null = null;
  statusFilter = 'All Status';
  showAddMerchantModal: boolean = false;


  merchants = [
    {
      name: 'Nike Store',
      email: 'contact@nike.com',
      phone: '+1 234 567 8900',
      category: 'Sports & Fitness',
      offers: 12,
      status: 'Active',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
      description: ''
    },
    {
      name: 'Apple Store',
      email: 'support@apple.com',
      phone: '+1 234 567 8901',
      category: 'Electronics',
      offers: 8,
      status: 'Active',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'
    },
    {
      name: 'Starbucks',
      email: 'hello@starbucks.com',
      phone: '+1 234 567 8902',
      category: 'Food & Beverage',
      offers: 15,
      status: 'Active',
      logo: 'https://upload.wikimedia.org/wikipedia/sco/d/d3/Starbucks_Corporation_Logo_2011.svg'
    },
    {
      name: 'Amazon',
      email: 'info@amazon.com',
      phone: '+1 234 567 8903',
      category: 'E-commerce',
      offers: 25,
      status: 'Inactive',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
    }
  ];

  newMerchant = {
    name: '',
    logoUrl: '',
    email: '',
    phone: '',
    category: '',
    description: ''
  };
  activeOptionsIndex: number | null = null;
  editingMerchantIndex: number | null = null;
  isEditMode = false;



  openAddMerchantModal() {
    this.showAddMerchantModal = true;
  }

  closeAddMerchantModal() {
    this.showAddMerchantModal = false;
  }

  submitMerchant() {
    if (!this.newMerchant.name?.trim() ||
      !this.newMerchant.email?.trim() ||
      !this.newMerchant.phone?.trim() ||
      !this.newMerchant.category?.trim() ||
      !this.newMerchant.logoUrl?.trim()) {
      alert('Please fill required fields (name, email, phone, category, logo).');
      return;
    }

    const merchantToAddOrUpdate = {
      name: this.newMerchant.name.trim(),
      email: this.newMerchant.email.trim(),
      phone: this.newMerchant.phone.trim(),
      category: this.newMerchant.category.trim(),
      offers: this.merchants[this.editingMerchantIndex ?? -1]?.offers ?? 0,
      status: this.merchants[this.editingMerchantIndex ?? -1]?.status ?? 'Active',
      logo: this.newMerchant.logoUrl.trim(),
      description: this.newMerchant.description?.trim() || ''
    };

    if (this.isEditMode && this.editingMerchantIndex !== null && this.editingMerchantIndex >= 0) {
      this.merchants[this.editingMerchantIndex] = { ...this.merchants[this.editingMerchantIndex], ...merchantToAddOrUpdate };
    } else {
      this.merchants.unshift(merchantToAddOrUpdate);
    }

    this.newMerchant = {
      name: '',
      logoUrl: '',
      email: '',
      phone: '',
      category: '',
      description: ''
    };
    this.isEditMode = false;
    this.editingMerchantIndex = null;
    this.closeAddMerchantModal();
  }


  toggleOptions(index: number, event?: MouseEvent) {
    if (event) event.stopPropagation();
    this.activeOptionsIndex = this.activeOptionsIndex === index ? null : index;
  }

  onEditMerchant(index: number) {
    const m = this.merchants[index];
    if (!m) return;

    this.newMerchant = {
      name: m.name || '',
      logoUrl: m.logo || '',
      email: m.email || '',
      phone: m.phone || '',
      category: m.category || '',
      description: m.description || ''
    };

    this.editingMerchantIndex = index;
    this.isEditMode = true;

    this.showAddMerchantModal = true;

    this.activeOptionsIndex = null;
  }

  onDeleteMerchant(i: number) {
    this.deletingIndex = i;
    this.deletingMerchant = this.merchants[i];
    this.showDeleteModal = true;
  }


  closeDeleteModal() {
    this.showDeleteModal = false;
    this.deletingMerchant = null;
    this.deletingIndex = null;
  }

  confirmDelete() {
    if (this.deletingIndex !== null) {
      this.merchants.splice(this.deletingIndex, 1);
    }
    this.closeDeleteModal();
  }


}