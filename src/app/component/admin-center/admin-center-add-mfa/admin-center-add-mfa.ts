import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AdminCenterService } from '../admin-center-service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonToaster } from '../../../shared/services/common-toaster';


@Component({
  selector: 'app-admin-center-add-mfa',
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatCheckboxModule
  ],
  templateUrl: './admin-center-add-mfa.html',
  styleUrl: './admin-center-add-mfa.scss',
})
export class AdminCenterAddMfa {
  productForm!: FormGroup;
  isEditMode = false;

  // Dropdown Options
  channels = ["SMS", "Email", "App", "Web"];
  categories = ["Login", "Transaction", "Reset", "Verification"];
  domains = ["Banking", "Insurance", "Fintech", "Wallet"];
  blockDurations = ["30 Sec", "1 Min", "2 Min", "5 Min"];
  types = ["Primary", "Secondary", "Backup"];
  deliveryModesOptions = ["SMS", "Email", "WhatsApp", "IVR"];
  countries = ['India', 'UAE', 'Qatar'];
  cities = ['Delhi', 'Mumbai', 'Dubai', 'Doha'];
  getMfa: any;



  constructor(private fb: FormBuilder, private adminCenterService: AdminCenterService,
    @Inject(MAT_DIALOG_DATA) public data: any, private commonToaster: CommonToaster,
    private dialogRef: MatDialogRef<AdminCenterAddMfa>
  ) {
    this.productForm = this.fb.group({
      mfaName: ['', Validators.required],
      sms: ['', Validators.required],
      otp: ['', Validators.required],
      biometric: ['', Validators.required],
      secure: ['', Validators.required],
      failCount: ['', Validators.required],
      effectivePeriodFrom: ['', Validators.required],
      effectivePeriodTo: ['', Validators.required],
      status: [true]
    });

  }

  ngOnInit() {
    this.getMfaData();
  }

  getMfaData() {
    this.adminCenterService.getMfa().subscribe((res: any) => {
      console.log('getmfa', res);
      this.getMfa = res.data;

    })
  }

  getMfaTypeFromForm(form: any): string {
    if (form.sms) return 'SMS';
    if (form.otp) return 'OTP';
    if (form.biometric) return 'BIOMETRIC';
    if (form.secure) return 'SECURE VALUE';
    return '';
  }


  submitForm() {
    // if (this.productForm.invalid) {
    //   this.productForm.markAllAsTouched();
    //   return;
    // }

    const form = this.productForm.value;
    console.log('form', form)

    const payload = {
      mfaName: form.mfaName?.mfaName || form.mfaName,
      mfaType: this.getMfaTypeFromForm(form),
      mfaFailCount: form.failCount.mfaFailCount,
      effectiveFrom: this.formatDate(form.effectivePeriodFrom),
      effectiveTo: this.formatDate(form.effectivePeriodTo),
      status: form.status ? 'ACT' : 'INA'
    };

    console.log('FINAL PAYLOAD', payload);

    if (this.isEditMode) {
      this.adminCenterService.updateRetailProduct(payload).subscribe();
    } else {
      this.adminCenterService.createMfaProduct(payload).subscribe((res) => {
        if (res?.status.code == "000000") {
          this.commonToaster.showSuccess('MFA Saved successfully');
          this.dialogRef.close('retaiClose');
          this.adminCenterService.trigger();
        }
      });

    }
  }




  formatDate(date: Date): string | null {
    // if (!date) return null;

    const d = new Date(date);
    const pad = (n: number) => n.toString().padStart(2, '0');

    return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
  }



  closeForm() { }

}
