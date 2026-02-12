import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../admin-center-service';
@Component({
  selector: 'app-admin-center-faq-management',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './admin-center-faq-management.html',
  styleUrl: './admin-center-faq-management.scss',
})
export class AdminCenterFaqManagement {
  @Input() subProduct: boolean = false;
  getFaqManagement: any;

  constructor(private adminCenterService: AdminCenterService) { }

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
}
