import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
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


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}
