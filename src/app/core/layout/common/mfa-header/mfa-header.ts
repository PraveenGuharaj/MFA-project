import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';


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

}
