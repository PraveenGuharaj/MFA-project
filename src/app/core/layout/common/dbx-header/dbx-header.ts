import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DashboardAddRetailProduct } from '../../../../component/dashboard/dashboard-add-retail-product/dashboard-add-retail-product';
import { DashboardSubProduct } from '../../../../component/dashboard/dashboard-sub-product/dashboard-sub-product';

@Component({
  selector: 'app-dbx-header',
  imports: [
    CommonModule,
    MatIconModule,
  ],
  templateUrl: './dbx-header.html',
  styleUrl: './dbx-header.scss',
})
export class DbxHeader {
  @Output() productTypeChanged = new EventEmitter<boolean>();
  @Input() pageTitle: string = 'Dashboard'; // Title passed from the parent
  @Input() headerTabs: any[] = [];  // Dynamic tabs
  @Input() isProductHub: boolean = false; // Property to check if we are in Product Hub

  @Input() activeTab: string = '';
  subProduct: boolean = false;
  constructor(public dialog: MatDialog) { }

  openModal() {
    this.dialog.open(DashboardAddRetailProduct, {
      width: '60%',  // Adjust width as needed
      height: 'auto',
      position: {
        right: '0',  // Ensure it opens on the right
      },
    });
  }

  subProductModel(isSubProduct: boolean) {
    this.subProduct = true;
    this.productTypeChanged.emit(isSubProduct);

  }

  retailProduct(isSubProduct: boolean) {
    this.subProduct = false
    this.productTypeChanged.emit(isSubProduct);

  }

  openSubModal() {
    this.dialog.open(DashboardSubProduct, {
      width: '60%',
      height: 'auto',
      position: {
        right: '0',
      },
    });
  }

  // Method to change active tab for User Overview
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
