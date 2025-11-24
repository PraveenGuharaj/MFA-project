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

export const routes: Routes = [
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
  { path: 'MfaDeals', component: MfaDeals },
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
  }


];
