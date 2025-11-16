import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-mfa-view',
  imports: [
    CommonModule,
    FormsModule,
    MatSlideToggleModule,
    MatButtonModule],
  templateUrl: './mfa-view.html',
  styleUrl: './mfa-view.scss',
})
export class MfaView {
  @Input() mfa: any;
  @Output() close = new EventEmitter();
}
