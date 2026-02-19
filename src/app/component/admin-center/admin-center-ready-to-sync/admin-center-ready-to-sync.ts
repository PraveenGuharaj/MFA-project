import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../admin-center-service';
import { MatDialog } from '@angular/material/dialog';
import { AdminCenterAddTableMigration } from '../admin-center-add-table-migration/admin-center-add-table-migration';
import { ComonPopup } from '../../../shared/comon-popup/comon-popup';
import { CommonToaster } from '../../../shared/services/common-toaster';

@Component({
  selector: 'app-admin-center-ready-to-sync',
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    ComonPopup
  ],
  templateUrl: './admin-center-ready-to-sync.html',
  styleUrl: './admin-center-ready-to-sync.scss',
})
export class AdminCenterReadyToSync {
  @Input() subProduct: boolean = false;
  getReadyToSyncApi: any;
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
      syncTable: 'PR0014',
      syncMigration: 'Digital Savings Account',
      migrationDate: 'بطاقت',
      migrationStatus: 'بطاقت',
      syncDate: 'A convenient online savings account that allows customers...',
      syncStatus: 'Y',
      id: 29,
      priority: 1

    },
    {
      syncTable: 'PR0014',
      syncMigration: 'Digital Savings Account',
      migrationDate: 'بطاقت',
      migrationStatus: 'بطاقت',
      syncDate: 'A convenient online savings account that allows customers...',
      syncStatus: 'Y',
      id: 30,
      priority: 1

    },
    {
      syncTable: 'PR0014',
      syncMigration: 'Digital Savings Account',
      migrationDate: 'بطاقت',
      migrationStatus: 'بطاقت',
      syncDate: 'A convenient online savings account that allows customers...',
      syncStatus: 'N',
      id: 20,
      priority: 1

    },
    {
      syncTable: 'PR0014',
      syncMigration: 'Digital Savings Account',
      migrationDate: 'بطاقت',
      migrationStatus: 'بطاقت',
      syncDate: 'A convenient online savings account that allows customers...',
      syncStatus: 'Y',
      id: 29,
      priority: 1

    },
    {
      syncTable: 'PR0014',
      syncMigration: 'Digital Savings Account',
      migrationDate: 'بطاقت',
      migrationStatus: 'بطاقت',
      syncDate: 'A convenient online savings account that allows customers...',
      syncStatus: 'Y',
      id: 29,
      priority: 1

    },
    {
      syncTable: 'PR0014',
      syncMigration: 'Digital Savings Account',
      migrationDate: 'بطاقت',
      migrationStatus: 'بطاقت',
      syncDate: 'A convenient online savings account that allows customers...',
      syncStatus: 'N',
      id: 29,
      priority: 1

    },
    {
      syncTable: 'PR0014',
      syncMigration: 'Digital Savings Account',
      migrationDate: 'بطاقت',
      migrationStatus: 'بطاقت',
      syncDate: 'A convenient online savings account that allows customers...',
      syncStatus: 'Y',
      id: 29,
      priority: 1

    }
  ];

  searchQuery: string = '';
  syncStatusFilter: string = '';
  filteredProducts = this.products;
  sortAscending: boolean = true;

  ngOnInit() {
    this.getReadyToSync();
    this.adminCenterService.refresh$.subscribe(() => {
      console.log('Refreshing table...');
      this.getReadyToSync();
    });
  }

  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }

  onSearchChange() {
    this.filterProducts();
  }

  onFilterChange() {
    this.filterProducts();
  }

  filterProducts() {
    console.log('filter is comming')
    this.filteredProducts = this.products.filter(product => {
      const matchesSearch = product.syncTable.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        product.syncMigration.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        product.migrationDate.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        product.migrationStatus.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        product.syncDate.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        product.syncStatus.toLowerCase().includes(this.searchQuery.toLowerCase());


      const matchesSyncStatus = this.syncStatusFilter ? product.syncStatus === this.syncStatusFilter : true;
      console.log('matchesSearch', matchesSearch);

      return matchesSearch && matchesSyncStatus;
    });
  }

  sortData() {
    this.sortAscending = !this.sortAscending; // Toggle sort direction
    this.filteredProducts = this.filteredProducts.sort((a, b) => {
      if (a.syncMigration < b.syncMigration) {
        return this.sortAscending ? -1 : 1;
      }
      if (a.syncMigration > b.syncMigration) {
        return this.sortAscending ? 1 : -1;
      }
      return 0;
    });
  }

  getReadyToSync() {
    this.adminCenterService.getReadyToSync().subscribe((res: any) => {
      this.getReadyToSyncApi = res.data.tablesData;
      this.totalPages = Math.ceil(this.getReadyToSyncApi.length / this.pageSize);
      this.setPage(1)
    })
  }

  openModal(product: any) {
    console.log('product', product);

    const dialogRef = this.dialog.open(AdminCenterAddTableMigration, {
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
        this.getReadyToSyncApi();
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
      tableName: this.selectedProduct.synTable,
      syncMigration: this.selectedProduct.syncmigration,
      migrationStatus: '',
      synStatus: '',
      action: "DELETE",
      id: this.selectedProduct.id
    }

    this.showDeleteConfirm = false;
    // this.selectedProduct = null;
    this.adminCenterService.deleteReadyToSync(payload).subscribe((res: any) => {
      console.log('res', res);
      if (res.status.code == "000000") {
        this.commonToaster.showSuccess('Sync Table Deleted Successfully');
        this.getReadyToSync();
      }

    })
  }

  setPage(page: number) {
    if (page < 1 || page > this.totalPages) return;

    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedProducts = this.getReadyToSyncApi.slice(start, end);
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