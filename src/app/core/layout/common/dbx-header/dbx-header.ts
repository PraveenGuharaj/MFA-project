import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dbx-header',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './dbx-header.html',
  styleUrl: './dbx-header.scss',
})
export class DbxHeader {

}
