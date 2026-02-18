import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AdminCenterService } from '../admin-center-service';
import { CommonToaster } from '../../../shared/services/common-toaster';


@Component({
  selector: 'app-admin-center-add-atm',
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  templateUrl: './admin-center-add-atm.html',
  styleUrl: './admin-center-add-atm.scss',
})
export class AdminCenterAddAtm {
  productForm!: FormGroup;

  // Dropdown Options
  WeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  isEditMode = false;



  constructor(private fb: FormBuilder, private adminCenterService: AdminCenterService, private commonToaster: CommonToaster, private dialogRef: MatDialogRef<AdminCenterAddAtm>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.productForm = this.fb.group({
      atmCode: ['', Validators.required],
      fullAddressEn: ['', Validators.required],
      fullAddressAr: ['', Validators.required],
      cityEn: ['', Validators.required],
      cityAr: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      timing: ['', Validators.required],
      workingHoursEn: ['', Validators.required],
      workingHoursAr: ['', Validators.required],
      installationDate: ['', Validators.required],
      cashDeposit: ['', Validators.required],
      cashOut: ['', Validators.required],
      chequeDeposit: ['', Validators.required],
      disabledPeople: ['', Validators.required],
      onlineLocation: ['', Validators.required],
      mode: ['', Validators.required],
      fromTime: ['', Validators.required],
      toTime: ['', Validators.required],
      status: ['']

    });

  }

  ngOnInit() {
    if (this.data?.editData) {
      this.isEditMode = true;
      this.patchForm(this.data.editData);
    }
  }

  patchForm(p: any) {
    console.log('data', this.data);

    if (!p) return;

    const numberToYesNo = (value: number) => {
      return value === 1 ? 'Y' : 'N';
    };

    const formatToDateTimeLocal = (dateStr: string) => {
      if (!dateStr) return null;

      const [day, month, year] = dateStr.split('/');
      return `${year}-${month}-${day}T00:00`;
    };

    this.productForm.patchValue({

      atmCode: p.code,
      fullAddressEn: p.fullAddress,
      fullAddressAr: p.fullAddressArb,

      cityEn: p.city,
      cityAr: p.cityInArabic,

      latitude: p.latitude,
      longitude: p.longitude,

      workingHoursEn: p.dayTime?.[0]?.day || '',
      workingHoursAr: p.workingHoursInArb,

      installationDate: formatToDateTimeLocal(p.installationDate),

      cashDeposit: numberToYesNo(p.cashDeposit),
      cashOut: numberToYesNo(p.cashOut),
      chequeDeposit: numberToYesNo(p.chequeDeposit),

      disabledPeople: numberToYesNo(p.disablePeople),
      onlineLocation: numberToYesNo(p.onlineLocation),

      mode: p.mode === 'Online' ? 'Y' : 'N',

      fromTime: p.dayTime?.[0]?.fromTime || '',
      toTime: p.dayTime?.[0]?.toTime || ''
    });

    console.log('Form Patched:', this.productForm.value);
  }


  submitForm() {

    const formValue = this.productForm.value;

    const yesNoToNumber = (value: string) => {
      return value === 'Y' ? 1 : 2;
    };

    const formatDate = (date: string) => {
      if (!date) return null;

      const d = new Date(date);
      const day = String(d.getDate()).padStart(2, '0');
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const year = d.getFullYear();

      return `${day}/${month}/${year}`;
    };

    const payload = {
      disablePeople: yesNoToNumber(formValue.disabledPeople),
      cityInArabic: formValue.cityAr || '',
      latitude: formValue.latitude,
      longitude: formValue.longitude,

      cashDeposit: yesNoToNumber(formValue.cashDeposit),
      cashOut: yesNoToNumber(formValue.cashOut),
      chequeDeposit: yesNoToNumber(formValue.chequeDeposit),

      city: formValue.cityEn,
      code: formValue.atmCode,
      fullAddress: formValue.fullAddressEn,
      fullAddressArb: formValue.fullAddressAr || '',

      onlineLocation: yesNoToNumber(formValue.onlineLocation),

      workingHours: formValue.workingHoursEn,
      workingHoursInArb: formValue.workingHoursAr || '',

      isActive: formValue.mode,

      installationDate: formatDate(formValue.installationDate),

      dayTime: formValue.fromTime && formValue.toTime
        ? [
          {
            day: formValue.workingHoursEn,
            fromTime: formValue.fromTime,
            toTime: formValue.toTime
          }
        ]
        : [],

      mode: formValue.mode === 'Y' ? 'Online' : 'Offline',
      locatorId: this.isEditMode ? this.data.editData.locatorId : ''
    };

    console.log('Final Payload:', payload);

    if (this.isEditMode) {
      this.adminCenterService.updateAtm(payload).subscribe((res: any) => {
        console.log('ressss', res);

        if (res?.status.code == "000000") {
          this.commonToaster.showSuccess(res.status.description);
          this.dialogRef.close('retaiClose');
        } else {

        }
      })
    } else {
      this.adminCenterService.createAtm(payload).subscribe((res: any) => {
        console.log('create', res);
        if (res?.status.code == "000000") {
          this.commonToaster.showSuccess(res.status.description);
          this.dialogRef.close('retaiClose');
          this.adminCenterService.trigger();
        }

      })
    }
  }



  closeForm() { }
}
