import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DbxSidebar } from '../../../core/layout/common/dbx-sidebar/dbx-sidebar';
import { DbxHeader } from '../../../core/layout/common/dbx-header/dbx-header';
import { DashboardProductHub } from '../dashboard-product-hub/dashboard-product-hub';
import { DashboardUserOverview } from '../dashboard-user-overview/dashboard-user-overview';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    DbxSidebar,
    DbxHeader,
    // DashboardProductHub,
    DashboardUserOverview
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  subProduct: boolean = false;
  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}