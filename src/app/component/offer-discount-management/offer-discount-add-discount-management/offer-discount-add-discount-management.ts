import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonToaster } from '../../../shared/services/common-toaster';
import { AdminCenterService } from '../../admin-center/admin-center-service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-offer-discount-add-discount-management',
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatCheckboxModule
  ],
  templateUrl: './offer-discount-add-discount-management.html',
  styleUrl: './offer-discount-add-discount-management.scss',
})
export class OfferDiscountAddDiscountManagement {
  productForm!: FormGroup;

  // Dropdown Options
  channels = ["SMS", "Email", "App", "Web"];
  categories = ["Login", "Transaction", "Reset", "Verification"];
  domains = ["Banking", "Insurance", "Fintech", "Wallet"];
  blockDurations = ["30 Sec", "1 Min", "2 Min", "5 Min"];
  types = ["Primary", "Secondary", "Backup"];
  deliveryModesOptions = ["SMS", "Email", "WhatsApp", "IVR"];
  isEditMode = false;
  getPartnerName: any;
  discountType: any;
  getcustomerSegment: any;
  getdiscountType: any;
  getDiscountType: any;
  getCustomerSegement: any;

  constructor(private fb: FormBuilder, private commonToaster: CommonToaster, private dialogRef: MatDialogRef<OfferDiscountAddDiscountManagement>,
    @Inject(MAT_DIALOG_DATA) public data: any, private adminCenterService: AdminCenterService) {
    this.productForm = this.fb.group({
      partnerName: ['', Validators.required],
      productName: ['', Validators.required],
      discountTitle: ['', Validators.required],
      discountType: ['', Validators.required],
      discountDescription: ['', Validators.required],
      discountValue: ['', Validators.required],
      termsAndCondition: ['', Validators.required],
      usageLimitPerUser: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      totalUsageLimit: ['', Validators.required],
      mobile: ['', Validators.required],
      web: ['', Validators.required],
      all: ['', Validators.required],
      customerSegment: ['', Validators.required],
      status: ['']


    });
  }

  //     ngOnInit() {

  //       forkJoin({
  //         partner: this.adminCenterService.getPartnerName(),
  //         discountType: this.adminCenterService.getDiscountType(),
  //         customerSegment: this.adminCenterService.getCustomerSegement()
  //       }).subscribe((res: any) => {

  //         // Assign dropdown data
  //     this.getPartnerName = res.partner;
  // this.getdiscountType = res.discountType.data;
  // this.getcustomerSegment = res.customerSegment.data;


  //         // 🔥 PATCH ONLY AFTER EVERYTHING LOADED
  //         if (this.data?.editData) {
  //           this.isEditMode = true;
  //           this.patchForm(this.data.editData);
  //         }
  //       });

  //     }

  ngOnInit() {
    this.adminCenterService.getPartnerName().subscribe((res: any) => {
      this.getPartnerName = res;
    })

    this.adminCenterService.getDiscountType().subscribe((res: any) => {
      this.getDiscountType = res.data;
    })

    this.adminCenterService.getCustomerSegement().subscribe((res: any) => {
      this.getCustomerSegement = res.data;
    })
  }

  patchForm(offerForm: any) {

    console.log('data', this.data);

    const selectedPartner = this.getPartnerName?.find(
      (p: any) => p.companyName === offerForm.partnerName
    );




    const selectedRedemption = this.getdiscountType?.find(
      (r: any) => r.categoryCode === offerForm.redemptionMethod
    );

    this.productForm.patchValue({
      parnterName: selectedPartner,
      productName: offerForm.productName,
      offerTitle: offerForm.offerTitle,
      offerTag: offerForm.offerTag,
      offerDescription: offerForm.offerDescription,
      termsAndCondition: offerForm.termsAndConditions,
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

  submitForm() {

    const form = this.productForm.value;

    const applicableChannels =
      form.all ? 'All' :
        form.mobile ? 'Mobile' :
          form.web ? 'Web' : '';

    const payload = {
      discountId: this.isEditMode ? this.data.editData.discountId : null,

      partnerName: form.partnerName?.companyName,
      productName: form.productName,
      discountTitle: form.discountTitle,
      discountDescription: form.discountDescription,
      discountType: form.discountType?.categoryCode,
      discountValue: Number(form.discountValue),
      termsAndConditions: form.termsAndCondition,

      applicableChannels: applicableChannels,

      customerSegment: form.customerSegment?.segmentNameEN,

      startDate: this.formatDateTime(form.startDate),
      endDate: this.formatDateTime(form.endDate),

      usageLimitPerUser: Number(form.usageLimitPerUser),
      totalUsageLimit: Number(form.totalUsageLimit),

      isActive: form.status ? 'Y' : 'N',

      createdBy: 'admin',
      createdDate: this.getCurrentDateTime(),
      lastUpdatedBy: null,
      lastUpdatedDate: this.getCurrentDateTime()
    };

    console.log('payload', payload);
    this.adminCenterService.createDiscountMmt(payload).subscribe((res: any) => {

    })
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


  getCurrentDateTime(): string {
    const d = new Date();

    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();

    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const seconds = String(d.getSeconds()).padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }


  closeForm() { }
}