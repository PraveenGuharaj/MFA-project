import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MfaHeader } from '../../../core/layout/common/mfa-header/mfa-header';

@Component({
  selector: 'app-mfa-list',
  imports: [CommonModule,MfaHeader],
  templateUrl: './mfa-list.html',
  styleUrl: './mfa-list.scss',
})
export class MfaList {
  ngOnInit() {
    console.log('mfa list works')
  }
}
