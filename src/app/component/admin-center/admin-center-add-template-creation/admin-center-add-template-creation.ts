import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AdminCenterService } from '../admin-center-service';
import { CommonToaster } from '../../../shared/services/common-toaster';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { forkJoin } from 'rxjs';

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
    private dialogRef: MatDialogRef<AdminCenterAddTemplateCreation>,
    @Inject(MAT_DIALOG_DATA) public data: any
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

  // ngOnInit() {
  //   this.getDomainApi();
  //   this.getUnitApi();
  //   this.getChannelApi();
  //   this.getCategoryApi();
  //   this.getLanguageApi();
  //       this.isEditMode = !!this.data?.editData;

  //    if (this.isEditMode) {
  //       console.log('data', this.data);

  //       this.patchForm(this.data.editData);
  //     }

  // }

  ngOnInit() {
    this.isEditMode = !!this.data?.editData;

    if (this.isEditMode) {
      this.loadEditData(this.data.editData);
    } else {
      this.loadDropdowns();
    }
  }

  loadDropdowns() {
    forkJoin({
      domains: this.adminCenterService.getLicenseDomain(),
      units: this.adminCenterService.getUnits(),
      channels: this.adminCenterService.getTemplateChannel(),
      categories: this.adminCenterService.getCategory(),
      languages: this.adminCenterService.getLanguage()
    }).subscribe((res: any) => {
      this.getDomainData = res.domains.data;
      this.getUnitsData = res.units.data.units;
      this.getChannelData = res.channels.data.channels;
      this.getCategoryData = res.categories.data;
      this.getLanguageData = res.languages.data;
    });
  }


  loadEditData(editData: any) {
    forkJoin({
      domains: this.adminCenterService.getLicenseDomain(),
      units: this.adminCenterService.getUnits(),
      channels: this.adminCenterService.getTemplateChannel(),
      categories: this.adminCenterService.getCategory(),
      languages: this.adminCenterService.getLanguage()
    }).subscribe((res: any) => {

      this.getDomainData = res.domains.data;
      this.getUnitsData = res.units.data.units;
      this.getChannelData = res.channels.data.channels;
      this.getCategoryData = res.categories.data;
      this.getLanguageData = res.languages.data;

      // ✅ PATCH ONLY AFTER DATA IS READY
      this.patchForm(editData);
    });
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
      templateId: this.data?.editData?.templateId,

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

  patchForm(p: any) {
    console.log('edit data', p);
    console.log('data', this.data.editData);


    const template = p.notificationTemplate?.[0];

    this.productForm.patchValue({
      DomainName: this.getSelectedDomain(p.domainId),
      unitName: this.getSelectedUnit(p.unitId),
      channelName: this.getSelectedChannel(p.channelId),
      categoryName: this.getSelectedCategory(p.categoryId),
      languageName: this.getSelectedLanguage(template?.langCode),

      deepLinkUrl: p.deepLink || '',
      remarks: p.remarks || '',
      templateName: p.templateName || '',
      status: true,

      sms: p.notificationType === 'SMS',
      email: p.notificationType === 'EMAIL',
      push: p.notificationType === 'PUSH',

      smsValue: p.notificationType === 'SMS' ? template?.templateContent : '',
      emailValue: p.notificationType === 'EMAIL' ? template?.templateContent : '',
      pushValue: p.notificationType === 'PUSH' ? template?.templateContent : ''
    });
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

  getSelectedDomain(domainId: any) {
    if (!this.getDomainData || !domainId) return null;

    return this.getDomainData.find((d: any) =>
      d.name === domainId ||
      d.desc === domainId ||
      d.name === domainId?.name ||
      d.desc === domainId?.desc
    ) || null;
  }

  getSelectedUnit(unitId: any) {
    if (!this.getUnitsData || !unitId) return null;

    return this.getUnitsData.find((u: any) =>
      u.unitCode === unitId ||
      u.unitDesc === unitId ||
      u.unitCode === unitId?.unitCode
    ) || null;
  }

  getSelectedChannel(channelId: any) {
    if (!this.getChannelData || !channelId) return null;

    return this.getChannelData.find((c: any) =>
      c.channelId === channelId ||
      c.channelDesc === channelId ||
      c.channelId === channelId?.channelId
    ) || null;
  }

  getSelectedCategory(categoryId: any) {
    if (!this.getCategoryData || !categoryId) return null;

    return this.getCategoryData.find((c: any) =>
      c.categoryId == categoryId ||
      c.name === categoryId ||
      c.categoryId === categoryId?.categoryId
    ) || null;
  }

  getSelectedLanguage(langCode: any) {
    if (!this.getLanguageData || !langCode) return null;

    return this.getLanguageData.find((l: any) =>
      l.langCode === langCode ||
      l.langDesc === langCode ||
      l.langCode === langCode?.langCode
    ) || null;
  }

}
