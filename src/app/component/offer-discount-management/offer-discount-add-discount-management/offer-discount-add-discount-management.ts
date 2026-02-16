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


  ngOnInit() {
    forkJoin({
      partners: this.adminCenterService.getPartnerName(),
      discountTypes: this.adminCenterService.getDiscountType(),
      segments: this.adminCenterService.getCustomerSegement()
    }).subscribe((res: any) => {

      this.getPartnerName = res.partners;
      this.getDiscountType = res.discountTypes.data;
      this.getCustomerSegement = res.segments.data;

      if (this.data?.editData) {
        this.isEditMode = true;
        this.patchForm(this.data.editData);
      }
    });
  }


  patchForm(offerForm: any) {

    const selectedPartner = this.getPartnerName?.find(
      (p: any) => p.companyName === offerForm.partnerName
    );

    const selectedDiscountType = this.getDiscountType?.find(
      (d: any) => d.categoryCode === offerForm.discountType
    );

    const selectedSegment = this.getCustomerSegement?.find(
      (s: any) => s.segmentNameEN === offerForm.customerSegment
    );

    this.productForm.patchValue({
      partnerName: selectedPartner,
      productName: offerForm.productName,
      discountTitle: offerForm.discountTitle,
      discountDescription: offerForm.discountDescription,
      discountType: selectedDiscountType,
      discountValue: offerForm.discountValue,
      termsAndCondition: offerForm.termsAndConditions,
      usageLimitPerUser: offerForm.usageLimitPerUser,
      totalUsageLimit: offerForm.totalUsageLimit,

      startDate: this.convertToDate(offerForm.startDate),
      endDate: this.convertToDate(offerForm.endDate),

      customerSegment: selectedSegment,

      status: offerForm.isActive === 'Y',

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

    if (this.isEditMode) {
      this.adminCenterService.updateDiscountMgmt(payload).subscribe((res: any) => {
        console.log('ressss', res);

        if (res?.status.code == "000000") {
          this.commonToaster.showSuccess(res.status.description);
          this.dialogRef.close('retaiClose');
        } else {

        }
      })
    } else {
      this.adminCenterService.createDiscountMmt(payload).subscribe((res: any) => {
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