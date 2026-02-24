import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../../admin-center/admin-center-service';
import { MatDialog } from '@angular/material/dialog';
import { CommonToaster } from '../../../shared/services/common-toaster';

@Component({
  selector: 'app-user-management-password-policy',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './user-management-password-policy.html',
  styleUrl: './user-management-password-policy.scss',
})
export class UserManagementPasswordPolicy {
  @Input() subProduct: boolean = false;
  domainId: any;
  getPasswordPolicy: any;

  constructor(private adminCenterService: AdminCenterService,
    public dialog: MatDialog,
    private commonToaster: CommonToaster
  ) { }


  ngOnInit() {
    this.getPasswordPolicyAPi();
    this.adminCenterService.refresh$.subscribe((res: any) => {
      console.log('Refreshing table...', res);
      this.domainId = res;
      this.getPasswordPolicyAPi();
    });
  }
  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }

  getPasswordPolicyAPi() {

    const payload = {
      domainId: this.domainId || 'BO'
    }

    this.adminCenterService.getPasswordPolicy(payload).subscribe((res: any) => {
      this.getPasswordPolicy = res.data;
    })
  }
}
