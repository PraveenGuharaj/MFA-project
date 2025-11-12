import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
     children: [
      { path: '', loadComponent: () => import('../../../component/mfa-management/mfa-list/mfa-list').then(c => c.MfaList) },
      { path: 'add', loadComponent: () => import('../../../component/mfa-management/mfa-add/mfa-add').then(c => c.MfaAdd) },
      { path: 'edit/:id', loadComponent: () => import('../../../component/mfa-management/mfa-edit/mfa-edit').then(c => c.MfaEdit) },
      { path: 'view/:id', loadComponent: () => import('../../../component/mfa-management/mfa-view/mfa-view').then(c => c.MfaView) },
      { path: 'delete/:id', loadComponent: () => import('../../../component/mfa-management/mfa-delete/mfa-delete').then(c => c.MfaDelete) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MfaRoutingModule { }
