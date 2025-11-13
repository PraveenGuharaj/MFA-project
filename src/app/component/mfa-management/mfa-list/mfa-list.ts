import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

interface MfaItem {
  id: number;
  name: string;
  type: string;
  fallCount: number;
  fromDate: string;
  toDate: string;
  status: string;
}

@Component({
  selector: 'app-mfa-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './mfa-list.html',
  styleUrls: ['./mfa-list.scss'],
})
export class MfaList {
  displayedColumns = [
    'id',
    'name',
    'type',
    'fallCount',
    'fromDate',
    'toDate',
    'status',
    'actions',
  ];

  mfaList: MfaItem[] = [
    { id: 1, name: 'OTP1', type: 'OTP', fallCount: 10, fromDate: '2025-11-01', toDate: '2026-11-11', status: 'Active' },
    { id: 2, name: 'Secure Value 1', type: 'Secure Value', fallCount: 7, fromDate: '2025-09-01', toDate: '2026-09-11', status: 'Active' },
    { id: 3, name: 'OTP_Config_1', type: 'OTP', fallCount: 5, fromDate: '2025-10-01', toDate: '2026-10-11', status: 'Active' },
  ];

  filteredList = [...this.mfaList];
  searchTerm = '';
  groupBy = '';

  // Pagination
  rowsOptions = [5, 10, 20];
  pageSize = 5;
  currentPage = 1;

  get totalItems() {
    return this.filteredList.length;
  }

  get totalPages() {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  get startIndex() {
    return (this.currentPage - 1) * this.pageSize;
  }

  get endIndex() {
    return Math.min(this.startIndex + this.pageSize, this.totalItems);
  }

  get paginatedData() {
    return this.filteredList.slice(this.startIndex, this.endIndex);
  }

  applyFilter() {
    const term = this.searchTerm.trim().toLowerCase();
    this.filteredList = term
      ? this.mfaList.filter(
          (mfa) =>
            mfa.name.toLowerCase().includes(term) ||
            mfa.type.toLowerCase().includes(term) ||
            mfa.id.toString().includes(term)
        )
      : [...this.mfaList];
    this.currentPage = 1;
  }

  clearSearch() {
    this.searchTerm = '';
    this.filteredList = [...this.mfaList];
  }

  onGroupByChange() {
    if (!this.groupBy) {
      this.filteredList = [...this.mfaList];
    } else {
      const key = this.groupBy as keyof MfaItem;
      this.filteredList = [...this.mfaList].sort((a, b) =>
        a[key].toString().localeCompare(b[key].toString())
      );
    }
  }

  onAddMfa() {
    console.log('Add MFA clicked');
  }

  onEditMfa(mfa: MfaItem) {
    console.log('Edit MFA', mfa);
  }

  onDeleteMfa(mfa: MfaItem) {
    console.log('Delete MFA', mfa);
  }

  onRowsChange() {
    this.currentPage = 1;
  }

  previousPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }
}
