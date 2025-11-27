import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DbxSidebar } from '../../../core/layout/common/dbx-sidebar/dbx-sidebar';
import { DbxHeader } from '../../../core/layout/common/dbx-header/dbx-header';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    DbxSidebar,
    DbxHeader,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

}
