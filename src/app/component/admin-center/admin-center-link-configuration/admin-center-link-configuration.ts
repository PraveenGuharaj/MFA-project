import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-admin-center-link-configuration',
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './admin-center-link-configuration.html',
  styleUrl: './admin-center-link-configuration.scss',
})
export class AdminCenterLinkConfiguration {
  @Input() subProduct: boolean = false;

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

}
