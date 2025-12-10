import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
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
  headerTitle!: string;
  headerTabs: any[] = [];
  activeTab: string = '';
  currentPage: string = '';
  subProduct: boolean = false;
  isProductHub: boolean = false; // Track if we are in 'Product Hub'
  subMenuTitle: any;
  isSubmenu!: boolean;

  constructor(private router: Router, private cdr: ChangeDetectorRef) { }

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
        } else if (url.includes('manage-locators')) {
          this.currentPage = 'manage-locators';
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


  onMenuChanged(event: { menu: string; type: string, isSubmenu: boolean }) {
    console.log('event', event);

    if (event.menu === 'User Overview') {
      this.isProductHub = false;
      this.headerTitle = 'Dashboard';
      this.activeTab = 'all';
      this.cdr.detectChanges();
    } else if (event.menu === 'Product Hub') {
      this.isProductHub = true;
      this.headerTitle = 'Product Hub';
      this.activeTab = 'retail';
      this.cdr.detectChanges();
    } else if (event.menu === 'Login Activity') {
      this.isProductHub = false;
      this.headerTitle = 'Login Activity';
      this.activeTab = 'retail';
      this.cdr.detectChanges();
    } else if (event.menu == 'Admin Center') {
      this.headerTitle = 'Admin Center';
      this.isProductHub = false
      this.cdr.detectChanges();
    } else if (event.menu == 'Manage OTP') {
      this.headerTitle = 'Admin Center';
      this.subMenuTitle = 'OTP Management'
      this.isSubmenu = event.isSubmenu;
    } else if (event.menu == 'Manage Locators') {
      this.headerTitle = 'Admin Center';
      this.subMenuTitle = 'Manage Locators'
      this.isSubmenu = event.isSubmenu;
      this.cdr.detectChanges();
    } else if (event.menu == 'Manage License') {
      this.headerTitle = 'Admin Center';
      this.subMenuTitle = 'Manage License'
      this.isSubmenu = event.isSubmenu;
      this.cdr.detectChanges();
    } else if (event.menu == 'Manage MFA') {
      this.headerTitle = 'Admin Center';
      this.subMenuTitle = 'Manage MFA'
      this.isSubmenu = event.isSubmenu;
      this.cdr.detectChanges();
    }
    else {
      // this.headerTitle = 'Dashboard'; // Fallback title
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
    } else if (this.currentPage === 'login-activity') {
      if (this.activeTab === 'all') {
        this.router.navigate(['/dashboard/login-activity']);
      } else if (this.activeTab === 'mobile') {
        this.router.navigate(['/dashboard/login-activity-mobile']);
      } else if (this.activeTab === 'web') {
        this.router.navigate(['/dashboard/login-activity-web']);
      }
    } else if (this.currentPage === 'mfa-otp-activity') {
      if (this.activeTab === 'all') {
        this.router.navigate(['/dashboard/mfa-otp-activity']);
      } else if (this.activeTab === 'mobile') {
        this.router.navigate(['/dashboard/mfa-otp-activity-mobile']);
      } else if (this.activeTab === 'web') {
        this.router.navigate(['/dashboard/mfa-otp-activity-web']);
      }
    } else if (this.currentPage == 'security-account-status') {
      if (this.activeTab === 'all') {
        this.router.navigate(['/dashboard/security-account-status']);
      } else if (this.activeTab === 'mobile') {
        this.router.navigate(['/dashboard/security-account-status-mobile']);
      } else if (this.activeTab === 'web') {
        this.router.navigate(['/dashboard/security-account-status-web']);
      }
    } else if (this.currentPage == 'session-metrics') {
      if (this.activeTab === 'all') {
        this.router.navigate(['/dashboard/session-metrics']);
      } else if (this.activeTab === 'mobile') {
        this.router.navigate(['/dashboard/session-metrics-mobile']);
      } else if (this.activeTab === 'web') {
        this.router.navigate(['/dashboard/session-metrics-web']);
      }
    } else if (this.currentPage == 'service-request') {
      if (this.activeTab === 'all') {
        this.router.navigate(['/dashboard/service-request']);
      } else if (this.activeTab === 'mobile') {
        this.router.navigate(['/dashboard/service-request-mobile']);
      } else if (this.activeTab === 'web') {
        this.router.navigate(['/dashboard/service-request-web']);
      }
    } else if (this.currentPage == 'manage-locators') {
      if (this.activeTab === 'ATM Locator') {
        this.router.navigate(['/admin-center/manage-locators']);
      } else if (this.activeTab === 'Branch Locator') {
        this.router.navigate(['/admin-center/branch-locators']);
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