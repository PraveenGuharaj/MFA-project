import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AdminCenterService } from '../admin-center-service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonToaster } from '../../../shared/services/common-toaster';
import { DashboardAddRetailProduct } from '../../dashboard/dashboard-add-retail-product/dashboard-add-retail-product';

@Component({
  selector: 'app-admin-center-add-configuration',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatCheckboxModule
  ],
  templateUrl: './admin-center-add-configuration.html',
  styleUrl: './admin-center-add-configuration.scss',
})
export class AdminCenterAddConfiguration {
  productForm!: FormGroup;

  // Dropdown Options
  channels = ['Mobile Banking', 'Internet Banking'];
  categories = ["Login", "Transaction", "Reset", "Verification"];
  domains = ["Banking", "Insurance", "Fintech", "Wallet"];
  blockDurations = [30, 1, 2, 5];
  types = ["Primary", "Secondary", "Backup"];
  deliveryModesOptions = ["SMS", "Email", "WhatsApp", "IVR"];
  boDropdown: any;
  categoryDropdown: any;
  templateDropdown: any;
  isEditMode = false;
  channelDropdown: any;

  constructor(private fb: FormBuilder, private adminCenterService: AdminCenterService,
    @Inject(MAT_DIALOG_DATA) public data: any, private commonToaster: CommonToaster, private dialogRef: MatDialogRef<DashboardAddRetailProduct>
  ) {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      // channel: ['', Validators.required],
      category: ['', Validators.required],

      // Newly mapped fields
      otpLength: ['', Validators.required],
      maxAttempts: ['', Validators.required],
      otpExpiry: ['', Validators.required],
      blockDuration: ['', Validators.required],
      domain: ['', Validators.required],
      deliveryMode: [[], Validators.required], // Multiple select

      type: ['', Validators.required],
      status: [true],
      templateName: ['', Validators.required],
      channel: [[]],
      mobileOtp: ['', Validators.required],
      biometric: ['', Validators.required],
      webOtp: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getDomain();
    this.getCategory();
    this.getTemplate();
    this.getChannel();
    if (this.data?.editData) {
      this.isEditMode = true;
      // this.patchForm(this.data.editData);
    }
  }

  submitForm() {
    const otpForm = this.productForm.value;
    console.log('product', otpForm)
    const payload = {
      channelId: [otpForm.channel[0].channelId],
      categoryId: otpForm.category.categoryId,
      domainId: otpForm.domain.name,
      channelName: otpForm.channel[0].name,
      templateId: otpForm.templateName.id,
      otpLength: Number(otpForm.otpLength),
      otpExpirySecond: Number(otpForm.otpExpiry),
      maxInvalidSession: 3,
      maxInvalidUser: 3,
      blockDurationMin: otpForm.blockDuration,
      maxResendCount: 2,
      maxSmsPerDay: 0,
      deliveryMode: otpForm.deliveryMode,
      resendIntervalSec: 30,
      activeFlag: otpForm.status == true ? 'Y' : 'N',
      mobileotp: otpForm.mobileOtp === true ? 'Y' : 'N',
      bioMatrix: otpForm.biometric === true ? 'Y' : 'N',
      webOtp: otpForm.webOtp === true ? 'Y' : 'N',
      templateName: otpForm.templateName.name
    }



    if (this.isEditMode) {

    } else {
      this.adminCenterService.createOtp(payload).subscribe((res: any) => {
        console.log('create', res);
        if (res?.status.code == "SUCCESS") {
          this.commonToaster.showSuccess('Product created successfully');
          this.dialogRef.close('retaiClose');
          this.adminCenterService.trigger(); // 🔥 notify table
        }

      })
    }
    // if (this.productForm.valid) {
    // } else {
    //   this.productForm.markAllAsTouched();
    // }
  }

  closeForm() { }


  get channelControl() {
    return this.productForm.get('channel') as FormControl;
  }

  getCategory() {
    this.adminCenterService.getCategory().subscribe((res: any) => {
      this.categoryDropdown = res.data;
    })
  }

  getDomain() {
    this.adminCenterService.getBoDropdown().subscribe((res: any) => {
      this.boDropdown = res.data;
    })
  }

  getTemplate() {
    this.adminCenterService.getTemplate().subscribe((res: any) => {
      this.templateDropdown = res.data;
    })
  }

  getChannel() {
    this.adminCenterService.getChannel().subscribe((res: any) => {
      this.channelDropdown = res.data;
    })
  }
}
