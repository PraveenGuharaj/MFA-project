import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DbxSidebar } from '../../../core/layout/common/dbx-sidebar/dbx-sidebar';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,
    DbxSidebar
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

}
