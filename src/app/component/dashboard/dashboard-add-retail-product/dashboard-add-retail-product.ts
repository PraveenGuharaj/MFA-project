import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import necessary modules for reactive forms
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { AdminCenterService } from '../../admin-center/admin-center-service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard-add-retail-product',
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSlideToggle
  ],
  templateUrl: './dashboard-add-retail-product.html',
  styleUrl: './dashboard-add-retail-product.scss',
})
export class DashboardAddRetailProduct {
  productForm: FormGroup;
  isEditMode = false;

  constructor(private fb: FormBuilder, private adminCenterService: AdminCenterService, @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DashboardAddRetailProduct>,
  ) {
    this.productForm = this.fb.group({
      productName: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      eligibility: ['', [Validators.required]],
      screenName: ['', [Validators.required]],
      fees: ['', [Validators.required]],
      segmentCode: ['', [Validators.required]],
      imageURL: ['', [Validators.required]],
      channel: ['', [Validators.required]],
      imageType: ['', [Validators.required]],
      status: [''],
    });
  }
  // submitForm() {
  //   if (this.productForm.valid) {
  //   } else {
  //   }
  // }

  closeForm() {
  }


  ngOnInit(): void {
    this.buildForm();

    if (this.data?.editData) {
      this.isEditMode = true;
      this.patchForm(this.data.editData);
    }
  }


  buildForm() {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      priority: ['', Validators.required],
      eligibility: ['', Validators.required],
      screenName: ['', Validators.required],
      fees: ['', Validators.required],
      segmentCode: ['', Validators.required],
      imageURL: ['', Validators.required],
      channel: ['', Validators.required],
      imageType: ['', Validators.required],
      status: [true]
    });
  }

  patchForm(p: any) {
    this.productForm.patchValue({
      productName: p.name,
      description: p.description,
      category: p.categoryId,
      priority: p.priority,
      eligibility: p.eligibilityCriteria,
      screenName: p.screenId,
      fees: p.feesCharges,
      segmentCode: p.segmentId,
      imageURL: p.images?.[0]?.filePath,
      channel: p.channelIds?.[0],
      imageType: p.images?.[0]?.imageType,
      status: p.status === 'ACT'
    });
  }



  // submitForm() {
  //   // if (this.productForm.invalid) return;

  //   const v = this.productForm.value;

  //   const payload = {
  //     categoryId: Number(v.category),
  //     code: `PROD${Date.now()}`,
  //     name: v.productName,
  //     description: v.description,
  //     priority: Number(v.priority),
  //     status: v.status ? 'ACT' : 'INACT',
  //     segmentId: v.segmentCode ? Number(v.segmentCode) : null,
  //     screenId: v.screenName || '',
  //     eligibilityCriteria: v.eligibility || '',
  //     feesCharges: v.fees || '',
  //     channelIds: [Number(v.channel)],
  //     images: [
  //       {
  //         imageType: v.imageType || 'Image',
  //         filePath: v.imageURL,
  //         channelSpecific: 'N',
  //         priority: 1,
  //         activeFlag: 'Y'
  //       }
  //     ]
  //   };

  //   console.log('CREATE PAYLOAD ', payload);

  //   this.adminCenterService.createProduct(payload).subscribe({
  //     next: res => {
  //       console.log('SUCCESS', res);
  //       this.closeForm();
  //     },
  //     error: err => {
  //       console.error('BACKEND ERROR ', err.error);
  //     }
  //   });
  // }


  //   submitForm() {
  //   if (this.productForm.invalid) return;

  //   const v = this.productForm.value;

  //   const payload:any = {
  //     categoryId: (v.category),
  //     name: v.productName,
  //     description: v.description,
  //     priority: (v.priority),
  //     status: v.status ? 'ACT' : 'INACT',
  //     segmentId: (v.segmentCode),
  //     screenId: v.screenName,
  //     eligibilityCriteria: v.eligibility,
  //     feesCharges: v.fees,
  //     channelIds: [(v.channel)],
  //     images: [{
  //       imageType: v.imageType,
  //       filePath: v.imageURL,
  //       channelSpecific: 'N',
  //       priority: 1,
  //       activeFlag: 'Y'
  //     }]
  //   };

  //   if (this.isEditMode) {
  //     this.adminCenterService
  //       .updateRetailProduct(this.data.editData.productId, payload)
  //       .subscribe(() => this.dialogRef.close(true));
  //   } else {
  //     payload['code'] = `PROD${Date.now()}`;
  //     this.adminCenterService
  //       .createProduct(payload)
  //       .subscribe(() => this.dialogRef.close(true));
  //   }
  // }


  submitForm() {
    if (this.productForm.invalid) return;

    const v = this.productForm.value;

    const payload = {
      productId: this.isEditMode,
      categoryId: Number(v.category),
      name: v.productName,
      description: v.description,
      priority: Number(v.priority),
      status: v.status ? 'ACT' : 'INACT',
      segmentId: Number(v.segmentCode),
      screenId: v.screenName,
      eligibilityCriteria: v.eligibility,
      feesCharges: v.fees,
      channelIds: [Number(v.channel)],
      images: [{
        imageType: v.imageType,
        filePath: v.imageURL,
        channelSpecific: 'N',
        priority: 1,
        activeFlag: 'Y'
      }]
    };

    if (this.isEditMode) {
      this.adminCenterService
        .updateRetailProduct(payload)
        .subscribe(() => this.dialogRef.close(true));
    }
    // else {
    //   payload['code'] = `PROD${Date.now()}`;
    //   this.adminCenterService
    //     .createProduct(payload)
    //     .subscribe(() => this.dialogRef.close(true));
    // }
  }



}
