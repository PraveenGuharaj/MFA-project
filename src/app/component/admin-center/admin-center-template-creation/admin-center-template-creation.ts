import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../admin-center-service';
import { MatDialog } from '@angular/material/dialog';
import { AdminCenterAddTemplateCreation } from '../admin-center-add-template-creation/admin-center-add-template-creation';
import { ComonPopup } from '../../../shared/comon-popup/comon-popup';
import { CommonToaster } from '../../../shared/services/common-toaster';

@Component({
  selector: 'app-admin-center-template-creation',
  imports: [
    CommonModule,
    MatIconModule,
    ComonPopup
  ],
  templateUrl: './admin-center-template-creation.html',
  styleUrl: './admin-center-template-creation.scss',
})
export class AdminCenterTemplateCreation {
  @Input() subProduct: boolean = false;
  getTemplateCreationData: any;
  showDeleteConfirm: boolean = false;
  selectedProduct: any;
  pageSize = 10;
  currentPage = 1;
  totalPages = 0;
  pagedProducts: any[] = [];

  constructor(private adminCenterService: AdminCenterService,
    public dialog: MatDialog, private commonToaster: CommonToaster
  ) { }

  ngOnInit() {
    this.getTemplateCreation();
    this.adminCenterService.refresh$.subscribe(() => {
      console.log('Refreshing table...');
      this.getTemplateCreation();
    });
  }

  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }

  getTemplateCreation() {
    this.adminCenterService.getTemplateCreation().subscribe((res: any) => {
      this.getTemplateCreationData = res.data;
      this.totalPages = Math.ceil(this.getTemplateCreationData.length / this.pageSize);
      this.setPage(1)
    })
  }

  openModal(product: any) {
    console.log('product', product);

    const dialogRef = this.dialog.open(AdminCenterAddTemplateCreation, {
      width: '60%',
      height: 'auto',
      position: { right: '0' },
      data: {
        editData: product,
        isEdit: true
      }
    });

    // 👇 THIS IS THE IMPORTANT PART
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with:', result);

      if (result === 'retaiClose') {
        console.log('success');
        this.getTemplateCreation();
        // this.loadSubProducts(); // 🔥 refresh list / API call
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


      templateId: this.selectedProduct.templateId,
      domainId: null,
      categoryId: null,
      unitId: null,
      channelId: null,
      notificationType: null,
      remarks: null,
      templateName: null,
      deepLink: null,
      notificationTemplate: null,
      action: "DELETE"


    }

    this.showDeleteConfirm = false;
    // this.selectedProduct = null;
    this.adminCenterService.deleteTemplate(payload).subscribe((res) => {
      console.log('res', res);
      if (res.status.code == "000000") {
        this.commonToaster.showSuccess('Template Deleted Successfully');
        this.getTemplateCreation();
      }

    })
  }

  setPage(page: number) {
    if (page < 1 || page > this.totalPages) return;

    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedProducts = this.getTemplateCreationData.slice(start, end);
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
