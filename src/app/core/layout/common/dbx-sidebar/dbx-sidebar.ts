import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-dbx-sidebar',
  imports: [
      MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    CommonModule,
    MatSidenavModule,
    MatNavList,
    MatListItem,
    MatToolbarModule
  ],
  templateUrl: './dbx-sidebar.html',
  styleUrl: './dbx-sidebar.scss',
})
export class DbxSidebar {
  //  activeItem: string = ''; // To track the active menu item
  // @ViewChild('sidenav') sidenav: MatSidenav | any;
  // isExpanded = true;
  // showSubmenu: boolean = false;
  // isShowing = false;
  // showSubSubMenu: boolean = false;

  // // Set the active menu item
  // setActive(item: string) {
  //   this.activeItem = item;
  // }

  // mouseenter() {
  //   if (!this.isExpanded) {
  //     this.isShowing = true;
  //   }
  // }

  // mouseleave() {
  //   if (!this.isExpanded) {
  //     this.isShowing = false;
  //   }
  // }

  // // Toggle expandable menu (submenu)
  // toggleMenu(menu: string) {
  //   if (this.activeItem === menu) {
  //     this.activeItem = '';  // Collapse the menu if it's already active
  //   } else {
  //     this.activeItem = menu;  // Expand the menu
  //   }
  // }
  
@ViewChild('sidenav') sidenav: MatSidenav | any;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}