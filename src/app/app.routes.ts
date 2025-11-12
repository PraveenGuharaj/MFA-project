import { Routes } from '@angular/router';

export const routes: Routes = [
      { path: '', loadChildren: () => import('./features/mfa/mfa-routing/mfa-routing-module').then(m => m.MfaRoutingModule) },

];
