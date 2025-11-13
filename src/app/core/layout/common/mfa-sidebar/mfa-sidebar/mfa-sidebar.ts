import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-mfa-sidebar',
  imports: [
   CommonModule,
    MatListModule,
    MatIconModule    
  ],
  templateUrl: './mfa-sidebar.html',
  styleUrl: './mfa-sidebar.scss',
})
export class MfaSidebar {

}
