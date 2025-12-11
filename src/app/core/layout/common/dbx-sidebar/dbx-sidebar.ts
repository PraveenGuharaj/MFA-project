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
      isSubmenuTitle: false,
      subMenu: [
        { name: 'User Overview', link: '/dashboard/user-overview', isSubmenuTitle: false },
        { name: 'Login Activity', link: '/dashboard/login-activity', isSubmenuTitle: false },
        { name: 'MFA & OTP Activity', link: '/dashboard/mfa-otp-activity', isSubmenuTitle: false },
        { name: 'Security Alerts & Account', link: '/dashboard/security-account-status', isSubmenuTitle: false },
        { name: 'Session Metrics', link: '/dashboard/session-metrics', isSubmenuTitle: false },
        { name: 'Geographic Metrics', link: '/dashboard/geographic-metrics', isSubmenuTitle: false },
        { name: 'Service Request', link: '/dashboard/service-request', isSubmenuTitle: false },
        { name: 'Transaction Mix', link: '/dashboard/transaction-mix', isSubmenuTitle: false },
        { name: 'Digital Onboarding Journey', link: '/dashboard/digital-onboarding-journey', isSubmenuTitle: false },
        { name: 'Transaction Performance', link: '/dashboard/transaction-perfomance', isSubmenuTitle: false },
        { name: 'Digital Onboarding Journey Insights', link: '/dashboard/digital-onboarding-insights', isSubmenuTitle: false }
      ],
      expanded: false
    },
    {
      name: 'Product Hub',
      // No submenu for Product Hub
      subMenu: null,
      expanded: false,
      isSubmenuTitle: true,
      link: '/dashboard/product-hub', submenuTitle: 'OTP Management'
    },
    {
      name: 'Admin Center',
      isSubmenuTitle: true,
      subMenu: [
        { name: 'Manage OTP', link: 'dashboard/manage-otp', submenuTitle: 'OTP Management', isSubmenuTitle: true },
        { name: 'Manage Locators', link: 'dashboard/manage-locators', submenuTitle: 'Manage Locators', isSubmenuTitle: true },
        { name: 'Manage License', link: 'dashboard/manage-license', submenuTitle: 'Manage License', isSubmenuTitle: true },
        { name: 'Manage MFA', link: 'dashboard/manage-mfa', submenuTitle: 'Manage MFA', isSubmenuTitle: true },
        { name: 'Manage Notifications', link: 'dashboard/device-management', submenuTitle: 'Manage Notification', isSubmenuTitle: true }
      ],
      expanded: false
    },

  ]

  toggleSubMenu(item: any) {
    item.expanded = !item.expanded;
  }

  selectMenu(menu: string, type: string, link?: string, isSubmenu?: boolean) {
    if (link) {
      this.router.navigate([link]); // Navigate to the selected route
    }
    this.menuChanged.emit({ menu, type, isSubmenu });
  }

}