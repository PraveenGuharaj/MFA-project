import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  imports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  userName: string = '';
  password: string = '';
  passwordVisible: boolean = false;  // To control the password visibility


  onSubmit() {
    // Handle form submission logic
    console.log('Form Submitted', this.userName, this.password);
  }
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
