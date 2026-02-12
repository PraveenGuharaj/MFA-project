import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../admin-center-service';
import { MatDialog } from '@angular/material/dialog';
import { AdminCenterAddFaq } from '../admin-center-add-faq/admin-center-add-faq';
import { CommonToaster } from '../../../shared/services/common-toaster';
import { ComonPopup } from '../../../shared/comon-popup/comon-popup';
@Component({
  selector: 'app-admin-center-faq-management',
  imports: [
    CommonModule,
    MatIconModule,
    ComonPopup
  ],
  templateUrl: './admin-center-faq-management.html',
  styleUrl: './admin-center-faq-management.scss',
})
export class AdminCenterFaqManagement {
  @Input() subProduct: boolean = false;
  getFaqManagement: any;
  selectedProduct: any;
  showDeleteConfirm: boolean = false;
  currentPage = 1;
  totalPages = 0;
  pageSize = 10;
  pagedProducts: any[] = [];



  constructor(private adminCenterService: AdminCenterService, public dialog: MatDialog,
    private commonToaster: CommonToaster
  ) { }

  products = [
    {
      rowNumber: 'PR0014',
      channel: 'Digital Savings Account',
      category: 'بطاقت',
      englishQuestion: 'بطاقت',
      englishResponse: 'A convenient online savings account that allows customers...',
      arabicQuestion: 'Y',
      arabicResponse: 29

    },
    {
      rowNumber: 'PR0014',
      channel: 'Digital Savings Account',
      category: 'بطاقت',
      englishQuestion: 'بطاقت',
      englishResponse: 'A convenient online savings account that allows customers...',
      arabicQuestion: 'Y',
      arabicResponse: 30

    },
    {
      rowNumber: 'PR0014',
      channel: 'Digital Savings Account',
      category: 'بطاقت',
      englishQuestion: 'بطاقت',
      englishResponse: 'A convenient online savings account that allows customers...',
      arabicQuestion: 'N',
      arabicResponse: 20

    },
    {
      rowNumber: 'PR0014',
      channel: 'Digital Savings Account',
      category: 'بطاقت',
      englishQuestion: 'بطاقت',
      englishResponse: 'A convenient online savings account that allows customers...',
      arabicQuestion: 'Y',
      arabicResponse: 29

    },
    {
      rowNumber: 'PR0014',
      channel: 'Digital Savings Account',
      category: 'بطاقت',
      englishQuestion: 'بطاقت',
      englishResponse: 'A convenient online savings account that allows customers...',
      arabicQuestion: 'Y',
      arabicResponse: 29

    },
    {
      rowNumber: 'PR0014',
      channel: 'Digital Savings Account',
      category: 'بطاقت',
      englishQuestion: 'بطاقت',
      englishResponse: 'A convenient online savings account that allows customers...',
      arabicQuestion: 'N',
      arabicResponse: 29

    },
    {
      rowNumber: 'PR0014',
      channel: 'Digital Savings Account',
      category: 'بطاقت',
      englishQuestion: 'بطاقت',
      englishResponse: 'A convenient online savings account that allows customers...',
      arabicQuestion: 'Y',
      arabicResponse: 29

    }
  ];

  ngOnInit() {
    this.getFaqManagementApi();
    this.adminCenterService.refresh$.subscribe(() => {
      console.log('Refreshing table...');
      this.getFaqManagementApi();
    });
  }

  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }

  getFaqManagementApi() {
    this.adminCenterService.getFaqManagement().subscribe((res: any) => {
      this.getFaqManagement = res.data;
      console.log('getFaqManagement', this.getFaqManagement);
      this.totalPages = Math.ceil(this.getFaqManagement.length / this.pageSize);
      this.setPage(1);

    })
  }

  openModal(product: any) {
    console.log('product', product);

    const dialogRef = this.dialog.open(AdminCenterAddFaq, {
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
        this.getFaqManagementApi();
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
      faqId: this.selectedProduct.faqId
    }

    this.showDeleteConfirm = false;
    // this.selectedProduct = null;
    this.adminCenterService.deleteFaq(payload).subscribe((res) => {
      console.log('res', res);
      if (res.status.code == "000000") {
        this.commonToaster.showSuccess(res.status.description);
        this.getFaqManagementApi();
      }

    })
  }

  setPage(page: number) {
    if (page < 1 || page > this.totalPages) return;

    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedProducts = this.getFaqManagement.slice(start, end);
  }

  get pages(): number[] {
    if (this.totalPages <= 5) {
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }

    if (this.currentPage <= 3) {
      return [1, 2, 3];
    }

    if (this.currentPage >= this.totalPages - 2) {
      return [this.totalPages - 2, this.totalPages - 1, this.totalPages];
    }

    return [
      this.currentPage - 1,
      this.currentPage,
      this.currentPage + 1
    ];
  }
}
