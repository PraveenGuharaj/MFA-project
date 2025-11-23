import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@Component({
  selector: 'app-mfa-offer-edit',
  imports: [
     CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule
  ],
  templateUrl: './mfa-offer-edit.html',
  styleUrl: './mfa-offer-edit.scss',
})
export class MfaOfferEdit {
   @Input() mfa: any;
  @Output() close = new EventEmitter<void>();
  @Output() update = new EventEmitter<any>();


  ngOnInit() {
    console.log('mfa', this.mfa)
  }
  onClose() {
    this.close.emit();
  }

  save() {
    this.update.emit(this.mfa);
    this.close.emit();
  }


}
