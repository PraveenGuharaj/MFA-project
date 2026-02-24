import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonToaster } from '../../../shared/services/common-toaster';
import { AdminCenterService } from '../../admin-center/admin-center-service';
import { MatDialog } from '@angular/material/dialog';
import { ComonPopup } from '../../../shared/comon-popup/comon-popup';

@Component({
  selector: 'app-work-flow-access-permission-management',
  imports: [
    CommonModule,
    MatIconModule,
    ComonPopup
  ],
  templateUrl: './work-flow-access-permission-management.html',
  styleUrl: './work-flow-access-permission-management.scss',
})
export class WorkFlowAccessPermissionManagement {
  @Input() subProduct: boolean = false;
  domainId: any;
  getAccessPermissionMgmt: any;
  pageSize = 10;
  currentPage = 1;
  totalPages = 0;
  pagedProducts: any[] = [];
  showDeleteConfirm: boolean = false;
  selectedProduct: any;

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
      this.totalPages = Math.ceil(this.getAccessPermissionMgmt.length / this.pageSize);
      this.setPage(1)
    })
  }

  setPage(page: number) {
    if (page < 1 || page > this.totalPages) return;

    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedProducts = this.getAccessPermissionMgmt.slice(start, end);
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

  openDeletePopup(product: any) {
    this.selectedProduct = product;
    this.showDeleteConfirm = true;
  }

  cancelDelete() {
    this.showDeleteConfirm = false;
    this.selectedProduct = null;
  }

  confirmDelete() {
    console.log('Deleting product:', this.selectedProduct);

    const payload = {
      domain: this.selectedProduct.domainId,
      productCode: this.selectedProduct.productCode,
      subProductCode: this.selectedProduct.subProductCode,
      functionCode: this.selectedProduct.functionCode
    }

    this.showDeleteConfirm = false;
    // this.selectedProduct = null;
    this.adminCenterService.deleteAccessPermission(payload).subscribe((res) => {
      console.log('res', res);
      if (res.status.code == "000000") {
        this.commonToaster.showSuccess(res.status.description);
        this.getAccessPermissionMgmtApi();
      }

    })
  }
}
