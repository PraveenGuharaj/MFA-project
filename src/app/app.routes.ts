import { Routes } from '@angular/router';
import { MfaList } from './component/mfa-management/mfa-list/mfa-list';
import { Layout } from './core/layout/common/layout/layout';
import { MfaOfferManagement } from './component/mfa-offer-management/mfa-offer-management';
import { MfaDeals } from './component/mfa-deals/mfa-deals/mfa-deals';
import { MfaDiscountManagement } from './component/mfa-discount-management/mfa-discount-management';

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
  { path: 'MfaDeals', component: MfaDeals }
];
