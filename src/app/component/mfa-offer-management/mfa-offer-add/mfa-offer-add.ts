import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-mfa-offer-add',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule
  ],
  templateUrl: './mfa-offer-add.html',
  styleUrl: './mfa-offer-add.scss',
})
export class MfaOfferAdd {
 @Input() mfa: any;
  @Output() close = new EventEmitter<void>();
  @Output() saveMfa = new EventEmitter<any>();


   form = {
    partnerName: '',
    productName: '',
    offerTitle: '',
    offerTag: '',
    offerDescription: '',
    termsCondition: '',
    offerType: '',
    rewardType: '',
    applicableChannels: '',
    rewardValue: '',
    redemptionMethod: '',
    redemptionLimitPerUser: '',
    totalRedemptionAllowed: '',
    customerSegment: '',
    status: 'Active',
    fromDate: '',
    toDate: ''

  };

  mfaList = [
    { name: 'Amazon' },
    { name: 'PARTNER_DKB' },
  ];

  onClose() {
    this.close.emit();
  }

  save() {
    this.saveMfa.emit(this.form);
    this.close.emit();
  }
}
