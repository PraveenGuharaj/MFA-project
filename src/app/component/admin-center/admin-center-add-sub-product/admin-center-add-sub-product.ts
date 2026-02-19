import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AdminCenterService } from '../admin-center-service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonToaster } from '../../../shared/services/common-toaster';

@Component({
  selector: 'app-admin-center-add-sub-product',
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSlideToggleModule
  ],
  templateUrl: './admin-center-add-sub-product.html',
  styleUrl: './admin-center-add-sub-product.scss',
})
export class AdminCenterAddSubProduct {
  productForm!: FormGroup;

  // Dropdown Options
  channels = ["SMS", "Email", "App", "Web"];
  categories = ["Login", "Transaction", "Reset", "Verification"];
  domains = ["Banking", "Insurance", "Fintech", "Wallet"];
  blockDurations = ["30 Sec", "1 Min", "2 Min", "5 Min"];
  types = ["Primary", "Secondary", "Backup"];
  deliveryModesOptions = ["SMS", "Email", "WhatsApp", "IVR"];
  getProductApi: any;
  isEditMode = false;
  imageEnFileName: any;
  imageArFileName: any;
  imageEnBase64: any;
  imageArBase64: any;

  constructor(private fb: FormBuilder, private adminCenterService: AdminCenterService,
    private commonToaster: CommonToaster, private dialogRef: MatDialogRef<AdminCenterAddSubProduct>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.productForm = this.fb.group({
      product: ['', Validators.required],
      subProductType: ['', Validators.required],
      subProductNameEn: ['', Validators.required],

      // Newly mapped fields
      subProductNameAr: ['', Validators.required],
      subProductDescriptionAr: ['', Validators.required],
      subProductDescriptionEn: ['', Validators.required],
      imageEn: ['', Validators.required],
      imageAr: ['', Validators.required],
      priority: ['', Validators.required],
      confirmImageEn: ['', Validators.required],
      confirmImageAr: ['', Validators.required],
      status: ['', Validators.required]
    });
  }


  ngOnInit() {
    this.getSubProductAPi();
    if (this.data?.editData) {
      this.isEditMode = true;
      this.patchForm(this.data.editData);
    }
  }

  onImageSelect(event: any, type: 'EN' | 'AR') {
    const file = event.target.files[0];
    console.log('file', file)
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
    console.log('form', this.data)
    this.productForm.patchValue({
      product: form.productName,
      subProductType: form.subProductType,
      subProductNameEn: form.nameEn,
      subProductNameAr: form.nameAr,
      subProductDescriptionAr: form.descriptionAr,
      subProductDescriptionEn: form.descriptionEn,
      imageEn: form.imageEnNAME,
      imageAr: form.imageArNAME,
      priority: form.priority,

    });

    // show existing image names
    this.imageEnFileName = form.imageEnNAME || 'Existing image';
    this.imageArFileName = form.imageArNAME || 'Existing image';

    // keep existing base64 (or URL if backend sends it)
    this.imageEnBase64 = form.imageEn;
    this.imageArBase64 = form.imageAr;
  }

  submitForm() {

    const form = this.productForm.value;
    console.log('form', form)

    const payload = {
      subProductId: this.data?.isEdit?.subProductId,
      productId: form.product.id,
      subProductType: form.subProductType,
      nameEn: form.subProductNameEn,
      nameAr: form.subProductNameAr,
      descriptionEn: form.subProductDescriptionEn,
      descriptionAr: form.subProductDescriptionAr,
      imageEn: this.imageEnBase64,
      imageAr: this.imageArBase64,
      confirmImage: form.confirmImageEn,
      status: form.status ? 'Y' : 'N',
      createdBy: "",
      createdDate: new Date().toISOString().slice(0, 23),
      priority: Number(form.priority),
      confirmImageAr: form.confirmImageAr,
      imageEnNAME: this.imageEnFileName,
      imageArNAME: this.imageArFileName,
      confirmImageNAME: form.confirmImageEn,
      confirmImageArNAME: form.confirmImageAr,
      segmentTxnIds: [
        300
      ]
    }


    if (this.isEditMode) {
      this.adminCenterService.updateAdmincenterSubProduct(payload).subscribe((res: any) => {
        console.log('ressss', res);

        if (res?.status.code == "000000") {
          this.commonToaster.showSuccess('Product created successfully');
          this.dialogRef.close('retaiClose');
        } else {

        }
      })
    } else {
      this.adminCenterService.createAdminSubProduct(payload).subscribe((res: any) => {
        console.log('create', res);
        if (res?.status.code == "000000") {
          this.commonToaster.showSuccess('Sub product created successfully');
          this.dialogRef.close('retaiClose');
          this.adminCenterService.trigger();
        }

      })
    }


    console.log('FINAL PAYLOAD', payload);

    // API call
    // this.adminCenterService.addLicense(payload).subscribe(...)
  }


  closeForm() { }

  getSubProductAPi() {
    this.adminCenterService.getProductApi().subscribe((res: any) => {
      this.getProductApi = res;
    })
  }
}
