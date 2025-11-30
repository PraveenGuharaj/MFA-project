import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DbxSidebar } from '../../../core/layout/common/dbx-sidebar/dbx-sidebar';
import { DbxHeader } from '../../../core/layout/common/dbx-header/dbx-header';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    DbxSidebar,
    DbxHeader,
    RouterModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  headerTitle: string = 'Dashboard';
  headerTabs: any[] = [];
  activeTab: string = '';
  currentPage: string = 'userOverview';
  subProduct: boolean = false;
  isProductHub: boolean = false; // Track if we are in 'Product Hub'

  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }


  onMenuChanged(event: { menu: string; type: string }) {
    console.log('event', event);

    if (event.menu === 'User Overview') {
      this.isProductHub = false; // Switch to User Overview
      this.headerTitle = 'Dashboard'; // Set header title to Dashboard
      this.activeTab = 'all'; // Set default active tab for User Overview
    } else if (event.menu === 'Product Hub') {
      this.isProductHub = true; // Switch to Product Hub
      this.headerTitle = 'Product Hub'; // Set header title for Product Hub
      this.activeTab = 'retail'; // Set default active tab for Product Hub
    } else if (event.menu === 'Login Activity') {
      this.isProductHub = false; // Switch to Product Hub
      this.headerTitle = 'Login Activity'; // Set header title for Product Hub
      this.activeTab = 'retail'; // Set default active tab for Product Hub
    }
    else {
      this.headerTitle = 'Dashboard'; // Fallback title
      this.activeTab = 'all'; // Default tab if no specific menu is selected
    }
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  // Method for handling retail/sub product for Product Hub
  toggleSubProduct(value: boolean) {
    this.activeTab = value ? 'sub' : 'retail';
  }
}