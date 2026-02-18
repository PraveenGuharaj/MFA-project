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
  imagePreview: string | null = null;
  imageName: any;


  iphoneCertFileName: string = '';
  iphoneCertBase64: any = '';
  imageEnFileName: any;
  imageArFileName: any;
  imageEnBase64: any;
  imageArBase64: any;




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


  ngOnInit() {
    if (this.data?.editData) {
      this.isEditMode = true;
      this.patchForm(this.data.editData);
    }
  }
  patchForm(form: any) {
    console.log('form', this.data);

    this.productForm.patchValue({
      groupNameEn: form.groupInEnglish,
      groupNameAr: form.groupInArabic,
      rowNumber: form.rowNumber,
      englishName: form.englishName,
      arabicName: form.arabicName,
      englishLink: form.englishLink,
      arabicLink: form.arabicLink,
      status: form.status ? 'Y' : 'N'
    });

    // existing image names
    this.imageEnFileName = form.imageName || 'Existing image';
    this.imageArFileName = form.productImageAr || 'Existing image';

    this.imageEnBase64 = form.imageEn;
    this.imageArBase64 = form.imageAr;

    // Add this for iphone certificate
    this.iphoneCertFileName = form.iphoneCertFileName || 'Existing certificate';
    this.iphoneCertBase64 = form.iphoneCertFile;
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

      // FIXED IMAGE PART
      imageName: this.imageEnFileName || '',
      imageBase64: this.imageEnBase64 || '',
      imageAr: this.imageArBase64 || '',

      followUsId: this.isEditMode
        ? this.data?.editData.followUsId
        : 0
    };

    console.log('payload', payload);
    console.log('payload', payload);
    if (this.isEditMode) {
      this.adminCenterService.updateLinkConfig(payload).subscribe((res: any) => {
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
      this.iphoneCertFileName = file.name;

      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        this.imageEnBase64 = base64.split(',')[1]; // 🔥 remove prefix
      };

      reader.readAsDataURL(file);

      this.productForm.patchValue({
        iphonePushCertificate: file
      });
    }
  }


  closeForm() { }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  closeModal() {
    this.dialogRef.close();
  }


  onImageSelect(event: any) {
    const file = event.target.files[0];

    if (file) {
      this.imageEnFileName = file.name;

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        const base64 = reader.result as string;

        //  REMOVE data:image/... prefix
        this.imageEnBase64 = base64.split(',')[1];
      };
    }
  }


}
