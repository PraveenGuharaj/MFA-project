import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  standalone: true,
  selector: 'app-mfa-add',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule
  ],
  templateUrl: './mfa-add.html',
  styleUrls: ['./mfa-add.scss']
})
export class MfaAdd {
  @Input() mfa: any;
  @Output() close = new EventEmitter<void>();
  @Output() saveMfa = new EventEmitter<any>();


  form = {
    mobile: '',
    email: '',
    password: '',
    mfaName: '',
    status: 'Active',
    fromDate: '',
    toDate: ''

  };

  mfaList = [
    { name: 'Email OTP' },
    { name: 'SMS OTP' },
    { name: 'Authenticator App' }
  ];

  onClose() {
    this.close.emit();
  }

  save() {
    this.saveMfa.emit(this.form);
    this.close.emit();
  }
}