import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DbxSidebar } from '../../../core/layout/common/dbx-sidebar/dbx-sidebar';
import { DbxHeader } from '../../../core/layout/common/dbx-header/dbx-header';
import { NavigationEnd, Router, RouterModule } from '@angular/router'; // Import RouterModule
import { filter } from 'rxjs';

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
  currentPage: string = '';
  subProduct: boolean = false;
  isProductHub: boolean = false; // Track if we are in 'Product Hub'

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('activeTab', this.activeTab)
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const url = this.router.url;
        console.log('url', url)

        if (url.includes('user-overview')) {
          this.currentPage = 'user-overview';
        } else if (url.includes('login-activity')) {
          this.currentPage = 'login-activity';
        } else if (url.includes('mfa-otp-activity')) {
          this.currentPage = 'mfa-otp-activity';
        } else if (url.includes('security-account-status')) {
          this.currentPage = 'security-account-status';
        } else if (url.includes('geographic-metrics')) {
          this.currentPage = 'geographic-metrics';
        } else if (url.includes('session-metrics')) {
          this.currentPage = 'session-metrics';
        } else if (url.includes('service-request')) {
          this.currentPage = 'service-request';
        } else if (url.includes('transaction-mix')) {
          this.currentPage = 'transaction-mix';
        } else if (url.includes('digital-onboarding-journey')) {
          this.currentPage = 'digital-onboarding-journey';
        } else if (url.includes('transaction-perfomance')) {
          this.currentPage = 'transaction-perfomance';
        } else if (url.includes('digital-onboarding-journey-insights')) {
          this.currentPage = 'digital-onboarding-insights';
        }
        else {
          this.currentPage = 'user-overview';
        }

        console.log("Current Active Page:", this.currentPage);
      });
  }
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

  onTabChanged(tab: string) {
    this.activeTab = tab;
    this.navigateBasedOnTab();
  }

  navigateBasedOnTab() {
    console.log('zzzz', this.currentPage)
    if (this.currentPage === 'user-overview') {

      if (this.activeTab === 'all') {
        this.router.navigate(['/dashboard/user-overview']);
      } else if (this.activeTab === 'mobile') {
        this.router.navigate(['/dashboard/user-overview-mobile']);
      } else if (this.activeTab === 'web') {
        this.router.navigate(['/dashboard/user-overview-web']);
      }

    }
    if (this.currentPage === 'transaction-perfomance') {

      if (this.activeTab === 'all') {
        this.router.navigate(['/dashboard/transaction-perfomance']);
      } else if (this.activeTab === 'mobile') {
        this.router.navigate(['/dashboard/transaction-perfomance-mobile']);
      } else if (this.activeTab === 'web') {
        this.router.navigate(['/dashboard/transaction-perfomance-web']);
      }

    }
  }

}