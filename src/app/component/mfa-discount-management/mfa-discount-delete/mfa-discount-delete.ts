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
  @Input() mfa: any | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() delete = new EventEmitter<number>();

  // local editable copy for name (so we don't mutate original until confirm)
  mfaName: string = '';

  // whenever input changes, sync name

  ngOnInit() {
    console.log('mfa', this.mfa)
  }
  ngOnChanges(): void {
    this.mfaName = this.mfa?.name ?? '';
  }

  onClose() {
    this.close.emit();
  }

  confirmDelete() {
    // emit the id; if needed, you could also emit the edited name
    if (this.mfa && typeof this.mfa.id !== 'undefined') {
      this.delete.emit(this.mfa.id);
    } else {
      this.close.emit();
    }
  }
}
