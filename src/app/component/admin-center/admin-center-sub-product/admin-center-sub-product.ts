import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../admin-center-service';
import { MatDialog } from '@angular/material/dialog';
import { AdminCenterAddSubProduct } from '../admin-center-add-sub-product/admin-center-add-sub-product';
import { DashboardSubProduct } from '../../dashboard/dashboard-sub-product/dashboard-sub-product';
import { ComonPopup } from '../../../shared/comon-popup/comon-popup';

@Component({
  selector: 'app-admin-center-sub-product',
  imports: [
    CommonModule,
    MatIconModule,
    ComonPopup
  ],
  templateUrl: './admin-center-sub-product.html',
  styleUrl: './admin-center-sub-product.scss',
})
export class AdminCenterSubProduct {
  @Input() subProduct: boolean = false;
  products: any;
  selectedProduct: any;
  showDeleteConfirm: boolean = false;
  pageSize = 10;
  currentPage = 1;
  totalPages = 0;
  pagedProducts: any[] = [];

  constructor(private adminCenterService: AdminCenterService, public dialog: MatDialog) { }
  ngOnInit(): void {
    console.log('getproduct');

    this.getProducts();
  }



  //  openModal(product: any) {
  //     console.log('product', product);

  //     this.dialog.open(DashboardSubProduct, {
  //       width: '60%',  // Adjust width as needed
  //       height: 'auto',
  //       position: {
  //         right: '0',  // Ensure it opens on the right
  //       },
  //       data: {
  //         editData: product,
  //         isEdit: true
  //       },
  //     });

  //   }



  openModal(product: any) {
    console.log('product', product);

    const dialogRef = this.dialog.open(DashboardSubProduct, {
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

      if (result === 'SUCCESS') {
        console.log('success');
        this.getProducts();
        // this.loadSubProducts(); // 🔥 refresh list / API call
      }
    });
  }

  openDeletePopup(product: any) {
    this.selectedProduct = product;
    this.showDeleteConfirm = true;
  }

  getProducts() {
    this.adminCenterService.getAllSubProducts().subscribe({
      next: (res: any) => {
        console.log('res', res);
        this.products = res.data;
        this.totalPages = Math.ceil(this.products.length / this.pageSize);
        this.setPage(1)
      },
      error: (err) => {
        console.error('API Error:', err);
      }
    });
  }

  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }

  cancelDelete() {
    this.showDeleteConfirm = false;
    this.selectedProduct = null;
  }

  confirmDelete() {
    console.log('Deleting product:', this.selectedProduct);
    const deleteString = this.selectedProduct.subProductId.toString();
    this.showDeleteConfirm = false;
    // this.selectedProduct = null;
    this.adminCenterService.deleteSubProduct(deleteString).subscribe((res) => {
      console.log('res', res);
      if (res.status.code == '000000') {
        this.getProducts();
      }
    })
  }

  setPage(page: number) {
    if (page < 1 || page > this.totalPages) return;

    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedProducts = this.products.slice(start, end);
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