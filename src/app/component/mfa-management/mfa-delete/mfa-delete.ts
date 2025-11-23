import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-mfa-delete',
  imports: [CommonModule, FormsModule],
  templateUrl: './mfa-delete.html',
  styleUrls: ['./mfa-delete.scss']
})
export class MfaDelete {
  @Input() mfa: any | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() delete = new EventEmitter<number>();

  mfaName: string = '';


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
