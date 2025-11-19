import { Component, EventEmitter, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { filter, map } from 'rxjs/operators';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-mfa-header',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatToolbarModule
  ],
  templateUrl: './mfa-header.html',
  styleUrl: './mfa-header.scss',
})
export class MfaHeader {
  parentTitle = '';
  pageTitle = '';
  constructor(private router: Router, private route: ActivatedRoute) {
    this.listenToRouteChange();
  }
  @Output() toggleSidebar = new EventEmitter<void>();

  listenToRouteChange() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let child = this.route.firstChild;
          while (child?.firstChild) {
            child = child.firstChild;
          }
          return child?.snapshot.data;
        })
      )
      .subscribe(data => {
        this.parentTitle = data?.['parent'] || '';
        this.pageTitle = data?.['title'] || '';
      });
  }
}