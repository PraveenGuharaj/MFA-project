import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../admin-center-service';
import { MatDialog } from '@angular/material/dialog';
import { AdminCenterAddProduct } from '../admin-center-add-product/admin-center-add-product';
import { CommonToaster } from '../../../shared/services/common-toaster';
import { ComonPopup } from '../../../shared/comon-popup/comon-popup';

@Component({
  selector: 'app-admin-center-product',
  imports: [
    CommonModule,
    MatIconModule,
    ComonPopup
  ],
  templateUrl: './admin-center-product.html',
  styleUrl: './admin-center-product.scss',
})
export class AdminCenterProduct {
  @Input() subProduct: boolean = false;
  getProductData: any;
  selectedProduct: any;
  showDeleteConfirm: boolean = false;
  pageSize = 10;
  currentPage = 1;
  totalPages = 0;
  pagedProducts: any[] = [];

  constructor(private adminCenterService: AdminCenterService, public dialog: MatDialog,
    private commonToaster: CommonToaster
  ) { }

  products = [
    {
      productCode: 'PR0014',
      productNameEnglish: 'Digital Savings Account',
      productNameArabic: 'بطاقت',
      productDescriptionEnglish: 'A convenient online savings account that allows customers...',
      productDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
      status: 'Enabled',
      priority: 1

    },
    {
      productCode: 'PR0014',
      productNameEnglish: 'Digital Savings Account',
      productNameArabic: 'بطاقت',
      productDescriptionEnglish: 'A convenient online savings account that allows customers...',
      productDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
      status: 'Enabled',
      priority: 1

    },
    {
      productCode: 'PR0014',
      productNameEnglish: 'Digital Savings Account',
      productNameArabic: 'بطاقت',
      productDescriptionEnglish: 'A convenient online savings account that allows customers...',
      productDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
      status: 'Enabled',
      priority: 1

    },
    {
      productCode: 'PR0014',
      productNameEnglish: 'Digital Savings Account',
      productNameArabic: 'بطاقت',
      productDescriptionEnglish: 'A convenient online savings account that allows customers...',
      productDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
      status: 'Enabled',
      priority: 1

    },
    {
      productCode: 'PR0014',
      productNameEnglish: 'Digital Savings Account',
      productNameArabic: 'بطاقت',
      productDescriptionEnglish: 'A convenient online savings account that allows customers...',
      productDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
      status: 'Enabled',
      priority: 1

    },
    {
      productCode: 'PR0014',
      productNameEnglish: 'Digital Savings Account',
      productNameArabic: 'بطاقت',
      productDescriptionEnglish: 'A convenient online savings account that allows customers...',
      productDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
      status: 'Enabled',
      priority: 1

    },
    {
      productCode: 'PR0014',
      productNameEnglish: 'Digital Savings Account',
      productNameArabic: 'بطاقت',
      productDescriptionEnglish: 'A convenient online savings account that allows customers...',
      productDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
      status: 'Enabled',
      priority: 1

    }
  ];

  ngOnInit() {
    this.getProductApi();
    this.adminCenterService.refresh$.subscribe(() => {
      console.log('Refreshing table...');
      this.getProductApi();
    });
  }

  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }

  getProductApi() {
    this.adminCenterService.getProduct().subscribe((res: any) => {
      console.log('getproduct', res);
      this.getProductData = res.data;
      this.totalPages = Math.ceil(this.getProductData.length / this.pageSize);
      this.setPage(1)
    })
  }

  openModal(product: any) {
    console.log('product', product);

    const dialogRef = this.dialog.open(AdminCenterAddProduct, {
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
        this.getProductApi();
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

      id: this.selectedProduct.id,
      action: "DELETE",

    }

    this.showDeleteConfirm = false;
    // this.selectedProduct = null;
    this.adminCenterService.deleteProduct(payload).subscribe((res) => {
      console.log('res', res);
      if (res.status.code == "000000") {
        this.commonToaster.showSuccess('Product License Deleted Successfully');
        this.getProductApi();
      }

    })
  }

  setPage(page: number) {
    if (page < 1 || page > this.totalPages) return;

    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedProducts = this.getProductData.slice(start, end);
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
