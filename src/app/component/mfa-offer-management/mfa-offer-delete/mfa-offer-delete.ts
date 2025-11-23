import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mfa-offer-delete',
  imports: [
    CommonModule, FormsModule
  ],
  templateUrl: './mfa-offer-delete.html',
  styleUrl: './mfa-offer-delete.scss',
})
export class MfaOfferDelete {
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
    console.log("Deleting:", {
      id: this.mfa?.id,
      name: this.mfaName
    });
  }

  onClose() {
    // close modal logic
  }
}
