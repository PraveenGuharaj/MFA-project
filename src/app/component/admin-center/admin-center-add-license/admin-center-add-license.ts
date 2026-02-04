import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AdminCenterService } from '../admin-center-service';
import { CommonToaster } from '../../../shared/services/common-toaster';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { forkJoin } from 'rxjs';


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
  warningStatus = [true, false];
  alertStatus = [true, false];
  getLicenseDomain: any;
  isEditMode = false;



  constructor(private fb: FormBuilder, private adminCenterService: AdminCenterService, private commonToaster: CommonToaster, private dialogRef: MatDialogRef<AdminCenterAddLicense>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.productForm = this.fb.group({

      domainName: [''],
      smsValue: [''],
      emailValue: [''],
      pushValue: [''],
      effectiveFrom: [''],
      sms: [false],
      email: [false],
      push: [false],
      warningStatus: [''],
      alertStatus: [''],
      status: [true]
    });

  }

  ngOnInit() {
    this.getDomainLicense();
    if (this.data?.editData) {
      this.isEditMode = true;
      this.loadEditData(this.data.editData);
    }
  }

  loadEditData(editData: any) {
    forkJoin({
      domains: this.adminCenterService.getLicenseDomain()
    }).subscribe(({ domains }: any) => {
      this.getLicenseDomain = domains.data;
      this.patchForm(editData);
    });
  }

  getSelectedDomain(domainName: string) {
    if (!this.getLicenseDomain || !domainName) return null;

    return this.getLicenseDomain.find(
      (d: any) =>
        d.code === domainName ||
        d.desc === domainName
    );
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

    console.log('form', form);


    const payload = {
      domainName: form.domainName?.desc || null,
      expiryDate: this.formatDate(form.effectiveFrom),
      warningStatus: form.warningStatus,
      alertStatus: form.alertStatus,
      status: form.status ? 'ACT' : 'INA',
      createdBy: '',
      action: this.isEditMode ? 'UPDATE' : 'ADD',
      licenseId: this.isEditMode ? this.data?.editData?.licenseId : '',
      notificationDeliveries
    };


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

  patchForm(p: any) {
    const deliveries = p.notificationDeliveries || [];

    const smsDelivery = deliveries.find((d: any) => d.deliveryType === 'SMS');
    const emailDelivery = deliveries.find((d: any) => d.deliveryType === 'EMAIL');
    const pushDelivery = deliveries.find((d: any) => d.deliveryType === 'PUSH');

    this.productForm.patchValue({
      domainName: this.getSelectedDomain(p.domainName),

      sms: !!smsDelivery,
      email: !!emailDelivery,
      push: !!pushDelivery,

      smsValue: smsDelivery?.phoneNumbers?.[0] || '',
      emailValue: emailDelivery?.emails?.[0] || '',
      pushValue: pushDelivery?.userIds?.[0] || '',

      effectiveFrom: this.toDatetimeLocal(p.expiryDate),
      status: p.status === 'ACT',
      alertStatus: p.alertStatus,
      warningStatus: p.warningStatus
    });
  }

  toDatetimeLocal(dateStr: string): string | null {
    if (!dateStr) return null;

    // Expected input: DD/MM/YYYY HH:mm:ss
    const [datePart, timePart] = dateStr.split(' ');
    const [day, month, year] = datePart.split('/');
    const [hour, minute] = timePart.split(':');

    return `${year}-${month}-${day}T${hour}:${minute}`;
  }







  closeForm() { }

  getDomainLicense() {
    this.adminCenterService.getLicenseDomain().subscribe((res: any) => {
      this.getLicenseDomain = res.data;
    })
  }
}
