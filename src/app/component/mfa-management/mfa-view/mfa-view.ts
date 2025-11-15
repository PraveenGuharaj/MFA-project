import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-mfa-view',
  imports: [
    CommonModule
  ],
  templateUrl: './mfa-view.html',
  styleUrl: './mfa-view.scss',
})
export class MfaView {
   @Input() mfa: any;
  @Output() close = new EventEmitter();
}
