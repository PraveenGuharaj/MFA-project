import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AdminCenterService } from '../admin-center-service';
import { CommonToaster } from '../../../shared/services/common-toaster';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-center-add-template-creation',
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatCheckboxModule
  ],
  templateUrl: './admin-center-add-template-creation.html',
  styleUrl: './admin-center-add-template-creation.scss',
})
export class AdminCenterAddTemplateCreation {
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
  getDomainData: any;
  getUnitsData: any;
  getChannelData: any;
  getCategoryData: any;
  getLanguageData: any;
  isEditMode = false;



  constructor(private fb: FormBuilder, private adminCenterService: AdminCenterService, private commonToaster: CommonToaster,
    private dialogRef: MatDialogRef<AdminCenterAddTemplateCreation>
  ) {
    this.productForm = this.fb.group({

      DomainName: ['', Validators.required],
      unitName: ['', Validators.required],
      channelName: ['', Validators.required],
      categoryName: ['', Validators.required],
      languageName: ['', Validators.required],
      deepLinkUrl: ['', Validators.required],
      remarks: ['', Validators.required],
      sms: [''],
      email: [''],
      push: [''],
      smsValue: [''],
      emailValue: [''],
      pushValue: [''],

      templateName: ['', Validators.required],
      status: [true]
    });

  }

  ngOnInit() {
    this.getDomainApi();
    this.getUnitApi();
    this.getChannelApi();
    this.getCategoryApi();
    this.getLanguageApi();
  }

  submitForm() {
    // if (!this.productForm.valid) {
    //   this.productForm.markAllAsTouched();
    //   return;
    // }

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
      templateId: null,

      domainId: form.DomainName?.name || null,
      categoryId: form.categoryName?.categoryId?.toString() || null,
      unitId: form.unitName?.unitCode || form.unitName?.unitDesc || null,
      channelId: form.channelName?.channelId || null,

      notificationType: form.sms
        ? 'SMS'
        : form.email
          ? 'EMAIL'
          : form.push
            ? 'PUSH'
            : null,

      remarks: form.remarks || '',
      templateName: form.templateName || '',
      deepLink: form.deepLinkUrl || '',

      notificationTemplate: [
        {
          langTempId: null,
          langCode: form.languageName?.langCode || null,
          langDesc: form.languageName?.langDesc || null,
          templateContent: form.smsValue || form.emailValue || 'template message',
          emailHeader: null,
          emailBody: null
        }
      ],

      action: this.isEditMode ? 'UPDATE' : 'ADD'
    };


    console.log('payload', payload)


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
      this.adminCenterService.createNotification(payload).subscribe((res: any) => {
        console.log('create', res);
        if (res?.status.code == "000000") {
          this.commonToaster.showSuccess('Notification created successfully');
          this.dialogRef.close('retaiClose');
          this.adminCenterService.trigger();
        }

      })
    }


    console.log('FINAL PAYLOAD', payload);

    // API call
    // this.adminCenterService.addLicense(payload).subscribe(...)
  }

  closeForm() { }

  getDomainApi() {
    this.adminCenterService.getLicenseDomain().subscribe((res: any) => {
      this.getDomainData = res.data;
    })
  }

  getUnitApi() {
    this.adminCenterService.getUnits().subscribe((res: any) => {
      this.getUnitsData = res.data.units;
    })
  }

  getChannelApi() {
    this.adminCenterService.getTemplateChannel().subscribe((res: any) => {
      this.getChannelData = res.data.channels;
    })
  }

  getCategoryApi() {
    this.adminCenterService.getCategory().subscribe((res: any) => {
      this.getCategoryData = res.data;
    })
  }

  getLanguageApi() {
    this.adminCenterService.getLanguage().subscribe((res: any) => {
      this.getLanguageData = res.data;
    })
  }
}
