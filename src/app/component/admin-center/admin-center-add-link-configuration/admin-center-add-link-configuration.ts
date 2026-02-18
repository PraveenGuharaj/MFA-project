import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AdminCenterService } from '../admin-center-service';
import { CommonToaster } from '../../../shared/services/common-toaster';

@Component({
  selector: 'app-admin-center-add-link-configuration',
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSlideToggleModule
  ],
  templateUrl: './admin-center-add-link-configuration.html',
  styleUrl: './admin-center-add-link-configuration.scss',
})
export class AdminCenterAddLinkConfiguration {
  productForm!: FormGroup;

  // Dropdown Options
  channels = ["SMS", "Email", "App", "Web"];
  categories = ["Login", "Transaction", "Reset", "Verification"];
  domains = ["Banking", "Insurance", "Fintech", "Wallet"];
  blockDurations = ["30 Sec", "1 Min", "2 Min", "5 Min"];
  types = ["Primary", "Secondary", "Backup"];
  deliveryModesOptions = ["SMS", "Email", "WhatsApp", "IVR"];
  showPassword: boolean = false;
  imageBase64: string = '';
  imageFileName: string = '';
  isEditMode = false;


  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<AdminCenterAddLinkConfiguration>,
    private adminCenterService: AdminCenterService, private commonToaster: CommonToaster,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.productForm = this.fb.group({
      groupNameEn: ['', Validators.required],
      groupNameAr: ['', Validators.required],
      rowNumber: ['', Validators.required],
      englishName: ['', Validators.required],
      arabicName: ['', Validators.required],
      englishLink: ['', Validators.required],
      arabicLink: ['', Validators.required],
      iphonePushCertificate: ['', Validators.required],
      status: ['']

    });
  }

  submitForm() {
    const form = this.productForm.value;

    const payload = {
      englishName: form.englishName || '',
      arabicName: form.arabicName || '',
      englishLink: form.englishLink || '',
      arabicLink: form.arabicLink || '',
      groupInEnglish: form.groupNameEn || '',
      groupInArabic: form.groupNameAr || '',
      status: form.status ? 'Y' : 'N',
      rowNumber: Number(form.rowNumber) || 0,
      imageName: this.imageFileName || '',
      imageBase64: this.imageBase64 || ''
    };

    console.log('payload', payload);
    if (this.isEditMode) {
      this.adminCenterService.updateLicense(payload).subscribe((res: any) => {
        console.log('ressss', res);

        if (res?.status.code == "000000") {
          this.commonToaster.showSuccess(res.status.description);
          this.dialogRef.close('retaiClose');
        } else {

        }
      })
    } else {
      this.adminCenterService.createLinkConfig(payload).subscribe((res: any) => {
        console.log('create', res);
        if (res?.status.code == "000000") {
          this.commonToaster.showSuccess(res.status.description);
          this.dialogRef.close('retaiClose');
          this.adminCenterService.trigger();
        }

      })
    }
  }


  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (file) {
      this.imageFileName = file.name;

      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;

        // Remove data:image/...;base64, prefix
        this.imageBase64 = base64String.split(',')[1];
      };

      reader.readAsDataURL(file);
    }
  }

  closeForm() { }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  closeModal() {
    this.dialogRef.close();
  }
}
