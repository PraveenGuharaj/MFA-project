import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
     children: [
      { path: '', loadComponent: () => import('../ui/mfa-list/mfa-list').then(c => c.MfaList) },
      { path: 'add', loadComponent: () => import('../ui/mfa-add/mfa-add').then(c => c.MfaAdd) },
      { path: 'edit/:id', loadComponent: () => import('../ui/mfa-edit/mfa-edit').then(c => c.MfaEdit) },
      { path: 'view/:id', loadComponent: () => import('../ui/mfa-view/mfa-view').then(c => c.MfaView) },
      { path: 'delete/:id', loadComponent: () => import('../ui/mfa-delete/mfa-delete').then(c => c.MfaDelete) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MfaRoutingModule { }
