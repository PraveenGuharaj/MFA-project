import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-merchant-list',
  imports: [
    CommonModule, MatIconModule, MatButtonModule, FormsModule
  ],
  templateUrl: './merchant-list.html',
  styleUrl: './merchant-list.scss',
})
export class MerchantList {
  statusFilter = 'All Status';

  merchants = [
    {
      name: 'Nike Store',
      email: 'contact@nike.com',
      phone: '+1 234 567 8900',
      category: 'Sports & Fitness',
      offers: 12,
      status: 'Active',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg'
    },
    {
      name: 'Apple Store',
      email: 'support@apple.com',
      phone: '+1 234 567 8901',
      category: 'Electronics',
      offers: 8,
      status: 'Active',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'
    },
    {
      name: 'Starbucks',
      email: 'hello@starbucks.com',
      phone: '+1 234 567 8902',
      category: 'Food & Beverage',
      offers: 15,
      status: 'Active',
      logo: 'https://upload.wikimedia.org/wikipedia/sco/d/d3/Starbucks_Corporation_Logo_2011.svg'
    },
    {
      name: 'Amazon',
      email: 'info@amazon.com',
      phone: '+1 234 567 8903',
      category: 'E-commerce',
      offers: 25,
      status: 'Inactive',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
    }
  ];


}