import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-mfa-offer-view',
  imports: [
    CommonModule,
    FormsModule,
    MatSlideToggleModule,
    MatButtonModule
  ],
  templateUrl: './mfa-offer-view.html',
  styleUrl: './mfa-offer-view.scss',
})
export class MfaOfferView {
  @Input() mfa: any;
  @Output() close = new EventEmitter();
}
