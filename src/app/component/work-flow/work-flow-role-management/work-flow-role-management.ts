import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../../admin-center/admin-center-service';
import { MatDialog } from '@angular/material/dialog';
import { CommonToaster } from '../../../shared/services/common-toaster';

@Component({
  selector: 'app-work-flow-role-management',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './work-flow-role-management.html',
  styleUrl: './work-flow-role-management.scss',
})
export class WorkFlowRoleManagement {
  @Input() subProduct: boolean = false;
  domainId: any;
  getRoleMgmt: any;
  showDeleteConfirm: boolean = false;
  selectedProduct: any;
  pageSize = 10;
  currentPage = 1;
  totalPages = 0;
  pagedProducts: any[] = [];


  constructor(private adminCenterService: AdminCenterService,
    public dialog: MatDialog,
    private commonToaster: CommonToaster
  ) { }

  ngOnInit() {
    this.getRoleMgmtApi();
    this.adminCenterService.refresh$.subscribe((res: any) => {
      console.log('Refreshing table...', res);
      this.domainId = res;
      this.getRoleMgmtApi();
    });
  }

  products = [
    {
      domainName: 'BO',
      roleName: 'PRD',
      roleID: 'USER_MANAGEMENT_CONFIG',
      hierarchyLevel: 'User Management',
      actionsType: 'image',
      status: 'Active'

    },
    {
      domainName: 'BO',
      roleName: 'PRD',
      roleID: 'PARTNER_ONBOARDING_CONFIG',
      hierarchyLevel: 'Partner Onboarding',
      actionsType: 'image',
      status: 'Active'

    },
    {
      domainName: 'BO',
      roleName: 'PRD',
      roleID: 'CUSTOMER_SERVICE_CONFIG',
      hierarchyLevel: 'Customer Service',
      actionsType: 'image',
      status: 'Active'

    },
    {
      domainName: 'BO',
      roleName: 'PRD',
      roleID: 'NOTIFICATIONS_MANAGEMENT_CONFIG',
      hierarchyLevel: 'Notifications Management',
      actionsType: 'image',
      status: 'Active'

    },
    {
      domainName: 'BO',
      roleName: 'PRD',
      roleID: 'LICENSE_CONFIG',
      hierarchyLevel: 'License Management',
      actionsType: 'image',
      status: 'Active'

    },
    {
      domainName: 'BO',
      roleName: 'PRD',
      roleID: 'OTP_BIO_CONFIGURATION',
      hierarchyLevel: 'User Management',
      actionsType: 'image',
      status: 'Active'

    }
  ];

  getRoleMgmtApi() {
    const payload = {
      "domainId": this.domainId || 'BO',
      "productCode": "",
      "subProductCode": ""
    }

    this.adminCenterService.getRoleMgmt(payload).subscribe((res: any) => {
      this.getRoleMgmt = res.data;
      this.totalPages = Math.ceil(this.getRoleMgmt.length / this.pageSize);
      this.setPage(1)
    })
  }

  setPage(page: number) {
    if (page < 1 || page > this.totalPages) return;

    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedProducts = this.getRoleMgmt.slice(start, end);
  }

  get pages(): number[] {
    const total = this.totalPages;
    const current = this.currentPage;

    if (total <= 5) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    const pages = new Set<number>();

    // Always include first and last
    pages.add(1);
    pages.add(total);

    // Include current and neighbors
    pages.add(current);
    pages.add(current - 1);
    pages.add(current + 1);

    // Remove invalid numbers
    return Array.from(pages)
      .filter(p => p > 0 && p <= total)
      .sort((a, b) => a - b);
  }



  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}
