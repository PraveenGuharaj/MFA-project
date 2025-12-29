import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';


@Component({
  selector: 'app-work-flow-add-role-management',
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  templateUrl: './work-flow-add-role-management.html',
  styleUrl: './work-flow-add-role-management.scss',
})
export class WorkFlowAddRoleManagement {
  productForm!: FormGroup;
  hierarchyList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


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
    } else {
      this.productForm.markAllAsTouched();
    }
  }

  closeForm() { }
}
