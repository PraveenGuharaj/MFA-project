import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../admin-center-service';
import { ComonPopup } from '../../../shared/comon-popup/comon-popup';
import { MatDialog } from '@angular/material/dialog';
import { AdminCenterAddLinkConfiguration } from '../admin-center-add-link-configuration/admin-center-add-link-configuration';
import { CommonToaster } from '../../../shared/services/common-toaster';

@Component({
  selector: 'app-admin-center-link-configuration',
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    ComonPopup
  ],
  templateUrl: './admin-center-link-configuration.html',
  styleUrl: './admin-center-link-configuration.scss',
})
export class AdminCenterLinkConfiguration {
  @Input() subProduct: boolean = false;
  getLinkConfig: any;
  baseImageUrl = 'https://yourdomain.com/uploads/';
  showDeleteConfirm: boolean = false;
  selectedProduct: any;
  pageSize = 10;
  currentPage = 1;
  totalPages = 0;
  pagedProducts: any[] = [];

  constructor(private adminCenterService: AdminCenterService, public dialog: MatDialog,
    private commonToaster: CommonToaster
  ) { }

  ngOnInit() {
    this.getLinkConfigApi();
    this.adminCenterService.refresh$.subscribe(() => {
      console.log('Refreshing table...');
      this.getLinkConfigApi();
    });
  }

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

  getLinkConfigApi() {
    this.adminCenterService.getLinkConfig().subscribe((res: any) => {
      this.getLinkConfig = res.data;
      this.totalPages = Math.ceil(this.getLinkConfig.length / this.pageSize);
      this.setPage(1)
    })
  }

  getImageUrl(imageName: string): string {
    return this.baseImageUrl + imageName;
  }

  openModal(product: any) {
    console.log('product', product);

    const dialogRef = this.dialog.open(AdminCenterAddLinkConfiguration, {
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
        this.getLinkConfigApi();
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
      followUsId: this.selectedProduct.followUsId
    }

    this.showDeleteConfirm = false;
    // this.selectedProduct = null;
    this.adminCenterService.deleteLinkConfig(payload).subscribe((res) => {
      console.log('res', res);
      if (res.status.code == "000000") {
        this.commonToaster.showSuccess(res.status.description);
        this.getLinkConfigApi();
      }

    })
  }


  setPage(page: number) {
    if (page < 1 || page > this.totalPages) return;

    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedProducts = this.getLinkConfig.slice(start, end);
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
