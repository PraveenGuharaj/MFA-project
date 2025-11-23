import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-mfa-discount-view',
  imports: [
    CommonModule,
    FormsModule,
    MatSlideToggleModule,
    MatButtonModule
  ],
  templateUrl: './mfa-discount-view.html',
  styleUrl: './mfa-discount-view.scss',
})
export class MfaDiscountView {
  @Input() mfa: any;
  @Output() close = new EventEmitter();
}
