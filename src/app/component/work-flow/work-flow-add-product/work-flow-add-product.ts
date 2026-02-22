import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { AdminCenterService } from '../../admin-center/admin-center-service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonToaster } from '../../../shared/services/common-toaster';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-work-flow-add-product',
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  templateUrl: './work-flow-add-product.html',
  styleUrl: './work-flow-add-product.scss',
})
export class WorkFlowAddProduct {
  productForm!: FormGroup;

  // Dropdown Options
  channels = ["SMS", "Email", "App", "Web"];
  categories = ["Login", "Transaction", "Reset", "Verification"];
  domains = ["Banking", "Insurance", "Fintech", "Wallet"];
  blockDurations = ["30 Sec", "1 Min", "2 Min", "5 Min"];
  types = ["Primary", "Secondary", "Backup"];
  deliveryModesOptions = ["SMS", "Email", "WhatsApp", "IVR"];
  getDomainMgmt: any;
  getUnits: any;
  isEditMode = false;


  constructor(private fb: FormBuilder, private adminCenterService: AdminCenterService, private commonToaster: CommonToaster, private dialogRef: MatDialogRef<WorkFlowAddProduct>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.productForm = this.fb.group({
      domain: ['', Validators.required],
      unit: ['', Validators.required],
      productCode: ['', Validators.required],
      productDescription: ['', Validators.required],
      priority: ['', Validators.required],
      status: ['']

    });
  }

  ngOnInit() {
    this.isEditMode = !!this.data?.editData;

    this.getDomainMgmtApi();
    this.getUnitsApi();
    forkJoin({
      domains: this.adminCenterService.getBoDropdown(),
      units: this.adminCenterService.getUnits(),
    }).subscribe((res: any) => {

      this.getDomainMgmt = res.domains?.data;
      this.getUnits = res.units?.data?.units;

      if (this.isEditMode) {
        this.patchForm(this.data.editData);
      }
    });
  }



  patchForm(p: any) {
    console.log('data', this.data);


    if (!this.getDomainMgmt || !this.getUnits) return;

    const selectedDomain = this.getDomainMgmt.find(
      (d: any) => d.domainId === p.domainId
    );

    const selectedUnit = this.getUnits.find(
      (u: any) => u.unitCode === p.unit
    );

    this.productForm.patchValue({
      domain: selectedDomain,
      unit: selectedUnit,
      productCode: p.productCode,
      productDescription: p.productDescription,
      priority: p.priority,
      status: p.status === 'ACT'
    });
  }


  submitForm() {
    const productForm = this.productForm.value;
    console.log('product', this.productForm.value)
    const payload = {
      productCode: productForm.productCode,
      productDesc: productForm.productDescription,
      priority: productForm.priority,
      unit: productForm.unit.unitCode,
      status: productForm.status === true ? 'ACT' : 'IAC',
      // domain: productForm.domain.name,
      domain: this.isEditMode ? this.data?.editData?.domain : productForm.domain.name,

      action: this.isEditMode ? 'UPDATE' : 'ADD',
    }



    if (this.isEditMode) {
      this.adminCenterService.createWorkFlowProduct(payload).subscribe((res: any) => {
        console.log('ressss', res);

        if (res?.status.code == "000000") {
          this.commonToaster.showSuccess('Otp created successfully');
          this.dialogRef.close('retaiClose');
          this.adminCenterService.trigger(this.data?.editData?.domain);
        } else {

        }
      })
    } else {
      this.adminCenterService.createWorkFlowProduct(payload).subscribe((res: any) => {
        console.log('create', res);
        if (res?.status.code == "000000") {
          this.commonToaster.showSuccess(res.status.description);
          this.dialogRef.close('retaiClose');
          this.adminCenterService.trigger(this.productForm.value.domain.name);
        }

      })
    }
    // if (this.productForm.valid) {
    // } else {
    //   this.productForm.markAllAsTouched();
    // }
  }

  getDomainMgmtApi() {
    this.adminCenterService.getBoDropdown().subscribe((res: any) => {
      this.getDomainMgmt = res.data;
    })
  }


  getUnitsApi() {
    this.adminCenterService.getUnits().subscribe((res: any) => {
      this.getUnits = res.data.units;
    })
  }

  closeForm() { }
}
