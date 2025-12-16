import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-admin-center-ready-to-sync',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './admin-center-ready-to-sync.html',
  styleUrl: './admin-center-ready-to-sync.scss',
})
export class AdminCenterReadyToSync {
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


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}