import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mfa-offer-renew',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mfa-offer-renew.html',
  styleUrls: ['./mfa-offer-renew.scss']
})
export class MfaOfferRenew {
  @Input() offer: any;
  @Output() close = new EventEmitter<void>();
  @Output() renew = new EventEmitter<any>();

  fromDate: string = '';
  toDate: string = '';

  ngOnChanges() {
    if (this.offer) {
      this.fromDate = this.toDatetimeLocal(this.offer.fromDate);
      this.toDate = this.toDatetimeLocal(this.offer.toDate);
    }
  }

  /** Convert DD/MM/YYYY HH:mm:ss → yyyy-MM-ddTHH:mm */
  toDatetimeLocal(v: string): string {
    if (!v) return '';

    try {
      // Split into date + time
      const [datePart, timePart] = v.split(' ');
      if (!datePart || !timePart) return '';

      const [dd, mm, yyyy] = datePart.split('/');
      const [hh, mi] = timePart.split(':');

      return `${yyyy}-${mm}-${dd}T${hh}:${mi}`;
    } catch {
      return '';
    }
  }

  /** Convert yyyy-MM-ddTHH:mm back → DD/MM/YYYY HH:mm:ss */
  toDisplayFormat(v: string): string {
    if (!v) return '';

    const d = new Date(v);
    if (isNaN(d.getTime())) return '';

    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yyyy = d.getFullYear();

    const hh = String(d.getHours()).padStart(2, '0');
    const mi = String(d.getMinutes()).padStart(2, '0');

    return `${dd}/${mm}/${yyyy} ${hh}:${mi}:00`;
  }

  update() {
    this.renew.emit({
      id: this.offer.id,
      fromDate: this.toDisplayFormat(this.fromDate),
      toDate: this.toDisplayFormat(this.toDate)
    });
  }
}
