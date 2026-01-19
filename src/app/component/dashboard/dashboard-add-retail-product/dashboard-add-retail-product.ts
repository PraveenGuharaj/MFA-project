import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import necessary modules for reactive forms
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { AdminCenterService } from '../../admin-center/admin-center-service';

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

  constructor(private fb: FormBuilder, private adminCenterService: AdminCenterService) {
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
  // submitForm() {
  //   if (this.productForm.valid) {
  //   } else {
  //   }
  // }

  closeForm() {
  }


  submitForm() {
    // if (this.productForm.invalid) return;

    const v = this.productForm.value;

    const payload = {
      categoryId: Number(v.category),
      code: `PROD${Date.now()}`,
      name: v.productName,
      description: v.description,
      priority: Number(v.priority),
      status: v.status ? 'ACT' : 'INACT',
      segmentId: v.segmentCode ? Number(v.segmentCode) : null,
      screenId: v.screenName || '',
      eligibilityCriteria: v.eligibility || '',
      feesCharges: v.fees || '',
      channelIds: [Number(v.channel)],
      images: [
        {
          imageType: v.imageType || 'Image',
          filePath: v.imageURL,
          channelSpecific: 'N',
          priority: 1,
          activeFlag: 'Y'
        }
      ]
    };

    console.log('CREATE PAYLOAD ', payload);

    this.adminCenterService.createProduct(payload).subscribe({
      next: res => {
        console.log('SUCCESS', res);
        this.closeForm();
      },
      error: err => {
        console.error('BACKEND ERROR ', err.error);
      }
    });
  }



}
