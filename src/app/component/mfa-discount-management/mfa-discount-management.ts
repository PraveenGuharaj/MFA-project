import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MfaDiscountAdd } from './mfa-discount-add/mfa-discount-add';
import { MfaDiscountRenew } from './mfa-discount-renew/mfa-discount-renew';
import { MfaManagementService } from '../../shared/services/mfa-management.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MfaDiscountView } from './mfa-discount-view/mfa-discount-view';
import { MfaDiscountEdit } from './mfa-discount-edit/mfa-discount-edit';
import { MfaDiscountDelete } from './mfa-discount-delete/mfa-discount-delete';

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
  selector: 'app-mfa-discount-management',
  imports: [
    CommonModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MfaDiscountAdd,
    MfaDiscountRenew,
    MfaDiscountView,
    MfaDiscountEdit,
    MfaDiscountDelete
  ],
  templateUrl: './mfa-discount-management.html',
  styleUrl: './mfa-discount-management.scss',
})
export class MfaDiscountManagement {
  @Output() drawerState = new EventEmitter<boolean>();
  drawerMode: 'view' | 'edit' | 'add' | null = null;
  isDrawerOpen = false;
  selectedMfa: MfaItem | null = null;
  isDeleteOpen = false;
  isRenewOpen = false;
  selectedOffer: any = null;
  constructor(private router: Router, private route: ActivatedRoute, drawerService: MfaManagementService) { }

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
  rowsOptions = [5, 10, 20];

  ngOnInit() {
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
        this.onAddDiscount();
      }

      if ((action === 'edit' || action === 'view') && id !== null) {

        const index = +id;
        const item = this.mfaOffer[index];

        if (item) {
          this.selectedMfa = { ...item };
          console.log('selectedMfa', this.selectedMfa);
        } else {
          console.log('Item not found for index', index);
        }
      }


    })

  }

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

  get totalPages() {
    return Math.ceil(this.totalItems / this.pageSize);
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

  onAddDiscount() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { action: 'add' }
    });
    this.drawerMode = 'add';
    this.selectedMfa = {
      offerName: '',
      offerType: '',
      fromDate: '',
      toDate: '',
      status: 'Active',
      offeTitle: '',
      RewardType: ''
    };
    this.isDrawerOpen = true;
  }

  openDrawer() {
    console.log("Drawer OPEN triggered");
    this.isDrawerOpen = true;
    this.drawerState.emit(true);
  }

  closeDrawer() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {}
    });

    this.isDrawerOpen = false;
    this.drawerMode = null;
  }

  closeDelete() {
    this.isDeleteOpen = false;
  }

  onRenewOffer() {
    this.selectedOffer = this.mfaOffer;
    console.log('selectedOffer', this.selectedOffer)
    this.isRenewOpen = true;
  }

  closeRenew() {
    this.isRenewOpen = false;
  }

  saveRenew(updatedOffer: any) {
    const index = this.mfaOffer.findIndex(o => o.id === updatedOffer.id);
    if (index !== -1) {
      this.mfaOffer[index] = updatedOffer;
    }

    this.isRenewOpen = false;
  }

  onViewMfa(mfa: any, index: number) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { action: 'view', id: index }
    });
  }

  onEditMfa(mfa: MfaItem, index: number) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { action: 'edit', id: index }
    });
  }

  deleteMfa(id: number) {
    this.mfaOffer = this.mfaOffer.filter(m => m.id !== id);
    this.applyFilter();
    this.isDeleteOpen = false;
  }

  onDeleteMfa(mfa: MfaItem, index: number) {
    this.selectedMfa = { ...mfa };
    this.isDeleteOpen = true;
  }

  onUpdateMfa(updatedMfa: any) {
    const index = this.mfaOffer.findIndex(m => m.id === updatedMfa.id);
    if (index !== -1) {
      this.mfaOffer[index] = { ...updatedMfa };
    }

    this.applyFilter();
  }

}