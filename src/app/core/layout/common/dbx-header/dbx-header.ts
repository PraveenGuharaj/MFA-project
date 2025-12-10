import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DashboardAddRetailProduct } from '../../../../component/dashboard/dashboard-add-retail-product/dashboard-add-retail-product';
import { DashboardSubProduct } from '../../../../component/dashboard/dashboard-sub-product/dashboard-sub-product';
import { AdminCenterAddConfiguration } from '../../../../component/admin-center/admin-center-add-configuration/admin-center-add-configuration';
import { AdminCenterAddAtm } from '../../../../component/admin-center/admin-center-add-atm/admin-center-add-atm';

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
  @Output() tabChanged = new EventEmitter<string>();
  @Input() pageTitle?: string; // Title passed from the parent
  @Input() subMenuTitle: string = '';
  @Input() isSubMenu?: boolean;
  @Input() headerTabs: any[] = [];  // Dynamic tabs
  @Input() isProductHub: boolean = false; // Property to check if we are in Product Hub

  @Input() activeTab: string = '';
  subProduct: boolean = false;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // Log to track changes in input properties
    if (changes['pageTitle']) {
      console.log('ngOnChanges - pageTitle changed:', changes['pageTitle'].currentValue);
    }
  }

  ngAfterViewInit() {
    this.pageTitle = this.pageTitle;
  }
  openModal() {
    this.dialog.open(DashboardAddRetailProduct, {
      width: '60%',  // Adjust width as needed
      height: 'auto',
      position: {
        right: '0',  // Ensure it opens on the right
      },
    });
  }

  openConfigurationModal() {
    this.dialog.open(AdminCenterAddConfiguration, {
      width: '60%',  // Adjust width as needed
      height: 'auto',
      position: {
        right: '0',  // Ensure it opens on the right
      },
    });
  }

  openLicenseModal() {

  }

  openAtmModal() {
    this.dialog.open(AdminCenterAddAtm, {
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
    this.tabChanged.emit(tab);
  }
}
