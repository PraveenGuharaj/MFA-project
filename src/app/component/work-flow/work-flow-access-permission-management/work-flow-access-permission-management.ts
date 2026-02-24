import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonToaster } from '../../../shared/services/common-toaster';
import { AdminCenterService } from '../../admin-center/admin-center-service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-work-flow-access-permission-management',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './work-flow-access-permission-management.html',
  styleUrl: './work-flow-access-permission-management.scss',
})
export class WorkFlowAccessPermissionManagement {
  @Input() subProduct: boolean = false;
  domainId: any;
  getAccessPermissionMgmt: any;

  constructor(private adminCenterService: AdminCenterService, public dialog: MatDialog,
    private commonToaster: CommonToaster
  ) { }

  ngOnInit() {
    this.getAccessPermissionMgmtApi();
    this.adminCenterService.refresh$.subscribe(() => {
      console.log('Refreshing table...');
      this.getAccessPermissionMgmtApi();
    });
  }

  products = [
    {
      domain: 'BO',
      product: 'USER_MANAGEMENT_CONFIG',
      subProductCode: 'USER_MANAGEMENT_CONFIG',
      accessCode: 'SUMMARY',
      accessDescription: 'MODIFY',
      priority: 1,
      actionsType: 'image'

    },
    {
      domain: 'BO',
      product: 'PARTNER_ONBOARDING_CONFIG',
      subProductCode: 'PARTNER_ONBOARDING_CONFIG',
      accessCode: 'ADD',
      accessDescription: 'MODIFY',
      priority: 1,
      actionsType: 'image'

    },
    {
      domain: 'BO',
      product: 'CUSTOMER_SERVICE_CONFIG',
      subProductCode: 'CUSTOMER_SERVICE_CONFIG',
      accessCode: 'MODIFY',
      accessDescription: 'MODIFY',
      priority: 1,
      actionsType: 'image'

    },
    {
      domain: 'BO',
      product: 'NOTIFICATIONS_MANAGEMENT_CONFIG',
      subProductCode: 'NOTIFICATIONS_MANAGEMENT_CONFIG',
      accessCode: 'ADD',
      accessDescription: 'MODIFY',
      priority: 1,
      actionsType: 'image'

    },
    {
      domain: 'BO',
      product: 'LICENSE_CONFIG',
      subProductCode: 'LICENSE_CONFIG',
      accessCode: 'SUMMARY',
      accessDescription: 'MODIFY',
      priority: 1,
      actionsType: 'image'

    },
    {
      domain: 'BO',
      product: 'OTP_BIO_CONFIGURATION',
      subProductCode: 'OTP_BIO_CONFIGURATION',
      accessCode: 'MODIFY',
      accessDescription: 'MODIFY',
      priority: 1,
      actionsType: 'image'

    }
  ];


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }

  getAccessPermissionMgmtApi() {
    const payload = {
      domainId: this.domainId || 'BO',
    }
    this.adminCenterService.getAccessPermissionMgmt(payload).subscribe((res: any) => {
      this.getAccessPermissionMgmt = res.data;
    })
  }
}
