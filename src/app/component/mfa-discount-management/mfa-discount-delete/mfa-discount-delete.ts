import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mfa-discount-delete',
  imports: [
    CommonModule, FormsModule
  ],
  templateUrl: './mfa-discount-delete.html',
  styleUrl: './mfa-discount-delete.scss',
})
export class MfaDiscountDelete {
  @Input() mfa: any;
  @Input() index!: number;
  @Output() delete = new EventEmitter<number>();

  mfaName: string = '';

  ngOnInit() {
    if (this.mfa) {
      this.mfaName = this.mfa.offerName;
    }
  }

  confirmDelete() {
  }

  onClose() {
    // close modal logic
  }
}
