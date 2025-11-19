import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

interface MfaItem {
  id?: number | null;
  offerName: string;
  offerType: string;
  fallCount?: number | null;
  fromDate: string;
  toDate: string;
  status: string;
  offeTitle: string;
  RewardType: string;
}

@Component({
  selector: 'app-mfa-offer-management',
  imports: [
    CommonModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule

  ],
  templateUrl: './mfa-offer-management.html',
  styleUrl: './mfa-offer-management.scss',
})
export class MfaOfferManagement {

  displayedColumns = [
    'offerName',
    'offeTitle',
    'offerType',
    'RewardType',
    'fromDate',
    'toDate',
    'status',
    'actions'
  ];

  mfaOffer: MfaItem[] = [
    { offerName: 'Amazon', offeTitle: '10% offer', offerType: 'Welcome', fromDate: '29/10/2025 13:14:00', toDate: '15/11/2025 13:14:00', status: 'Inactive', RewardType: 'Points' },
    { offerName: 'Amazon', offeTitle: 'Product4', offerType: 'Referral', fromDate: '30/10/2025 13:14:00', toDate: '15/11/2025 13:14:00', status: 'Active', RewardType: 'Points' },
    { offerName: 'PARTNER_DKB', offeTitle: 'zoho', offerType: 'Referral', fromDate: '02/10/2025 13:14:00', toDate: '15/11/2025 13:14:00', status: 'Inactive', RewardType: 'Cashback' },
    { offerName: 'PARTNER_DKB', offeTitle: 'new year', offerType: 'Referral', fromDate: '29/10/2025 13:14:00', toDate: '15/11/2025 13:14:00', status: 'Inactive', RewardType: 'Voucher' },
    { offerName: 'Amazon', offeTitle: '10% offer', offerType: 'Referral', fromDate: '29/10/2025 13:14:00', toDate: '15/11/2025 13:14:00', status: 'Active', RewardType: 'Cashback' },

  ];
  searchTerm = '';
  filteredList = [...this.mfaOffer];
  currentPage = 1;
  groupBy = '';
  pageSize = 5;


  applyFilter() {
    const term = this.searchTerm.trim().toLowerCase();

    this.filteredList = term
      ? this.mfaOffer.filter(mfa =>
        (mfa.offerName ?? '').toLowerCase().includes(term) ||
        (mfa.offerType ?? '').toLowerCase().includes(term) ||
        (mfa.id ?? '').toString().includes(term)
      )
      : [...this.mfaOffer];

    this.currentPage = 1;
  }

  onGroupByChange() {
    if (!this.groupBy) {
      this.filteredList = [...this.mfaOffer];
      return;
    }

    const key = this.groupBy as keyof MfaItem;

    this.filteredList = [...this.mfaOffer].sort((a, b) => {
      const aVal = a[key] ?? '';
      const bVal = b[key] ?? '';
      return aVal.toString().localeCompare(bVal.toString());
    });
  }

  get paginatedData() {
    return this.filteredList.slice(this.startIndex, this.endIndex);
  }

  get startIndex() {
    return (this.currentPage - 1) * this.pageSize;
  }

  get endIndex() {
    return Math.min(this.startIndex + this.pageSize, this.totalItems);
  }

  get totalItems() {
    return this.filteredList.length;
  }
}