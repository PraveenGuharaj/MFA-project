import { CommonModule } from '@angular/common';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule,MatTableDataSource  } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule,MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-mfa-list',
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatTooltipModule,
    FormsModule,
     MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './mfa-list.html',
  styleUrl: './mfa-list.scss',
})
export class MfaList {
 displayedColumns: string[] = [
    'id',
    'name',
    'type',
    'fallCount',
    'fromDate',
    'toDate',
    'status',
    'actions',
  ];

  mfaList: any[] = [
    {
      id: 1,
      name: 'OTP1',
      type: 'OTP',
      fallCount: 10,
      fromDate: '2025-11-01',
      toDate: '2026-11-11',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Secure Value 1',
      type: 'Secure Value',
      fallCount: 7,
      fromDate: '2025-09-01',
      toDate: '2026-09-11',
      status: 'Inactive',
    },
    {
      id: 3,
      name: 'OTP_Config_1',
      type: 'OTP',
      fallCount: 5,
      fromDate: '2025-10-01',
      toDate: '2026-10-11',
      status: 'Active',
    },
  ];

    filteredList = [...this.mfaList];
    searchTerm = '';
    groupBy = '';

    applyFilter() {
      const term = this.searchTerm.trim().toLowerCase();
      if (!term) {
        this.filteredList = [...this.mfaList];
        return;
      }

      this.filteredList = this.mfaList.filter(
        (mfa) =>
          mfa.name.toLowerCase().includes(term) ||
          mfa.type.toLowerCase().includes(term) ||
          mfa.id.toString().includes(term)
      );
    }

    clearSearch() {
      this.searchTerm = '';
      this.filteredList = [...this.mfaList];
    }

    onGroupByChange() {
      if (!this.groupBy) {
        this.filteredList = [...this.mfaList];
        return;
      }

      this.filteredList = [...this.mfaList].sort((a, b) =>
        a[this.groupBy].localeCompare(b[this.groupBy])
      );
    }

    onAddMfa() {
      console.log('Add MFA clicked');
    }

    onEditMfa(mfa: any) {
      console.log('Edit MFA', mfa);
    }

    onDeleteMfa(mfa: any) {
      console.log('Delete MFA', mfa);
    }
}
