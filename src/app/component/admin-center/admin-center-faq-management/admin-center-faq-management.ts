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
}
