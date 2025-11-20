import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { MfaHeader } from '../mfa-header/mfa-header';
import { MfaSidebar } from '../mfa-sidebar/mfa-sidebar/mfa-sidebar';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterOutlet,
    MfaHeader,
    MfaSidebar
  ],
  templateUrl: './layout.html',
  styleUrls: ['./layout.scss']
})
export class Layout {
  isDrawerOpen: boolean = false;
  private childDrawerSub?: Subscription;

  onChildActivate(component: any) {
    if (this.childDrawerSub) {
      this.childDrawerSub.unsubscribe();
    }

    if (component.drawerState && component.drawerState.subscribe) {
      this.childDrawerSub = component.drawerState.subscribe((state: boolean) => {
        this.isDrawerOpen = state;
      });
    }
  }
}
