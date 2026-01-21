import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import necessary modules for reactive forms
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { AdminCenterService } from '../../admin-center/admin-center-service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard-sub-product',
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSlideToggle
  ],
  templateUrl: './dashboard-sub-product.html',
  styleUrl: './dashboard-sub-product.scss',
})
export class DashboardSubProduct {
  productForm: FormGroup;
  isEditMode: boolean = false;

  constructor(private fb: FormBuilder, private adminCenterService: AdminCenterService, @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog, private dialogRef: MatDialogRef<DashboardSubProduct>,
  ) {
    // Initialize the form with form controls and validators
    this.productForm = this.fb.group({
      productName: ['', [Validators.required]],
      subProductName: ['', Validators.required],
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
      specificFeatures: ['', [Validators.required]],
      pricingAndCharges: ['', [Validators.required]],
    });
  }

  buildForm() {
    this.productForm = this.fb.group({
      productName: ['', [Validators.required]],
      subProductName: ['', Validators.required],
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
      specificFeatures: ['', [Validators.required]],
      pricingAndCharges: ['', [Validators.required]],
    });
  }

  patchForm(p: any) {
    this.productForm.patchValue({
      productName: p.productName,
      subProductName: p.name,
      description: p.description,
      category: p.name,
      priority: p.priority,
      eligibility: p.screenId,
      screenName: p.screenId,
      fees: p.segmentId,
      segmentCode: p.images?.[0]?.filePath,
      imageURL: p.images?.[0].filePath,
      channel: p.channelIds?.[0],
      imageType: p.status === 'ACT',
      status: '',
      specificFeatures: p.specificFeatures,
      pricingAndCharges: p.pricingCharges
    });
  }

  ngOnInit(): void {
    console.log('datazzz', this.data);

    this.buildForm();

    if (this.data?.editData) {
      this.isEditMode = true;
      this.patchForm(this.data.editData);
    }
  }



  submitForm() {

    const v = this.productForm.value;
    console.log('dataaaaaaaa', this.data);

    if (this.data?.isEdit) {
      const payload = {
        activeFlag: 'Y',
        channelIds: [Number(v.channel)],
        createdBy: 'Admin',
        description: v.description,
        imagePath: [
          {
            imageType: 'Image',
            filePath: v.imageURL,
            priority: Number(v.priority),
            createdBy: 'Admin',
            channelSpecific: 'N',
            activeFlag: 'Y'
          }
        ],
        name: v.subProductName,
        pricingCharges: v.pricingAndCharges,
        priority: Number(v.priority),
        // productId: this.data.productId,
        productId: this.data.editData.productId,
        screenId: v.screenName,
        specificFeatures: v.specificFeatures,
        status: v.status ? 'ACT' : 'INA',
        subProductId: this.data.editData.subProductId
      };

      this.adminCenterService.updateSubProduct(payload).subscribe((res: any) => {
        console.log('zzzzzz', res);
        if (res?.status.code == "000000") {
          this.dialogRef.close('SUCCESS');
          // this.dialog.closeAll();
        }
      })
      return
    }
    console.log('v', v)
    const payload = {
      // productId: Number(v.productName), // or pass from parent selection
      productId: '184', // or pass from parent selection
      screenId: v.screenName,
      name: v.subProductName,
      description: v.description,
      priority: Number(v.priority),
      status: v.status ? 'ACT' : 'INA',
      specificFeatures: v.specificFeatures,
      pricingCharges: v.pricingAndCharges,
      activeFlag: 'Y',
      createdBy: 'Admin',

      channelIds: [Number(v.channel)],

      imagePath: [
        {
          imageType: 'Image',
          filePath: v.imageURL,
          priority: Number(v.priority),
          createdBy: 'Admin',
          channelSpecific: 'N',
          activeFlag: 'Y'
        }
      ],
      subProductId: '178'
    };



    console.log('FINAL PAYLOAD', payload);

    this.adminCenterService.createSubProduct(payload).subscribe({
      next: res => {
        console.log('CREATE SUCCESS', res);
        this.closeForm();
      },
      error: err => {
        console.error('CREATE FAILED', err);
      }
    });
  }


  closeForm() {
  }
}
