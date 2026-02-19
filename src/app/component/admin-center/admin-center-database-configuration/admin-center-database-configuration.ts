import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../admin-center-service';
import { MatDialog } from '@angular/material/dialog';
import { AdminCenterReadyToSync } from '../admin-center-ready-to-sync/admin-center-ready-to-sync';
import { AdminCenterAddDatabase } from '../admin-center-add-database/admin-center-add-database';
import { CommonToaster } from '../../../shared/services/common-toaster';
import { ComonPopup } from '../../../shared/comon-popup/comon-popup';
@Component({
  selector: 'app-admin-center-database-configuration',
  imports: [
    CommonModule,
    MatIconModule,
    ComonPopup
  ],
  templateUrl: './admin-center-database-configuration.html',
  styleUrl: './admin-center-database-configuration.scss',
})
export class AdminCenterDatabaseConfiguration {
  @Input() subProduct: boolean = false;
  getDataBaseConfigApi: any;
  showDeleteConfirm: boolean = false;
  selectedProduct: any;
  pageSize = 10;
  currentPage = 1;
  totalPages = 0;
  pagedProducts: any[] = [];


  constructor(private adminCenterService: AdminCenterService, public dialog: MatDialog,
    private commonToaster: CommonToaster
  ) { }
  products = [
    {
      databaseType: 'PR0014',
      hostName: 'Digital Savings Account',
      port: 'بطاقت',
      databaseName: 'A convenient online savings account that allows customers...',
      userName: 'منتج بطاقة ائتمان للعملاء المميز',
      password: 'Enabled',
      encrypted: 1

    },
    {
      databaseType: 'PR0014',
      hostName: 'Digital Savings Account',
      port: 'بطاقت',
      databaseName: 'A convenient online savings account that allows customers...',
      userName: 'منتج بطاقة ائتمان للعملاء المميز',
      password: 'Enabled',
      encrypted: 1

    },
    {
      databaseType: 'PR0014',
      hostName: 'Digital Savings Account',
      port: 'بطاقت',
      databaseName: 'A convenient online savings account that allows customers...',
      userName: 'منتج بطاقة ائتمان للعملاء المميز',
      password: 'Enabled',
      encrypted: 1

    },
    {
      databaseType: 'PR0014',
      hostName: 'Digital Savings Account',
      port: 'بطاقت',
      databaseName: 'A convenient online savings account that allows customers...',
      userName: 'منتج بطاقة ائتمان للعملاء المميز',
      password: 'Enabled',
      encrypted: 1

    },
    {
      databaseType: 'PR0014',
      hostName: 'Digital Savings Account',
      port: 'بطاقت',
      databaseName: 'A convenient online savings account that allows customers...',
      userName: 'منتج بطاقة ائتمان للعملاء المميز',
      password: 'Enabled',
      encrypted: 1

    },
    {
      databaseType: 'PR0014',
      hostName: 'Digital Savings Account',
      port: 'بطاقت',
      databaseName: 'A convenient online savings account that allows customers...',
      userName: 'منتج بطاقة ائتمان للعملاء المميز',
      password: 'Enabled',
      encrypted: 1

    },
    {
      databaseType: 'PR0014',
      hostName: 'Digital Savings Account',
      port: 'بطاقت',
      databaseName: 'A convenient online savings account that allows customers...',
      userName: 'منتج بطاقة ائتمان للعملاء المميز',
      password: 'Enabled',
      encrypted: 1

    }
  ];

  ngOnInit() {
    this.getDataBaseConfig();
    this.adminCenterService.refresh$.subscribe(() => {
      console.log('Refreshing table...');
      this.getDataBaseConfig();
    });
  }

  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }

  getDataBaseConfig() {
    this.adminCenterService.getDatabaseConfig().subscribe((res: any) => {
      console.log('resssss', res)
      this.getDataBaseConfigApi = res.data;
      this.totalPages = Math.ceil(this.getDataBaseConfigApi.length / this.pageSize);
      this.setPage(1)
    })
  }

  openModal(product: any) {
    console.log('product', product);

    const dialogRef = this.dialog.open(AdminCenterAddDatabase, {
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
        this.getDataBaseConfig();
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

      id: this.selectedProduct.id,
      action: "DELETE",
    }

    this.showDeleteConfirm = false;
    // this.selectedProduct = null;
    this.adminCenterService.createDataBase(payload).subscribe((res: any) => {
      console.log('res', res);
      if (res.status.code == "000000") {
        this.commonToaster.showSuccess('Database Deleted Successfully');
        this.getDataBaseConfig();
      }

    })
  }

  setPage(page: number) {
    if (page < 1 || page > this.totalPages) return;

    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedProducts = this.getDataBaseConfigApi.slice(start, end);
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
