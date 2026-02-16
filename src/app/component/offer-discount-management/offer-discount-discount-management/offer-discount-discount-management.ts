import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../../admin-center/admin-center-service';

@Component({
  selector: 'app-offer-discount-discount-management',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './offer-discount-discount-management.html',
  styleUrl: './offer-discount-discount-management.scss',
})
export class OfferDiscountDiscountManagement {
  @Input() subProduct: boolean = false;
  getDiscountMgmt: any;

  constructor(private adminCenterService: AdminCenterService) { }

  ngOnInit() {
    this.getDiscountMgmtAPi();
  }


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }

  getDiscountMgmtAPi() {
    this.adminCenterService.getDiscountMgmt().subscribe((res: any) => {
      this.getDiscountMgmt = res.data;
    })
  }
}