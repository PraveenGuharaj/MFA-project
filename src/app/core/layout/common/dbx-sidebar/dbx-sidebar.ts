import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dbx-sidebar',
  imports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule
  ],
  templateUrl: './dbx-sidebar.html',
  styleUrl: './dbx-sidebar.scss',
})
export class DbxSidebar {
  constructor(private router: Router) { }

  @Output() menuChanged = new EventEmitter<any>(); // Emit selected menu

  menuItems = [
    {
      name: 'Dashboard',
      subMenu: [
        { name: 'User Overview', link: '/dashboard/user-overview' },
        { name: 'Login Activity', link: '/dashboard/login-activity' },
        { name: 'MFA & OTP Activity', link: '/dashboard/mfa-otp-activity' },
        { name: 'Security Alerts & Account', link: '/dashboard/security-account-status' },
        { name: 'Session Metrics', link: '/dashboard/session-metrics' },
        { name: 'Geographic Metrics', link: '/dashboard/geographic-metrics' },
        { name: 'Service Request', link: '/dashboard/service-request' },
        { name: 'Transaction Mix', link: '/dashboard/transaction-mix' },
        { name: 'Digital Onboarding Journey', link: '/dashboard/digital-onboarding-journey' },
        { name: 'Transaction Performance', link: '/dashboard/transaction-perfomance' },
        { name: 'Digital Onboarding Journey Insights', link: '/dashboard/digital-onboarding-insights' }
      ],
      expanded: false
    },
    {
      name: 'Product Hub',
      // No submenu for Product Hub
      subMenu: null,
      expanded: false,
      link: '/dashboard/product-hub'
    },
    {
      name: 'Admin Center',
      subMenu: [
        { name: 'Service Requests', link: '/service-requests' },
        { name: 'Transaction Mix', link: '/transaction-mix' }
      ],
      expanded: false
    },
    {
      name: 'Offer & Discount',
      subMenu: [
        { name: 'Service Requests', link: '/service-requests' },
        { name: 'Transaction Mix', link: '/transaction-mix' }
      ],
      expanded: false
    },
    {
      name: 'Partner Onboarding',
      subMenu: [
        { name: 'Service Requests', link: '/service-requests' },
        { name: 'Transaction Mix', link: '/transaction-mix' }
      ],
      expanded: false
    },
    {
      name: 'Operation',
      subMenu: [
        { name: 'Service Requests', link: '/service-requests' },
        { name: 'Transaction Mix', link: '/transaction-mix' }
      ],
      expanded: false
    }
  ]

  toggleSubMenu(item: any) {
    item.expanded = !item.expanded;
  }

  selectMenu(menu: string, type: string, link?: string) {
    console.log('menu', menu);
    console.log('type', type);
    console.log('link', link);

    if (link) {
      this.router.navigate([link]); // Navigate to the selected route
    }
    this.menuChanged.emit({ menu, type });
  }
}