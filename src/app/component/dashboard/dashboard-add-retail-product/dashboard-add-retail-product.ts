import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import necessary modules for reactive forms
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-dashboard-add-retail-product',
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSlideToggle
  ],
  templateUrl: './dashboard-add-retail-product.html',
  styleUrl: './dashboard-add-retail-product.scss',
})
export class DashboardAddRetailProduct {
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      productName: ['', [Validators.required]],
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
    });
  }
  submitForm() {
    if (this.productForm.valid) {
    } else {
    }
  }

  closeForm() {
  }

}
