import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../admin-center-service';
import { ComonPopup } from '../../../shared/comon-popup/comon-popup';
import { MatDialog } from '@angular/material/dialog';
import { AdminCenterAddBranch } from '../admin-center-add-branch/admin-center-add-branch';

@Component({
  selector: 'app-admin-center-branch-locator',
  standalone: true,
  imports: [CommonModule, MatIconModule, ComonPopup],
  templateUrl: './admin-center-branch-locator.html',
  styleUrl: './admin-center-branch-locator.scss',
})
export class AdminCenterBranchLocator implements OnInit {

  @Input() subProduct = false;

  products: any[] = [];
  pagedProducts: any[] = [];

  pageSize = 10;
  currentPage = 1;
  totalPages = 0;

  selectedProduct: any;
  showDeleteConfirm = false;

  constructor(private adminCenterService: AdminCenterService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getBranchLoactors();
  }

  getBranchLoactors() {
    this.adminCenterService.getBranchLocator().subscribe((res: any) => {
      this.products = res.data || [];
      this.totalPages = Math.ceil(this.products.length / this.pageSize);
      this.setPage(1);
    });
  }

  /* ---------------- Pagination Logic ---------------- */

  setPage(page: number) {
    if (page < 1 || page > this.totalPages) return;

    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedProducts = this.products.slice(start, end);
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

  /* ---------------- Delete Logic ---------------- */

  openDeletePopup(product: any) {
    this.selectedProduct = product;
    this.showDeleteConfirm = true;
  }

  cancelDelete() {
    this.showDeleteConfirm = false;
    this.selectedProduct = null;
  }

  confirmDelete() {
    this.showDeleteConfirm = false;

    this.adminCenterService
      .deleteBranchLocator(this.selectedProduct.branchId)
      .subscribe(() => {
        this.getBranchLoactors();
      });
  }


  openModal(product: any) {
    console.log('product', product);

    const dialogRef = this.dialog.open(AdminCenterAddBranch, {
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
        this.getBranchLoactors();
      }
    });
  }
}
