import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import * as CryptoJS from 'crypto-js';
import { AdminCenterService } from '../admin-center-service';
import { CommonToaster } from '../../../shared/services/common-toaster';


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
  iphoneCertBase64: string = '';


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
  isEditMode = false;

  constructor(private fb: FormBuilder, private adminCenterService: AdminCenterService, private commonToaster: CommonToaster, private dialogRef: MatDialogRef<AdminCenterAddDeviceManagement>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.productForm = this.fb.group({
      production: ['', Validators.required],
      development: ['', Validators.required],
      appleCertificateWizard: ['', Validators.required],
      iphonePushCertificate: ['', Validators.required],
      certificatePassword: ['', Validators.required],
      bundleIdentifier: ['', Validators.required],
      pushCertificateYes: ['', Validators.required],
      pushCertificateNo: ['', Validators.required],
      status: ['']
    });

  }


  onFileChange(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      const base64String = reader.result as string;

      // Remove prefix: data:application/x-pkcs12;base64,
      this.iphoneCertBase64 = base64String.split(',')[1];

      console.log('Base64 Ready:', this.iphoneCertBase64);
    };

    reader.onerror = (error) => {
      console.error('File reading error:', error);
    };
  }


  encryptPassword(password: string): string {
    const secretKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAg2s7kfRh6sN4aPqKaVgjNK4Brh/5p0QD32osgkWgXm2cu+374LLhos70BdsHaVWWMOJGX8NePlxoNupO1fnB4ArCAfUKUHGO4gn9wj3QddwByTbSbyTRL4C6mme+FbpPCOuhjVJnzEUq8mYknVREQEDDHd+ha5eJqgk8E2YtrqWW651J8P9ZA9s1ZU1p0mmXS4YHNN9TnI+XxZZ3hzqfSta7OF4Hy0BxnOII7w7ke4WspBMTOWbed2kc0EhiuykwYiK+HJ+kF6JD+yHZsH+qsa7ItotWMW7oo1Uj8CqyQvQD5g+dqcSMa6LD4fbX8bzRQbStz2Qm0cKHAoOX6LYSlwIDAQAB'; // Must match backend key
    return CryptoJS.AES.encrypt(password, secretKey).toString();
  }

  submitForm() {
    const form = this.productForm.value;

    const applicationMode: string[] = [];

    if (form.production) {
      applicationMode.push('Production');
    }

    if (form.development) {
      applicationMode.push('Development');
    }

    if (form.appleCertificateWizard) {
      applicationMode.push('Apple Certificate Wizard');
    }

    const encryptedPwd = this.encryptPassword(form.certificatePassword);


    const payload = [{
      action: 'Add',
      id: null,
      applicationMode: applicationMode[0],
      bundleIdentifier: form.bundleIdentifier,
      iphoneCertPassword: encryptedPwd,
      iphoneCertFile: this.iphoneCertBase64,
      isIpadCertUploaded: form.pushCertificateYes ? 'Y' : 'N',
      status: form.status ? 'ACT' : 'IAC'
    }];

    if (this.isEditMode) {
      this.adminCenterService.updateLicense(payload).subscribe((res: any) => {
        console.log('ressss', res);

        if (res?.status.code == "000000") {
          this.commonToaster.showSuccess('Product created successfully');
          this.dialogRef.close('retaiClose');
        } else {

        }
      })
    } else {
      this.adminCenterService.createDeviceMgmt(payload).subscribe((res: any) => {
        console.log('create', res);
        if (res?.result.code == "000000") {
          this.commonToaster.showSuccess('Added Successfully');
          this.dialogRef.close('retaiClose');
          this.adminCenterService.trigger();
        }

      })
    }

    console.log('payload', payload);
  }


  closeForm() { }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
