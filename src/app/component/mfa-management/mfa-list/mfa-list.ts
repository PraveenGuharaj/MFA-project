import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MfaEdit } from '../mfa-edit/mfa-edit';
import { MfaView } from '../mfa-view/mfa-view';
import { MfaDelete } from '../mfa-delete/mfa-delete';
import { MfaAdd } from '../mfa-add/mfa-add';
import { ActivatedRoute, Router } from '@angular/router';

interface MfaItem {
  id: number | null;
  name: string;
  type: string;
  fallCount: number | null;
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
    MfaEdit,
    MfaView,
    MfaDelete,
    MfaAdd
  ],
  templateUrl: './mfa-list.html',
  styleUrls: ['./mfa-list.scss'],
})
export class MfaList {

  drawerMode: 'view' | 'edit' | 'add' | null = null;

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

  rowsOptions = [5, 10, 20];
  pageSize = 5;
  currentPage = 1;

  isDrawerOpen = false;
  selectedMfa: MfaItem | null = null;
  isDeleteOpen = false;

  constructor(private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    const stored = localStorage.getItem('mfaList');
    if (stored) {
      this.mfaList = JSON.parse(stored);
      this.filteredList = [...this.mfaList];
    }


    this.route.queryParams.subscribe(params => {
      const action = params['action'];
      const id = params['id'];

      if (!action) {
        this.isDrawerOpen = false;
        this.drawerMode = null;
        return;
      }

      this.drawerMode = action as any;
      this.isDrawerOpen = true;

      if (action === 'add') {
        this.onAddMfa();
      }

      if ((action === 'edit' || action === 'view') && id) {
        const item = this.mfaList.find(m => m.id === +id);
        if (item) {
          this.selectedMfa = { ...item };
        }
      }
    });
  }

  saveToLocalStorage() {
    localStorage.setItem('mfaList', JSON.stringify(this.mfaList));
  }




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

  // ---------------- FILTER ----------------
  applyFilter() {
    const term = this.searchTerm.trim().toLowerCase();

    this.filteredList = term
      ? this.mfaList.filter(mfa =>
        (mfa.name ?? '').toLowerCase().includes(term) ||
        (mfa.type ?? '').toLowerCase().includes(term) ||
        (mfa.id ?? '').toString().includes(term)
      )
      : [...this.mfaList];

    this.currentPage = 1;
  }

  clearSearch() {
    this.searchTerm = '';
    this.filteredList = [...this.mfaList];
  }

  // ---------------- SORT ----------------
  onGroupByChange() {
    if (!this.groupBy) {
      this.filteredList = [...this.mfaList];
      return;
    }

    const key = this.groupBy as keyof MfaItem;

    this.filteredList = [...this.mfaList].sort((a, b) => {
      const aVal = a[key] ?? '';
      const bVal = b[key] ?? '';
      return aVal.toString().localeCompare(bVal.toString());
    });
  }

  // ---------------- DRAWERS ----------------
  onEditMfa(mfa: MfaItem) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { action: 'edit', id: mfa.id }
    });
  }


  onViewMfa(mfa: MfaItem) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { action: 'view', id: mfa.id }
    });
  }

  onAddMfa() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { action: 'add' }
    });
    this.drawerMode = 'add';
    this.selectedMfa = {
      id: null,
      name: '',
      type: '',
      fallCount: null,
      fromDate: '',
      toDate: '',
      status: 'Active'
    };
    this.isDrawerOpen = true;
  }

  closeDrawer() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {}
    });

    this.isDrawerOpen = false;
    this.drawerMode = null;
  }

  // ---------------- DELETE ----------------
  onDeleteMfa(mfa: MfaItem) {
    this.selectedMfa = { ...mfa };
    this.isDeleteOpen = true;
  }

  closeDelete() {
    this.isDeleteOpen = false;
  }

  deleteMfa(id: number) {
    this.mfaList = this.mfaList.filter(m => m.id !== id);
    this.applyFilter();
    this.saveToLocalStorage();
    this.isDeleteOpen = false;
  }

  // ---------------- PAGINATION ----------------
  onRowsChange() {
    this.currentPage = 1;
  }

  previousPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  onAddMfaSave(newData: any) {

    const newId = this.mfaList.length
      ? Math.max(...this.mfaList.map(m => m.id ?? 0)) + 1
      : 1;

    const newMfa: MfaItem = {
      id: newId,
      name: newData.mfaName,
      type: 'User Configured',
      fallCount: 0,
      fromDate: newData.fromDate,
      toDate: newData.toDate,
      status: newData.status
    };

    this.mfaList.push(newMfa);
    this.applyFilter();
    this.closeDrawer();
    this.saveToLocalStorage();
  }

  onUpdateMfa(updatedMfa: any) {
    const index = this.mfaList.findIndex(m => m.id === updatedMfa.id);
    if (index !== -1) {
      this.mfaList[index] = { ...updatedMfa };
    }

    this.applyFilter();
    this.saveToLocalStorage();
  }

}