import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AdminCenterService } from '../../admin-center/admin-center-service';


@Component({
  selector: 'app-add-manage-parameter',
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSlideToggleModule
  ],
  templateUrl: './add-manage-parameter.html',
  styleUrl: './add-manage-parameter.scss',
})
export class AddManageParameter {
  productForm!: FormGroup;

  // Dropdown Options
  channels = ["SMS", "Email", "App", "Web"];
  categories = ["Login", "Transaction", "Reset", "Verification"];
  domains = ["Banking", "Insurance", "Fintech", "Wallet"];
  blockDurations = ["30 Sec", "1 Min", "2 Min", "5 Min"];
  types = ["Primary", "Secondary", "Backup"];
  deliveryModesOptions = ["SMS", "Email", "WhatsApp", "IVR"];

  constructor(private fb: FormBuilder, private adminCenterService: AdminCenterService) {
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

  ngOnInit() {

  }


  submitForm() {
    if (this.productForm.valid) {
    } else {
      this.productForm.markAllAsTouched();
    }
  }

  closeForm() { }
}
