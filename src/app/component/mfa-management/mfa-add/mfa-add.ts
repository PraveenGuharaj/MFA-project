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


  form = {
  mobile: '',
  email: '',
  password: '',
  mfaName: '',
    status: 'Active'

};

mfaList = [
  { name: 'Email OTP' },
  { name: 'SMS OTP' },
  { name: 'Authenticator App' }
  // or fetch from API
];

  onClose() {
    this.close.emit();
  }

  save() {
    alert('MFA Added!');
    this.close.emit();
  }

  
}
