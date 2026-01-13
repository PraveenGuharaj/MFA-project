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
import { AdminCenterManageOtp } from './component/admin-center/admin-center-manage-otp/admin-center-manage-otp';
import { AdminCenterManageLocators } from './component/admin-center/admin-center-manage-locators/admin-center-manage-locators';
import { AdminCenterManageLicense } from './component/admin-center/admin-center-manage-license/admin-center-manage-license';
import { AdminCenterManageMfa } from './component/admin-center/admin-center-manage-mfa/admin-center-manage-mfa';
import { AdminCenterBranchLocator } from './component/admin-center/admin-center-branch-locator/admin-center-branch-locator';
import { AdminCenterDeviceManagement } from './component/admin-center/admin-center-device-management/admin-center-device-management';
import { AdminCenterPushNotification } from './component/admin-center/admin-center-push-notification/admin-center-push-notification';
import { AdminCenterMessageCampaign } from './component/admin-center/admin-center-message-campaign/admin-center-message-campaign';
import { AdminCenterCustomerSegments } from './component/admin-center/admin-center-customer-segments/admin-center-customer-segments';
import { AdminCenterTemplateCreation } from './component/admin-center/admin-center-template-creation/admin-center-template-creation';
import { AdminCenterManageContent } from './component/admin-center/admin-center-manage-content/admin-center-manage-content';
import { AdminCenterCfmsParameters } from './component/admin-center/admin-center-cfms-parameters/admin-center-cfms-parameters';
import { AdminCenterTc } from './component/admin-center/admin-center-tc/admin-center-tc';
import { AdminCenterBaner } from './component/admin-center/admin-center-baner/admin-center-baner';
import { AdminCenterProduct } from './component/admin-center/admin-center-product/admin-center-product';
import { AdminCenterDatabaseConfiguration } from './component/admin-center/admin-center-database-configuration/admin-center-database-configuration';
import { AdminCenterSubProduct } from './component/admin-center/admin-center-sub-product/admin-center-sub-product';
import { AdminCenterReadyToSync } from './component/admin-center/admin-center-ready-to-sync/admin-center-ready-to-sync';
import { AdminCenterLinkConfiguration } from './component/admin-center/admin-center-link-configuration/admin-center-link-configuration';
import { AdminCenterFaqManagement } from './component/admin-center/admin-center-faq-management/admin-center-faq-management';
import { BlockUnblockUsers } from './component/block-unblock-users/block-unblock-users/block-unblock-users';
import { ManageParameter } from './component/manage-parameter/manage-parameter/manage-parameter';
import { AdminCenterForceUpdate } from './component/admin-center/admin-center-force-update/admin-center-force-update';
import { AdminCenterPartnerOnboarding } from './component/admin-center/admin-center-partner-onboarding/admin-center-partner-onboarding';
import { OfferDiscountOfferManagement } from './component/offer-discount-management/offer-discount-offer-management/offer-discount-offer-management';
import { MasterDataCountry } from './component/master-data/master-data-country/master-data-country';
import { OfferDiscountDiscountManagement } from './component/offer-discount-management/offer-discount-discount-management/offer-discount-discount-management';
import { MasterDataChannel } from './component/master-data/master-data-channel/master-data-channel';
import { MasterDataLanguage } from './component/master-data/master-data-language/master-data-language';
import { MasterDataUnit } from './component/master-data/master-data-unit/master-data-unit';
import { MasterDataCurrency } from './component/master-data/master-data-currency/master-data-currency';
import { WorkFlowDomainManagement } from './component/work-flow/work-flow-domain-management/work-flow-domain-management';
import { WorkFlowManageUser } from './component/work-flow/work-flow-manage-user/work-flow-manage-user';
import { WorkFlowProductManagement } from './component/work-flow/work-flow-product-management/work-flow-product-management';
import { WorkFlowSubProductManagement } from './component/work-flow/work-flow-sub-product-management/work-flow-sub-product-management';
import { WorkFlowChildProductManangement } from './component/work-flow/work-flow-child-product-manangement/work-flow-child-product-manangement';
import { WorkFlowAddAccess } from './component/work-flow/work-flow-add-access/work-flow-add-access';
import { WorkFlowAccessPermissionManagement } from './component/work-flow/work-flow-access-permission-management/work-flow-access-permission-management';
import { WorkFlowRoleManagement } from './component/work-flow/work-flow-role-management/work-flow-role-management';
import { UserManagementPasswordPolicy } from './component/user-management/user-management-password-policy/user-management-password-policy';
import { AdminCenterRetailProduct } from './component/admin-center/admin-center-retail-product/admin-center-retail-product';
import { AdminCenterManagecontentSubproduct } from './component/admin-center/admin-center-managecontent-subproduct/admin-center-managecontent-subproduct';

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
      { path: 'geographic-metrics', component: DashboardGeographicMetrics },
      { path: 'session-metrics', component: DashboardSessionMetrics },
      { path: 'session-metrics-web', component: DashboardSessionMetricsWeb },
      { path: 'session-metrics-mobile', component: DashboardSessionMetricsMobile },
      { path: 'service-request', component: DashboardServiceRequest },
      { path: 'service-request-web', component: DashboardServiceRequestWeb },
      { path: 'service-request-mobile', component: DashboardServiceRequestMobile },
      { path: 'transaction-mix', component: DashboardTransactionMix },
      { path: 'digital-onboarding-journey', component: DashboardDigitatlOnboarding },
      { path: 'transaction-perfomance', component: DashboardTransactionPerformance },
      { path: 'digital-onboarding-insights', component: DashboardDigitalJourneyInsights },
      { path: 'user-overview-mobile', component: DashboardUserOverviewMobile },
      { path: 'user-overview-web', component: DashboarUserOverviewWeb },


      { path: 'manage-otp', component: AdminCenterManageOtp },
      { path: 'manage-locators', component: AdminCenterManageLocators },
      { path: 'branch-locators', component: AdminCenterBranchLocator },
      { path: 'manage-license', component: AdminCenterManageLicense },
      { path: 'manage-mfa', component: AdminCenterManageMfa },
      { path: 'device-management', component: AdminCenterDeviceManagement },
      { path: 'push-notification', component: AdminCenterPushNotification },
      { path: 'message-campaign', component: AdminCenterMessageCampaign },
      { path: 'customer-segments', component: AdminCenterCustomerSegments },
      { path: 'template-creation', component: AdminCenterTemplateCreation },
      { path: 'manage-content', component: AdminCenterManageContent },
      { path: 'content-management', component: AdminCenterManageContent },
      { path: 'cfms-parameter', component: AdminCenterCfmsParameters },

      { path: 'tc', component: AdminCenterTc },
      { path: 'banner', component: AdminCenterBaner },
      { path: 'product', component: AdminCenterProduct },
      { path: 'databaseConfiguration', component: AdminCenterDatabaseConfiguration },
      { path: 'subProduct', component: AdminCenterSubProduct },
      { path: 'retail-product', component: AdminCenterRetailProduct },
      { path: 'readyToSync', component: AdminCenterReadyToSync },
      { path: 'linkConfiguration', component: AdminCenterLinkConfiguration },
      { path: 'faqManagement', component: AdminCenterFaqManagement },
      { path: 'blockUnblockUsers', component: BlockUnblockUsers },
      { path: 'manageParameter', component: ManageParameter },
      { path: 'forceUpdate', component: AdminCenterForceUpdate },
      { path: 'partnerOnboarding', component: AdminCenterPartnerOnboarding },
      { path: 'subProductContent', component: AdminCenterManagecontentSubproduct },
      { path: '', redirectTo: 'user-overview', pathMatch: 'full' }, // Default route



      // sample work
      { path: 'offer-management', component: OfferDiscountOfferManagement },
      { path: 'discount-management', component: OfferDiscountDiscountManagement },
      { path: 'country', component: MasterDataCountry },
      { path: 'channel', component: MasterDataChannel },
      { path: 'language', component: MasterDataLanguage },
      { path: 'unit', component: MasterDataUnit },
      { path: 'currency', component: MasterDataCurrency },
      { path: 'domain-management', component: WorkFlowDomainManagement },
      { path: 'manage-user', component: WorkFlowManageUser },
      { path: 'product-management', component: WorkFlowProductManagement },
      { path: 'sub-product-management', component: WorkFlowSubProductManagement },
      { path: 'child-product-management', component: WorkFlowChildProductManangement },
      { path: 'access-permission-management', component: WorkFlowAccessPermissionManagement },
      // { path: 'access-permission-management', component: WorkFlowAddAccess },
      { path: 'role-management', component: WorkFlowRoleManagement },
      { path: 'password-policy', component: UserManagementPasswordPolicy },
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
      },


      { path: 'merchants', component: MerchantList },
      { path: 'categories', component: MerchantCategories },
      { path: 'offers', component: MerchantOfferManagement },
      { path: 'setting', component: MerchantSetting },
      { path: 'product', component: MerchantProduct },

      { path: '', redirectTo: 'merchants', pathMatch: 'full' }



      // sample work
    ]
  },

  {
    path: 'offer-discount',
    component: Dashboard,
    children: [
      { path: 'offer-management', component: OfferDiscountOfferManagement },
      { path: 'discount-management', component: OfferDiscountDiscountManagement },
      { path: '', redirectTo: 'user-overview', pathMatch: 'full' }
    ]
  },

  {
    path: 'master-data',
    component: Dashboard,
    children: [
      { path: 'country', component: MasterDataCountry },
      { path: 'channel', component: MasterDataChannel },
      { path: 'language', component: MasterDataLanguage },
      { path: 'unit', component: MasterDataUnit },
      { path: 'currency', component: MasterDataCurrency },
    ]
  },

  {
    path: 'work-flow',
    component: Dashboard,
    children: [
      { path: 'domain-management', component: WorkFlowDomainManagement },
      { path: 'manage-user', component: WorkFlowManageUser },
      { path: 'product-management', component: WorkFlowProductManagement },
      { path: 'sub-product-management', component: WorkFlowSubProductManagement },
      { path: 'child-product-management', component: WorkFlowChildProductManangement },
      { path: 'access-permission-management', component: WorkFlowAccessPermissionManagement },
      // { path: 'access-permission-management', component: WorkFlowAddAccess },
      { path: 'role-management', component: WorkFlowRoleManagement }
    ]
  },

  {
    path: 'user-management',
    component: Dashboard,
    children: [
      { path: 'password-policy', component: UserManagementPasswordPolicy }
    ]
  },

  // {
  //   path: 'admin-center',
  //   component:Dashboard,
  //   children: [
  //     { path: 'manage-otp', component: AdminCenterManageOtp},
  //     { path: 'manage-locators', component: AdminCenterManageLocators},
  //     { path: 'branch-locators', component: AdminCenterBranchLocator},
  //     { path: 'manage-license', component: AdminCenterManageLicense},
  //     { path: 'manage-mfa', component: AdminCenterManageMfa},
  //     { path: 'device-management', component: AdminCenterDeviceManagement},
  //     { path: 'push-notification', component: AdminCenterPushNotification},
  //     { path: 'message-campaign', component: AdminCenterMessageCampaign},
  //     { path: 'customer-segments', component: AdminCenterCustomerSegments},
  //     { path: 'template-creation', component: AdminCenterTemplateCreation}
  //   ] 
  // },

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