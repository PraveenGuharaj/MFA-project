import { Routes } from '@angular/router';
import { Layout } from './core/layout/common/layout/layout';
import { MfaList } from './component/mfa-management/mfa-list/mfa-list';
import { MfaDeals } from './component/mfa-deals/mfa-deals/mfa-deals';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: 'mfa-management', component: MfaList },
      { path: '', redirectTo: 'mfa-management', pathMatch: 'full' }
    ]
  },
  { path: 'MfaDeals', component: MfaDeals }
];
