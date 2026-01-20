import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import necessary modules for reactive forms
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { AdminCenterService } from '../../admin-center/admin-center-service';

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

  constructor(private fb: FormBuilder, private adminCenterService: AdminCenterService) {
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
    const v = this.productForm.value;

    const payload = {
      // productId: Number(v.productName), // or pass from parent selection
      productId: '184', // or pass from parent selection
      screenId: v.screenName,
      name: v.subProductName,
      description: v.description,
      priority: Number(v.priority),
      status: v.status ? 'ACT' : 'INA',
      specificFeatures: v.specificFeatures,
      pricingCharges: v.pricingAndCharges,
      activeFlag: 'Y',
      createdBy: 'Admin',

      channelIds: [Number(v.channel)],

      imagePath: [
        {
          imageType: 'Image',
          filePath: v.imageURL,
          priority: Number(v.priority),
          createdBy: 'Admin',
          channelSpecific: 'N',
          activeFlag: 'Y'
        }
      ]
    };

    console.log('FINAL PAYLOAD', payload);

    this.adminCenterService.createSubProduct(payload).subscribe({
      next: res => {
        console.log('CREATE SUCCESS', res);
        this.closeForm();
      },
      error: err => {
        console.error('CREATE FAILED', err);
      }
    });
  }


  closeForm() {
  }
}
