import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AdminCenterService } from '../admin-center-service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonToaster } from '../../../shared/services/common-toaster';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-center-add-faq',
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatCheckboxModule
  ],
  templateUrl: './admin-center-add-faq.html',
  styleUrl: './admin-center-add-faq.scss',
})
export class AdminCenterAddFaq {
  productForm!: FormGroup;

  // Dropdown Options
  channels = ["Mobile banking", "Internet Banking"];
  categories = ["Login", "Forget Password", "Reset", "Verification"];
  domains = ["Banking", "Insurance", "Fintech", "Wallet"];
  blockDurations = ["30 Sec", "1 Min", "2 Min", "5 Min"];
  types = ["Primary", "Secondary", "Backup"];
  deliveryModesOptions = ["SMS", "Email", "WhatsApp", "IVR"];
  showPassword: boolean = false;
  getCategoryData: any;
  getChannelData: any;
  isEditMode = false;

  constructor(private fb: FormBuilder, private adminCenterService: AdminCenterService,
    private commonToaster: CommonToaster, private dialogRef: MatDialogRef<AdminCenterAddFaq>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.productForm = this.fb.group({
      rowNumber: ['', Validators.required],
      channel: ['', Validators.required],
      category: ['', Validators.required],
      englishQuestion: ['', Validators.required],
      englishResponse: ['', Validators.required],
      addQuestion: ['', Validators.required],
      ArabicResponse: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      status: ['', Validators.required],
    });
  }


  ngOnInit() {
    this.getCategoryApi();
    this.getChannelApi();
  }

  submitForm() {
    console.log('form', this.productForm.value);


    const form = this.productForm.value;

    const payload = {
      englishQuestion: form.englishQuestion,
      englishResponse: form.englishResponse,
      arabicQuestion: form.addQuestion,          // renamed
      arabicResponse: form.ArabicResponse,       // renamed

      startDate: this.formatDate(form.startDate),
      endDate: this.formatDate(form.endDate),

      status: form.status ? 'Y' : 'N',
      faqId: 0,

      channelId: form.channel.map((c: any) => c.channelId),

      channelName: form.channel
        .map((c: any) => c.name)
        .join(', '),

      rowNumber: Number(form.rowNumber),

      categoryId: form.category?.categoryId
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
      this.adminCenterService.createFaq(payload).subscribe((res: any) => {
        console.log('create', res);
        if (res?.status.code == "000000") {
          this.commonToaster.showSuccess('Faq created successfully');
          this.dialogRef.close('retaiClose');
          this.adminCenterService.trigger();
        }

      })
    }

  }

  formatDate(date: string) {
    const d = new Date(date);

    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}:00`;
  }


  closeForm() { }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  getCategoryApi() {
    this.adminCenterService.getCategory().subscribe((res: any) => {
      this.getCategoryData = res.data;
    })
  }

  getChannelApi() {
    this.adminCenterService.getChannel().subscribe((res: any) => {
      this.getChannelData = res.data;
    })
  }
}