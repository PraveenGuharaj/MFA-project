import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../../admin-center/admin-center-service';
import { ComonPopup } from '../../../shared/comon-popup/comon-popup';
import { MatDialog } from '@angular/material/dialog';
import { CommonToaster } from '../../../shared/services/common-toaster';
import { WorkFlowAddSubproudct } from '../work-flow-add-subproudct/work-flow-add-subproudct';

@Component({
  selector: 'app-work-flow-sub-product-management',
  imports: [
    CommonModule,
    MatIconModule,
    ComonPopup
  ],
  templateUrl: './work-flow-sub-product-management.html',
  styleUrl: './work-flow-sub-product-management.scss',
})
export class WorkFlowSubProductManagement {
  @Input() subProduct: boolean = false;
  domainId: any;
  getSubProduct: any;
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
    this.getSubProductApi();
    this.adminCenterService.refresh$.subscribe((res: any) => {
      console.log('Refreshing table...', res);
      this.domainId = res;
      this.getSubProductApi();
    });
  }

  products = [
    {
      domain: 'BO',
      product: 'PRD',
      subProductCode: 'USER_MANAGEMENT_CONFIG',
      subProductDescription: 'User Management',
      enterSubProductURL: 'User Management',
      status: 'Active'

    },
    {
      domain: 'BO',
      product: 'PRD',
      subProductCode: 'PARTNER_ONBOARDING_CONFIG',
      subProductDescription: 'Partner Onboarding',
      enterSubProductURL: 'Partner Onboarding',
      status: 'Active'

    },
    {
      domain: 'BO',
      product: 'PRD',
      subProductCode: 'CUSTOMER_SERVICE_CONFIG',
      subProductDescription: 'Customer Service',
      enterSubProductURL: 'Customer Service',
      status: 'Active'

    },
    {
      domain: 'BO',
      product: 'PRD',
      subProductCode: 'NOTIFICATIONS_MANAGEMENT_CONFIG',
      subProductDescription: 'Notifications Management',
      enterSubProductURL: 'Notifications Management',
      status: 'Active'

    },
    {
      domain: 'BO',
      product: 'PRD',
      subProductCode: 'LICENSE_CONFIG',
      subProductDescription: 'License Management',
      enterSubProductURL: 'License Management',
      status: 'Active'

    },
    {
      domain: 'BO',
      product: 'PRD',
      subProductCode: 'OTP_BIO_CONFIGURATION',
      subProductDescription: 'User Management',
      enterSubProductURL: 'User Management',
      status: 'Active'

    }
  ];


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }

  getSubProductApi() {

    const payload = {
      "domainId": this.domainId || 'BO',
      "productCode": "",
      "subProductCode": ""
    }

    this.adminCenterService.getWorkflowSubProduct(payload).subscribe((res: any) => {
      this.getSubProduct = res.data;
      this.totalPages = Math.ceil(this.getSubProduct.length / this.pageSize);
      this.setPage(1)
    })
  }

  openModal(product: any) {
    console.log('product', product);

    const dialogRef = this.dialog.open(WorkFlowAddSubproudct, {
      width: '60%',
      height: 'auto',
      position: { right: '0' },
      data: {
        editData: product,
        isEdit: true
      }
    });

    //  THIS IS THE IMPORTANT PART
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with:', result);

      if (result === 'retaiClose') {
        console.log('success');
        this.getSubProductApi();
        // this.loadSubProducts(); //  refresh list / API call
      }
    });
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
      domain: this.selectedProduct.domainDesc,
      productCode: this.selectedProduct.productCode,
      subProductCode: this.selectedProduct.subProductCode
    }

    this.showDeleteConfirm = false;
    // this.selectedProduct = null;
    this.adminCenterService.deleteSubProductMgmt(payload).subscribe((res) => {
      console.log('res', res);
      if (res.status.code == "000000") {
        this.commonToaster.showSuccess(res.status.description);
        this.getSubProductApi();
      }

    })
  }

  setPage(page: number) {
    if (page < 1 || page > this.totalPages) return;

    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedProducts = this.getSubProduct.slice(start, end);
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

}
