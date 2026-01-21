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


  submitForm() {
    // if (this.productForm.invalid) return;
    const v = this.productForm.value;
    console.log('data', v)

    const payload = {
      categoryId: Number(21),
      channelIds: [Number(3)],
      code: this.data?.editData?.code,
      createdBy: '',
      description: v.description,
      eligibilityCriteria: v.eligibility,
      feesCharges: v.fees,
      images: [{
        imageType: v.imageType,
        filePath: v.imageURL,
        channelSpecific: 'N',
        priority: 1,
        activeFlag: 'Y'
      }],
      name: v.productName,
      priority: Number(v.priority),
      productId: this.data?.editData?.productId,
      screenId: v.screenName,
      segmentId: Number(v.segmentCode),
      status: v.status ? 'ACT' : 'INACT',
    };

    if (this.isEditMode) {
      this.adminCenterService.updateRetailProduct(payload).subscribe((res: any) => {
        console.log('ressss', res);

        if (res?.status.code == "SUCCESS") {
          this.dialogRef.close('retaiClose');
        }
      })
    } else {
      this.adminCenterService.createProduct(payload).subscribe((res: any) => {
        console.log('create', res);
        if (res?.status.code == "SUCCESS") {
          this.dialogRef.close('retaiClose');
          this.adminCenterService.trigger(); // 🔥 notify table
        }

      })
    }
  }



}
