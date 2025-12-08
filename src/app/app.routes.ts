import { Routes } from '@angular/router';
import { MfaList } from './component/mfa-management/mfa-list/mfa-list';
import { Layout } from './core/layout/common/layout/layout';
import { MfaOfferManagement } from './component/mfa-offer-management/mfa-offer-management';
import { MfaDeals } from './component/mfa-deals/mfa-deals/mfa-deals';
import { MfaDiscountManagement } from './component/mfa-discount-management/mfa-discount-management';
import { MerchantfLayout } from './core/layout/common/layout/merchantf-layout/merchantf-layout';
import { MerchantList } from './component/merchant-list/merchant-list';
import { MerchantCategories } from './component/mechant/merchant-categories/merchant-categories';
import { MerchantOfferManagement } from './component/mechant/merchant-offer-management/merchant-offer-management';
import { MerchantSetting } from './component/mechant/merchant-setting/merchant-setting';
import { MerchantProduct } from './component/mechant/merchant-product/merchant-product';
import { Dashboard } from './component/dashboard/dashboard/dashboard';
import { DashboardUserOverview } from './component/dashboard/dashboard-user-overview/dashboard-user-overview';
import { DashboardProductHub } from './component/dashboard/dashboard-product-hub/dashboard-product-hub';
import { DashboardLoginActivity } from './component/dashboard/dashboard-login-activity/dashboard-login-activity';
import { DashboardMfaOtpActivity } from './component/dashboard/dashboard-mfa-otp-activity/dashboard-mfa-otp-activity';
import { DashboardSercurityAccountStatus } from './component/dashboard/dashboard-sercurity-account-status/dashboard-sercurity-account-status';
import { DashboardSessionMetrics } from './component/dashboard/dashboard-session-metrics/dashboard-session-metrics';
import { DashboardGeographicMetrics } from './component/dashboard/dashboard-geographic-metrics/dashboard-geographic-metrics';
import { DashboardServiceRequest } from './component/dashboard/dashboard-service-request/dashboard-service-request';
import { DashboardTransactionMix } from './component/dashboard/dashboard-transaction-mix/dashboard-transaction-mix';
import { DashboardDigitatlOnboarding } from './component/dashboard/dashboard-digitatl-onboarding/dashboard-digitatl-onboarding';
import { DashboardTransactionPerformance } from './component/dashboard/dashboard-transaction-performance/dashboard-transaction-performance';
import { DashboardDigitalJourneyInsights } from './component/dashboard/dashboard-digital-journey-insights/dashboard-digital-journey-insights';
import { DashboardUserOverviewMobile } from './component/dashboard/dashboard-user-overview-mobile/dashboard-user-overview-mobile';
import { DashboarUserOverviewWeb } from './component/dashboard/dashboard-user-overview-web/dashboard-user-overview-web';
import { DashboardLoginActivityWeb } from './component/dashboard/dashboard-login-activity-web/dashboard-login-activity-web';
import { DashboardLoginActivityMobile } from './component/dashboard/dashboard-login-activity-mobile/dashboard-login-activity-mobile';
import { DashboardMfaOtpActivityWeb } from './component/dashboard/dashboard-mfa-otp-activity-web/dashboard-mfa-otp-activity-web';
import { DashboardMfaOtpActivityMobile } from './component/dashboard/dashboard-mfa-otp-activity-mobile/dashboard-mfa-otp-activity-mobile';
import { DashboardSecurityAccountStatusMobile } from './component/dashboard/dashboard-security-account-status-mobile/dashboard-security-account-status-mobile';
import { DashboardSecurityAccountStatusWeb } from './component/dashboard/dashboard-security-account-status-web/dashboard-security-account-status-web';
import { DashboardSessionMetricsWeb } from './component/dashboard/dashboard-session-metrics-web/dashboard-session-metrics-web';
import { DashboardSessionMetricsMobile } from './component/dashboard/dashboard-session-metrics-mobile/dashboard-session-metrics-mobile';
import { DashboardServiceRequestWeb } from './component/dashboard/dashboard-service-request-web/dashboard-service-request-web';
import { DashboardServiceRequestMobile } from './component/dashboard/dashboard-service-request-mobile/dashboard-service-request-mobile';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  {
    path: 'dashboard',
    component: Dashboard,
    children: [
      { path: 'user-overview', component: DashboardUserOverview },
      { path: 'product-hub', component: DashboardProductHub },
      { path: 'login-activity', component: DashboardLoginActivity },
      { path: 'login-activity-web', component: DashboardLoginActivityWeb },
      { path: 'login-activity-mobile', component: DashboardLoginActivityMobile },
      { path: 'mfa-otp-activity', component: DashboardMfaOtpActivity },
      { path: 'mfa-otp-activity-web', component: DashboardMfaOtpActivityWeb },
      { path: 'mfa-otp-activity-mobile', component: DashboardMfaOtpActivityMobile },
      { path: 'security-account-status', component: DashboardSercurityAccountStatus },
      { path: 'security-account-status-web', component: DashboardSecurityAccountStatusWeb },
      { path: 'security-account-status-mobile', component: DashboardSecurityAccountStatusMobile },
      { path: 'geographic-metrics',component: DashboardGeographicMetrics},
      { path: 'session-metrics', component: DashboardSessionMetrics },
      { path: 'session-metrics-web', component: DashboardSessionMetricsWeb},
      { path: 'session-metrics-mobile', component: DashboardSessionMetricsMobile},
      { path: 'service-request', component: DashboardServiceRequest},
      { path: 'service-request-web', component: DashboardServiceRequestWeb},
      { path: 'service-request-mobile', component: DashboardServiceRequestMobile},
      { path: 'transaction-mix', component:DashboardTransactionMix},
      { path: 'digital-onboarding-journey', component:DashboardDigitatlOnboarding},
      { path: 'transaction-perfomance',component: DashboardTransactionPerformance},
      {path: 'digital-onboarding-insights',component: DashboardDigitalJourneyInsights},
      {path: 'user-overview-mobile',component: DashboardUserOverviewMobile},
      { path: 'user-overview-web',component: DashboarUserOverviewWeb},
      { path: '', redirectTo: 'user-overview', pathMatch: 'full' }  // Default route
    ]
  },
  // { path: '**', redirectTo: '' },


  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'mfa_management',
        component: MfaList,
        data: {
          parent: 'MFA Management',
          title: 'MFA Management'
        }
      },
      {
        path: 'offer_management',
        component: MfaOfferManagement,
        data: {
          parent: 'Offer and Discount Management',
          title: 'Offer Management'
        }
      },
      {
        path: 'discount_management',
        component: MfaDiscountManagement,
        data: {
          parent: 'Offer and Discount Management',
          title: 'Discount Management'
        }
      }
    ]
  },
  // { path: 'MfaDeals', component: MfaDeals },
  // { path: 'merchant_layout', component: MerchantfLayout },
  {
    path: 'merchant',
    component: MerchantfLayout,
    children: [
      { path: 'merchants', component: MerchantList },
      { path: 'categories', component: MerchantCategories },
      { path: 'offers', component: MerchantOfferManagement },
      { path: 'setting', component: MerchantSetting },
      { path: 'product', component: MerchantProduct },

      { path: '', redirectTo: 'merchants', pathMatch: 'full' }
    ]
  },
];