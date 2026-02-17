import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../../admin-center/admin-center-service';
import { OfferDiscountAddOfferManagement } from '../offer-discount-add-offer-management/offer-discount-add-offer-management';
import { MatDialog } from '@angular/material/dialog';
import { CommonToaster } from '../../../shared/services/common-toaster';
import { ComonPopup } from '../../../shared/comon-popup/comon-popup';

@Component({
  selector: 'app-offer-discount-offer-management',
  imports: [
    CommonModule,
    MatIconModule,
    ComonPopup
  ],
  templateUrl: './offer-discount-offer-management.html',
  styleUrl: './offer-discount-offer-management.scss',
})
export class OfferDiscountOfferManagement {
  @Input() subProduct: boolean = false;
  getOfferMgmt: any;
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
    this.getOfferMgmtApi();
    this.adminCenterService.refresh$.subscribe(() => {
      console.log('Refreshing table...');
      this.getOfferMgmtApi();
    });
  }

  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }

  getOfferMgmtApi() {
    this.adminCenterService.getOfferMgmt().subscribe((res: any) => {
      this.getOfferMgmt = res.data;
      this.totalPages = Math.ceil(this.getOfferMgmt.length / this.pageSize);
      this.setPage(1);
    })
  }

  openModal(product: any) {
    console.log('product', product);

    const dialogRef = this.dialog.open(OfferDiscountAddOfferManagement, {
      width: '60%',
      height: 'auto',
      position: { right: '0' },
      data: {
        editData: product,
        isEdit: true
      }
    });

    // 👇 THIS IS THE IMPORTANT PART
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('Dialog closed with:', result);

      if (result === 'retaiClose') {
        console.log('success');
        this.getOfferMgmtApi();
        // this.loadSubProducts(); // refresh list / API call
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

      offerId: this.selectedProduct.offerId

    }

    this.showDeleteConfirm = false;
    // this.selectedProduct = null;
    this.adminCenterService.deleteOfferMgmt(payload).subscribe((res) => {
      console.log('res', res);
      if (res.status.code == "000000") {
        this.commonToaster.showSuccess(res.status.description);
        this.getOfferMgmtApi();
      }

    })
  }

  setPage(page: number) {
    if (page < 1 || page > this.totalPages) return;

    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedProducts = this.getOfferMgmt.slice(start, end);
  }

  get pages(): number[] {
    if (this.totalPages <= 5) {
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }

    if (this.currentPage <= 3) {
      return [1, 2, 3];
    }

    if (this.currentPage >= this.totalPages - 2) {
      return [this.totalPages - 2, this.totalPages - 1, this.totalPages];
    }

    return [
      this.currentPage - 1,
      this.currentPage,
      this.currentPage + 1
    ];
  }
}
