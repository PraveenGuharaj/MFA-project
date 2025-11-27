import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import necessary modules for reactive forms
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-sub-product',
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSlideToggle
  ],
  templateUrl: './dashboard-sub-product.html',
  styleUrl: './dashboard-sub-product.scss',
})
export class DashboardSubProduct {
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form with form controls and validators
    this.productForm = this.fb.group({
      productName: ['', [Validators.required]],
      subProductName: ['', Validators.required],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      eligibility: ['', [Validators.required]],
      screenName: ['', [Validators.required]],
      fees: ['', [Validators.required]],
      segmentCode: ['', [Validators.required]],
      imageURL: ['', [Validators.required]],
      channel: ['', [Validators.required]],
      imageType: ['', [Validators.required]],
      status: [''],
      specificFeatures: ['', [Validators.required]],
      pricingAndCharges: ['', [Validators.required]],
    });
  }
  submitForm() {
    if (this.productForm.valid) {
      console.log('Form Submitted:', this.productForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  closeForm() {
    console.log('Closing form');
  }
}
