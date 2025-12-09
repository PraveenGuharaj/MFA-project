import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-admin-center-add-configuration',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSlideToggleModule
  ],
  templateUrl: './admin-center-add-configuration.html',
  styleUrl: './admin-center-add-configuration.scss',
})
export class AdminCenterAddConfiguration {
  productForm!: FormGroup;

  // Dropdown Options
  channels = ["SMS", "Email", "App", "Web"];
  categories = ["Login", "Transaction", "Reset", "Verification"];
  domains = ["Banking", "Insurance", "Fintech", "Wallet"];
  blockDurations = ["30 Sec", "1 Min", "2 Min", "5 Min"];
  types = ["Primary", "Secondary", "Backup"];
  deliveryModesOptions = ["SMS", "Email", "WhatsApp", "IVR"];

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      channel: ['', Validators.required],
      category: ['', Validators.required],

      // Newly mapped fields
      otpLength: ['', Validators.required],
      maxAttempts: ['', Validators.required],
      otpExpiry: ['', Validators.required],
      blockDuration: ['', Validators.required],
      domain: ['', Validators.required],
      deliveryModes: [[], Validators.required], // Multiple select

      type: ['', Validators.required],
      status: [true]
    });
  }

  submitForm() {
    if (this.productForm.valid) {
      console.log("Form Submitted:", this.productForm.value);
    } else {
      this.productForm.markAllAsTouched();
    }
  }

  closeForm() {}
}
