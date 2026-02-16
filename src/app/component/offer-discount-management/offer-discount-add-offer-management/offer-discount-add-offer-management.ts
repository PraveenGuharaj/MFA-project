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
  selector: 'app-offer-discount-add-offer-management',
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatCheckboxModule
  ],
  templateUrl: './offer-discount-add-offer-management.html',
  styleUrl: './offer-discount-add-offer-management.scss',
})
export class OfferDiscountAddOfferManagement {
  productForm!: FormGroup;

  // Dropdown Options
  channels = ["SMS", "Email", "App", "Web"];
  categories = ["Login", "Transaction", "Reset", "Verification"];
  domains = ["Banking", "Insurance", "Fintech", "Wallet"];
  blockDurations = ["30 Sec", "1 Min", "2 Min", "5 Min"];
  types = ["Primary", "Secondary", "Backup"];
  deliveryModesOptions = ["SMS", "Email", "WhatsApp", "IVR"];
  getPartnerName: any;
  getOfferType: any;
  getRewardType: any;
  getRedemption: any;
  isEditMode = false;

  constructor(private fb: FormBuilder, private adminCenterService: AdminCenterService, private commonToaster: CommonToaster, private dialogRef: MatDialogRef<OfferDiscountAddOfferManagement>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.productForm = this.fb.group({
      parnterName: ['', Validators.required],
      productName: ['', Validators.required],
      offerTitle: ['', Validators.required],
      offerTag: ['', Validators.required],
      offerDescription: ['', Validators.required],
      termsAndCondition: ['', Validators.required],
      offerType: ['', Validators.required],
      rewardType: ['', Validators.required],
      rewardVaue: ['', Validators.required],
      redemptionMethod: ['', Validators.required],
      redemptionLimitPerUser: ['', Validators.required],
      totalRedemptionAllowed: ['', Validators.required],
      validFrom: ['', Validators.required],
      validTo: ['', Validators.required],
      customerSegment: ['', Validators.required],
      mobile: ['', Validators.required],
      web: ['', Validators.required],
      all: ['', Validators.required],
      status: ['']

    });
  }


  ngOnInit() {

    forkJoin({
      partner: this.adminCenterService.getPartnerName(),
      offerType: this.adminCenterService.getOfferType(),
      rewardType: this.adminCenterService.getRewardType(),
      redemption: this.adminCenterService.getRedemption()
    }).subscribe((res: any) => {

      // Assign dropdown data
      this.getPartnerName = res.partner;
      this.getOfferType = res.offerType.data;
      this.getRewardType = res.rewardType.data;
      this.getRedemption = res.redemption.data;

      // 🔥 PATCH ONLY AFTER EVERYTHING LOADED
      if (this.data?.editData) {
        this.isEditMode = true;
        this.patchForm(this.data.editData);
      }
    });

  }


  submitForm() {
    console.log('submitForm', this.productForm.value)
    const form = this.productForm.value;

    const applicableChannels =
      form.all ? 'All' :
        form.mobile ? 'Mobile' :
          form.web ? 'Web' : '';

    const payload = {
      partnerName: form.parnterName?.companyName,
      productName: form.productName,
      offerTitle: form.offerTitle,
      offerDescription: form.offerDescription,
      offerTag: form.offerTag,
      termsAndConditions: form.termsAndCondition,
      offerType: form.offerType?.categoryCode,
      rewardType: form.rewardType?.categoryCode,
      rewardValue: form.rewardVaue,
      redemptionMethod: form.redemptionMethod?.categoryCode,
      redemptionLimitPerUser: Number(form.redemptionLimitPerUser),
      totalRedemptionsAllowed: Number(form.totalRedemptionAllowed),
      validFrom: this.formatDateTime(form.validFrom),
      validTo: this.formatDateTime(form.validTo),
      customerSegment: form.customerSegment,
      applicableChannels: applicableChannels,
      offerStatus: form.status ? 'Active' : 'Inactive',
      offerId: this.isEditMode ? this.data.editData.offerId : ''
    };

    console.log('payload', payload);
    if (this.isEditMode) {
      this.adminCenterService.updateOfferMgmt(payload).subscribe((res: any) => {
        console.log('ressss', res);

        if (res?.status.code == "000000") {
          this.commonToaster.showSuccess(res.status.description);
          this.dialogRef.close('retaiClose');
        } else {

        }
      })
    } else {
      this.adminCenterService.createOfferMgmt(payload).subscribe((res: any) => {
        console.log('create', res);
        if (res?.status.code == "000000") {
          this.commonToaster.showSuccess(res.status.description);
          this.dialogRef.close('retaiClose');
          this.adminCenterService.trigger();
        }

      })
    }
  }

  formatDateTime(date: any): string {
    if (!date) return '';

    const d = new Date(date);

    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();

    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const seconds = '00';

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }


  closeForm() { }

  getParnterNameApi() {
    this.adminCenterService.getPartnerName().subscribe((res: any) => {
      this.getPartnerName = res;
    })
  }

  getOfferTypeApi() {
    this.adminCenterService.getOfferType().subscribe((res: any) => {
      this.getOfferType = res.data;
    })
  }

  getRewardTypeApi() {
    this.adminCenterService.getRewardType().subscribe((res: any) => {
      this.getRewardType = res.data;
    })
  }

  getRedemptionApi() {
    this.adminCenterService.getRedemption().subscribe((res: any) => {
      this.getRedemption = res.data;
      if (this.data?.editData) {
        this.isEditMode = true;
        this.patchForm(this.data.editData);
      }
    })
  }

  patchForm(offerForm: any) {

    console.log('data', this.data);

    const selectedPartner = this.getPartnerName?.find(
      (p: any) => p.companyName === offerForm.partnerName
    );

    const selectedOfferType = this.getOfferType?.find(
      (o: any) => o.categoryCode === offerForm.offerType
    );

    const selectedRewardType = this.getRewardType?.find(
      (r: any) => r.categoryCode === offerForm.rewardType
    );

    const selectedRedemption = this.getRedemption?.find(
      (r: any) => r.categoryCode === offerForm.redemptionMethod
    );

    this.productForm.patchValue({
      parnterName: selectedPartner,
      productName: offerForm.productName,
      offerTitle: offerForm.offerTitle,
      offerTag: offerForm.offerTag,
      offerDescription: offerForm.offerDescription,
      termsAndCondition: offerForm.termsAndConditions,
      offerType: selectedOfferType,
      rewardType: selectedRewardType,
      rewardVaue: offerForm.rewardValue,
      redemptionMethod: selectedRedemption,
      redemptionLimitPerUser: offerForm.redemptionLimitPerUser,
      totalRedemptionAllowed: offerForm.totalRedemptionsAllowed,
      validFrom: this.convertToDate(offerForm.validFrom),
      validTo: this.convertToDate(offerForm.validTo),
      customerSegment: offerForm.customerSegment,
      status: offerForm.offerStatus === 'Active',

      mobile: offerForm.applicableChannels === 'Mobile',
      web: offerForm.applicableChannels === 'Web',
      all: offerForm.applicableChannels === 'All'
    });
  }



  convertToDate(dateString: string): string | null {
    if (!dateString) return null;

    const [datePart] = dateString.split(' ');
    const [day, month, year] = datePart.split('/');

    return `${year}-${month}-${day}`;
  }


}
