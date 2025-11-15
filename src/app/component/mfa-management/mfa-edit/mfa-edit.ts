import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  standalone: true,
  selector: 'app-mfa-edit',
  imports: [
   CommonModule,
  FormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSlideToggleModule,
  ],
  templateUrl: './mfa-edit.html',
  styleUrls: ['./mfa-edit.scss']
})
export class MfaEdit {
  @Input() mfa: any;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  save() {
    alert('Save clicked');
    this.close.emit();
  }
}
