import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Layout } from '../../../core/layout/common/layout/layout';

@Component({
  selector: 'app-mfa-list',
  imports: [CommonModule,Layout],
  templateUrl: './mfa-list.html',
  styleUrl: './mfa-list.scss',
})
export class MfaList {
  ngOnInit() {
    console.log('mfa list works')
  }
}
