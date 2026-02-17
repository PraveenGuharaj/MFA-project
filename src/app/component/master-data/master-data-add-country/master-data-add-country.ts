import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AdminCenterService } from '../../admin-center/admin-center-service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonToaster } from '../../../shared/services/common-toaster';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-master-data-add-country',
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatCheckboxModule
  ],
  templateUrl: './master-data-add-country.html',
  styleUrl: './master-data-add-country.scss',
})
export class MasterDataAddCountry {
  productForm!: FormGroup;
  countryLogoBase64: string = '';
  isEditMode = false;



  // Dropdown Options
  eurozoneFlag = ["True", "Fals"];
  blockDurations = ["30 Sec", "1 Min", "2 Min", "5 Min"];
  getCountryCode: any;

  constructor(private fb: FormBuilder, private adminCenterService: AdminCenterService,
    private commonToaster: CommonToaster, private dialogRef: MatDialogRef<MasterDataAddCountry>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.productForm = this.fb.group({
      countryCode: ['', Validators.required],
      countryDescription: ['', Validators.required],
      isoCountryCode: ['', Validators.required],
      countryCodeIso3a: ['', Validators.required],
      colour: ['', Validators.required],
      unitDescription: ['', Validators.required],
      baseCurrency: ['', Validators.required],
      eurozoneFlag: ['', Validators.required],
      remarks: ['', Validators.required],
      mobileNumberPrefix: ['', Validators.required],
      transferRemitterBenefAddress: ['', Validators.required],
      nationality: ['', Validators.required],
      languageEN: ['', Validators.required],
      languageAR: ['', Validators.required],
      languageFR: ['', Validators.required],
      swiftName: ['', Validators.required],
      status: ['']
    });
  }

  ngOnInit() {
    this.getCountryAPi();
    if (this.data?.editData) {
      this.isEditMode = true;
      this.loadEditData(this.data.editData);
    }
  }

  submitForm() {
    console.log('countryform', this.productForm.value);
    const form = this.productForm.value;

    const payload = {
      serviceName: 'startWorkflow',
      processName: 'COUNTRY',
      action: 'ADD', // or 'UPDATE' based on mode
      product: 'MASTER',
      subProduct: 'COUNTRY_CONFIG',
      requestData: [
        {
          countryCode: form.countryCode?.countryCode || '',
          countryDesc: form.countryDescription || '',
          isoCountryCode: form.isoCountryCode || '',
          countryCodeIso3a: form.countryCodeIso3a || '',

          langEn: form.languageEN || '',
          langAr: form.languageAR || '',
          langFr: form.languageFR || '',

          color: form.colour || '',
          unitDesc: form.unitDescription || '',
          baseCurrency: form.baseCurrency || '',

          eurozoneFlag: form.eurozoneFlag?.toString().toLowerCase(), // "true"/"false"

          remarks: form.remarks || '',
          mobNoPrefix: form.mobileNumberPrefix || '',
          nationality: form.nationality || '',

          swiftName: form.swiftName || '',
          transferBenefAddress: form.transferRemitterBenefAddress || '',
          benefAddress: form.transferRemitterBenefAddress || '',

          digitalOnboardingEligibility:
            form.countryCode?.digitalOnboardingEligibility || 'N',

          // countryLogo: this.countryLogoBase64 || '',
          status: 'ACT'
        }
      ]
    };

    console.log('payload', payload);

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
      this.adminCenterService.createCountry(payload).subscribe((res: any) => {
        console.log('create', res);
        if (res?.status.code == "000000") {
          this.commonToaster.showSuccess('License created successfully');
          this.dialogRef.close('retaiClose');
          this.adminCenterService.trigger();
        }

      })
    }




    if (this.productForm.valid) {
    } else {
      this.productForm.markAllAsTouched();
    }
  }



  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const base64String = reader.result as string;

        // Remove prefix if API doesn't need it
        this.countryLogoBase64 = base64String.split(',')[1];
      };

      reader.readAsDataURL(file);
    }
  }

  closeForm() { }

  getCountryAPi() {
    this.adminCenterService.getAllCountry().subscribe((res: any) => {
      this.getCountryCode = res.data;
    })
  }

  patchForm(data: any) {
    console.log('form', data);
    console.log('data', this.data);

    this.productForm.patchValue({
      countryCode: data.countryCode,
      countryDescription: data.countryDesc,
      isoCountryCode: data.isoCountryCode,
      countryCodeIso3a: data.countryCodeIso3a,
      colour: data.color,
      unitDescription: data.unitDesc,
      baseCurrency: data.baseCurrency,
      eurozoneFlag: data.eurozoneFlag === 'true',
      remarks: data.remarks,
      mobileNumberPrefix: data.mobNoPrefix,
      nationality: data.nationality,
      languageEN: data.langEn,
      languageAR: data.langAr,
      languageFR: data.langFr,
      status: data.status,
      transferBenefAddress: data.transferBenefAddress,
      benefAddress: data.benefAddress,
      digitalOnboardingEligibility: data.digitalOnboardingEligibility
    });
  }


  loadEditData(editData: any) {

    forkJoin({
      countryList: this.adminCenterService.getAllCountry()
    }).subscribe({
      next: (res: any) => {

        this.getCountryCode = res.countryList.data;

        const selectedCountry = this.getCountryCode.find(
          (c: any) => c.countryCode === editData.countryCode
        );

        this.productForm.patchValue({
          countryCode: selectedCountry,
          countryDescription: editData.countryDesc,
          isoCountryCode: editData.isoCountryCode,
          countryCodeIso3a: editData.countryCodeIso3a,
          colour: editData.color,
          unitDescription: editData.unitDesc,
          baseCurrency: editData.baseCurrency,

          // adjust depending on dropdown type
          eurozoneFlag: editData.eurozoneFlag === 'true' ? 'True' : 'Fals',

          remarks: editData.remarks,
          mobileNumberPrefix: editData.mobNoPrefix,
          nationality: editData.nationality,
          languageEN: editData.langEn,
          languageAR: editData.langAr,
          languageFR: editData.langFr,
          swiftName: editData.swiftName,
          transferRemitterBenefAddress: editData.transferBenefAddress,
          status: editData.status
        });

        if (editData.countryLogo) {
          this.countryLogoBase64 = editData.countryLogo;
        }

      },
      error: (err) => {
        console.error(err);
      }
    });
  }



}