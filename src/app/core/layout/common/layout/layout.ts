import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { MfaHeader } from '../mfa-header/mfa-header';
import { MfaSidebar } from '../mfa-sidebar/mfa-sidebar/mfa-sidebar';

@Component({
  selector: 'app-layout',
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterOutlet,
    MfaHeader,
    MfaSidebar
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
   opened = false;
   toggleSidebar() {
    this.opened = !this.opened;
  }
}
