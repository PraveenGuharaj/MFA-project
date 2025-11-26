import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
    constructor(private router: Router) {}  // Inject Router

 userName: string = '';
  password: string = '';
  passwordVisible: boolean = false;  
  isOtpScreen: boolean = false;      
    isQrScreen: boolean = false;      // To toggle between login and QR code screen
     isSidebarOpen: boolean = false;

  otp: string[] = ['', '', '', '', '']; 
  otpTimer: number = 60;  


 onSubmit() {
    // After successful login, show OTP screen
    this.isOtpScreen = true;
    this.startOtpTimer();
  }
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
   startOtpTimer() {
    const interval = setInterval(() => {
      if (this.otpTimer > 0) {
        this.otpTimer--;
      } else {
        clearInterval(interval);
      }
    }, 1000);
  }

  verifyOtp() {
    // Add OTP verification logic here
    console.log('OTP Submitted:', this.otp.join(''));
      this.router.navigate(['/dashboard']);
    
    // Assuming OTP is valid, reset or handle further
  }

   resendOtp() {
    this.otpTimer = 60; // Reset timer
    this.startOtpTimer();
    console.log('OTP resent');
  }

   // Show QR code screen
  showQrCode() {
    this.isQrScreen = true;
    this.isOtpScreen = false;  // Hide OTP screen
    
  }
}
