import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AdminCenterService } from '../admin-center-service';
import { CommonToaster } from '../../../shared/services/common-toaster';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-admin-center-add-product',
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSlideToggleModule
  ],
  templateUrl: './admin-center-add-product.html',
  styleUrl: './admin-center-add-product.scss',
})
export class AdminCenterAddProduct {
  productForm!: FormGroup;

  // Dropdown Options
  channels = ["SMS", "Email", "App", "Web"];
  categories = ["Login", "Transaction", "Reset", "Verification"];
  domains = ["Banking", "Insurance", "Fintech", "Wallet"];
  blockDurations = ["30 Sec", "1 Min", "2 Min", "5 Min"];
  types = ["Primary", "Secondary", "Backup"];
  deliveryModesOptions = ["SMS", "Email", "WhatsApp", "IVR"];
  isEditMode = false;
  imageEnBase64: string | null = null;
  imageArBase64: any;
  imageEnFileName: any;
  imageArFileName: any;

  constructor(private fb: FormBuilder, private adminCenterService: AdminCenterService,
    private commonToaster: CommonToaster, private dialogRef: MatDialogRef<AdminCenterAddProduct>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.productForm = this.fb.group({

      productNameEn: ['', Validators.required],
      productNameAr: ['', Validators.required],
      productDescriptionEn: ['', Validators.required],
      productDescriptionAr: ['', Validators.required],
      imageEn: ['', Validators.required],
      imageAr: ['', Validators.required],
      priorityOrder: ['', Validators.required],
      enable: ['', Validators.required]
    });
  }

  ngOnInit() {
    if (this.data?.editData) {
      this.isEditMode = true;
      this.patchForm(this.data.editData);
    }
  }

  submitForm() {
    // if (!this.productForm.valid) {
    //   this.productForm.markAllAsTouched();
    //   return;
    // }

    const form = this.productForm.value;

    const notificationDeliveries: any[] = [];


    console.log('form', this.data);
    const payload = {
      productNameEn: form.productNameEn,
      productNameAr: form.productNameAr,
      productDescriptionEn: form.productDescriptionEn,
      productDescriptionAr: form.productDescriptionAr,
      imageEn: this.imageEnBase64,
      imageAr: this.imageArBase64,
      enabled: form.enable ? 'Y' : 'N',
      priorityOrder: form.priorityOrder,
      action: this.isEditMode ? 'Update' : 'Add',
      id: this.data?.editData?.id
    };



    if (this.isEditMode) {
      this.adminCenterService.updateProduct(payload).subscribe((res: any) => {
        console.log('ressss', res);

        if (res?.status.code == "000000") {
          this.commonToaster.showSuccess('Product created successfully');
          this.dialogRef.close('retaiClose');
        } else {

        }
      })
    } else {
      this.adminCenterService.createAdminProduct(payload).subscribe((res: any) => {
        console.log('create', res);
        if (res?.status.code == "000000") {
          this.commonToaster.showSuccess('Product created successfully');
          this.dialogRef.close('retaiClose');
          this.adminCenterService.trigger();
        }

      })
    }



    // API call
    // this.adminCenterService.addLicense(payload).subscribe(...)
  }

  onImageSelect(event: any, type: 'EN' | 'AR') {
    const file = event.target.files[0];
    if (!file) return;

    // set file name
    if (type === 'EN') {
      this.imageEnFileName = file.name;
    } else {
      this.imageArFileName = file.name;
    }

    // convert to base64
    const reader = new FileReader();
    reader.onload = () => {
      if (type === 'EN') {
        this.imageEnBase64 = reader.result as string;
      } else {
        this.imageArBase64 = reader.result as string;
      }
    };
    reader.readAsDataURL(file);
  }

  patchForm(form: any) {
    console.log('form', form)
    this.productForm.patchValue({
      productNameEn: form.productNameEn,
      productNameAr: form.productNameAr,
      productDescriptionEn: form.productDescriptionEn,
      productDescriptionAr: form.productDescriptionAr,
      priorityOrder: form.priorityOrder,
      enable: form.enabled === 'Y'
    });

    // show existing image names
    this.imageEnFileName = form.productImageEn || 'Existing image';
    this.imageArFileName = form.productImageAr || 'Existing image';

    // keep existing base64 (or URL if backend sends it)
    this.imageEnBase64 = form.imageEn;
    this.imageArBase64 = form.imageAr;
  }


  closeForm() { }
}
