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

  menuItems: any = [
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
        { name: 'Manage Notifications', link: 'dashboard/device-management', submenuTitle: 'Manage Notification', isSubmenuTitle: true },
        { name: 'Manage Content', link: 'dashboard/manage-content', submenuTitle: 'Manage Content', isSubmenuTitle: true, mainMenuTitle: 'admin-center' },
        { name: 'Block/Unblock Users', link: 'dashboard/blockUnblockUsers', submenuTitle: 'Block/Unblock Users', isSubmenuTitle: true },
        { name: 'Manage Parameters', link: 'dashboard/manageParameter', submenuTitle: 'Manage Parameters', isSubmenuTitle: true },
        { name: 'Force Update', link: 'dashboard/forceUpdate', submenuTitle: 'Force Update', isSubmenuTitle: true },
        { name: 'Partner Onboarding', link: 'dashboard/partnerOnboarding', submenuTitle: 'Partner Onboarding', isSubmenuTitle: true },

      ],
      expanded: false
    },
    {
      name: 'Offers & Discounts',
      isSubmenuTitle: true,
      subMenu: [
        { name: 'Offer Management', link: 'dashboard/offer-management', submenuTitle: 'Offer Management', isSubmenuTitle: true, mainMenuTitle: 'offer-discount' },
        { name: 'Discount Management', link: 'dashboard/discount-management', submenuTitle: 'Discount Management', isSubmenuTitle: true, mainMenuTitle: 'offer-discount' },
      ],
      expanded: false
    },
    {
      name: 'Master Data',
      isSubmenuTitle: true,
      subMenu: [
        { name: 'Country', link: 'dashboard/country', submenuTitle: 'Country', isSubmenuTitle: true, mainMenuTitle: 'master-country' },
        { name: 'Channel', link: 'dashboard/channel', submenuTitle: 'Channel', isSubmenuTitle: true, mainMenuTitle: 'master-channel' },
        { name: 'Language', link: 'dashboard/language', submenuTitle: 'Language', isSubmenuTitle: true, mainMenuTitle: 'master-language' },
        { name: 'Unit', link: 'dashboard/unit', submenuTitle: 'Unit', isSubmenuTitle: true, mainMenuTitle: 'master-unit' },
        { name: 'Currency', link: 'dashboard/currency', submenuTitle: 'Currency', isSubmenuTitle: true, mainMenuTitle: 'master-currency' }
      ],
      expanded: false
    },
    {
      name: 'WorkFlow',
      isSubmenuTitle: true,
      subMenu: [
        { name: 'Domain Management', link: 'dashboard/domain-management', submenuTitle: 'Domain Management', isSubmenuTitle: true, mainMenuTitle: 'offer-discount' },
        { name: 'Manage User', link: 'dashboard/manage-user', submenuTitle: 'Manage User', isSubmenuTitle: true, mainMenuTitle: 'manage-user' },
        { name: 'Product Management', link: 'dashboard/product-management', submenuTitle: 'Product Management', isSubmenuTitle: true, mainMenuTitle: 'product-management' },
        { name: 'Sub-Product Management', link: 'dashboard/sub-product-management', submenuTitle: 'Sub-Product Management', isSubmenuTitle: true, mainMenuTitle: 'sub-product-management' },
        { name: 'Child Product Management', link: 'dashboard/child-product-management', submenuTitle: 'Child Product Management', isSubmenuTitle: true, mainMenuTitle: 'child-product-management' },
        { name: 'Access Permission Management', link: 'dashboard/access-permission-management', submenuTitle: 'Access Permission Management', isSubmenuTitle: true, mainMenuTitle: 'access-permission-management' },
        { name: 'Role Management', link: 'dashboard/role-management', submenuTitle: 'Role Management', isSubmenuTitle: true, mainMenuTitle: 'role-management' },
      ],
      expanded: false
    },
    {
      name: 'User Management',
      isSubmenuTitle: true,
      subMenu: [
        { name: 'Password Policy', link: 'dashboard/password-policy', submenuTitle: 'Password Policy', isSubmenuTitle: true, mainMenuTitle: 'password-policy' }
      ]
    }
  ]

  toggleSubMenu(item: any) {
    item.expanded = !item.expanded;
  }

  selectMenu(menu: string, link?: string, isSubmenu?: boolean, mainMenu?: string) {
    if (link) {
      this.router.navigate([link]); // Navigate to the selected route
    }
    this.menuChanged.emit({ menu, isSubmenu, mainMenu });
  }

}