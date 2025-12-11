import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-admin-center-add-device-management',
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatCheckboxModule
  ],
  templateUrl: './admin-center-add-device-management.html',
  styleUrl: './admin-center-add-device-management.scss',
})
export class AdminCenterAddDeviceManagement {
  productForm!: FormGroup;

  // Dropdown Options
  channels = ["SMS", "Email", "App", "Web"];
  categories = ["Login", "Transaction", "Reset", "Verification"];
  domains = ["Banking", "Insurance", "Fintech", "Wallet"];
  blockDurations = ["30 Sec", "1 Min", "2 Min", "5 Min"];
  types = ["Primary", "Secondary", "Backup"];
  deliveryModesOptions = ["SMS", "Email", "WhatsApp", "IVR"];
  countries = ['India', 'UAE', 'Qatar'];
  cities = ['Delhi', 'Mumbai', 'Dubai', 'Doha'];
  showPassword: boolean = false;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      atmCode: [''],
      atmName: [''],
      fullAddress: [''],
      shortAddress: [''],

      country: [''],
      city: [''],
      latitude: [''],
      longitude: [''],
      timing: [''],
      workingHours: [''],

      // checkboxes
      cashDispenser: [false],
      recycler: [false],
      cdm: [false],
      chequeDM: [false],

      ramp: [false],
      wheelchair: [false],

      inr: [false],
      qar: [false],
      aed: [false],
      usd: [false],

      feature1: [false],
      feature2: [false],
      feature3: [false],
      feature4: [false],

      status: [true]
    });

  }

  submitForm() {
    if (this.productForm.valid) {
    } else {
      this.productForm.markAllAsTouched();
    }
  }

  closeForm() { }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
