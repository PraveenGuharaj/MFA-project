import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AdminCenterService } from '../admin-center-service';
import { CommonToaster } from '../../../shared/services/common-toaster';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-admin-center-add-license',
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatDatepickerModule,

  ],
  templateUrl: './admin-center-add-license.html',
  styleUrl: './admin-center-add-license.scss',
})
export class AdminCenterAddLicense {
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
  warningStatus = ['True', 'False'];
  alertStatus = ['True', 'False'];
  getLicenseDomain: any;
  isEditMode: any;



  constructor(private fb: FormBuilder, private adminCenterService: AdminCenterService, private commonToaster: CommonToaster, private dialogRef: MatDialogRef<AdminCenterAddLicense>) {
    this.productForm = this.fb.group({

      atmCode: [''],
      atmName: [''],

      smsValue: [''],
      emailValue: [''],
      pushValue: [''],
      effectiveFrom: [''],
      sms: [false],
      email: [false],
      push: [false],
      status: [true]
    });

  }

  ngOnInit() {
    this.getDomainLicense();
  }

  submitForm() {
    if (!this.productForm.valid) {
      this.productForm.markAllAsTouched();
      return;
    }

    const form = this.productForm.value;

    const notificationDeliveries: any[] = [];

    if (form.sms) {
      notificationDeliveries.push({
        deliveryType: 'SMS',
        phoneNumbers: form.smsValue ? [form.smsValue] : [],
        emails: null,
        userIds: null
      });
    }

    if (form.email) {
      notificationDeliveries.push({
        deliveryType: 'EMAIL',
        phoneNumbers: null,
        emails: form.emailValue ? [form.emailValue] : [],
        userIds: null
      });
    }

    if (form.push) {
      notificationDeliveries.push({
        deliveryType: 'PUSH',
        phoneNumbers: null,
        emails: null,
        userIds: form.pushValue ? [form.pushValue] : []
      });
    }

    const payload = {
      licenseId: null,
      domainName: form.atmCode?.desc || null,
      expiryDate: this.formatDate(form.effectiveFrom),
      warningStatus: form.warningStatus === 'True',
      alertStatus: form.alertStatus === 'True',
      status: form.status ? 'ACT' : 'INA',
      createdBy: null,
      action: 'ADD',
      notificationDeliveries
    };


    if (this.isEditMode) {
      this.adminCenterService.updateRetailProduct(payload).subscribe((res: any) => {
        console.log('ressss', res);

        if (res?.status.code == "SUCCESS") {
          // this.commonToaster.showSuccess('Product created successfully');
          // this.dialogRef.close('retaiClose');
        } else {

        }
      })
    } else {
      this.adminCenterService.createLicense(payload).subscribe((res: any) => {
        console.log('create', res);
        if (res?.status.code == "000000") {
          this.commonToaster.showSuccess('License created successfully');
          this.dialogRef.close('retaiClose');
          this.adminCenterService.trigger();
        }

      })
    }


    console.log('FINAL PAYLOAD', payload);

    // API call
    // this.adminCenterService.addLicense(payload).subscribe(...)
  }

  formatDate(date: string | Date): string | null {
    if (!date) return null;

    const d = new Date(date);

    const pad = (n: number) => n.toString().padStart(2, '0');

    return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ` +
      `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  }



  closeForm() { }

  getDomainLicense() {
    this.adminCenterService.getLicenseDomain().subscribe((res: any) => {
      this.getLicenseDomain = res.data;
    })
  }
}
