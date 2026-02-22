import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AdminCenterService } from '../../admin-center/admin-center-service';
import { CommonToaster } from '../../../shared/services/common-toaster';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-work-flow-add-domain',
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatCheckboxModule
  ],
  templateUrl: './work-flow-add-domain.html',
  styleUrl: './work-flow-add-domain.scss',
})
export class WorkFlowAddDomain {
  productForm!: FormGroup;
  isEditMode = false;


  // Dropdown Options
  channels = ["SMS", "Email", "App", "Web"];
  categories = ["Login", "Transaction", "Reset", "Verification"];
  domains = ["Banking", "Insurance", "Fintech", "Wallet"];
  blockDurations = ["30 Sec", "1 Min", "2 Min", "5 Min"];
  types = ["Primary", "Secondary", "Backup"];
  deliveryModesOptions = ["SMS", "Email", "WhatsApp", "IVR"];

  constructor(private fb: FormBuilder, private adminCenterService: AdminCenterService,
    private commonToaster: CommonToaster, private dialogRef: MatDialogRef<WorkFlowAddDomain>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.productForm = this.fb.group({
      domainId: ['', Validators.required],
      domainDescription: ['', Validators.required],
      priority: ['', Validators.required],
      status: [''],
    });
  }

  ngOnInit() {
    if (this.data?.editData) {
      this.isEditMode = true;
      this.patchForm(this.data.editData);
    }
  }

  submitForm() {
    console.log('adminCenterService', this.productForm.value);
    const domainForm = this.productForm.value;
    const payload = {
      domainId: domainForm.domainId,
      domainDesc: domainForm.domainDescription,
      priority: domainForm.priority,
      action: this.isEditMode ? 'UPDATE' : 'ADD',
      status: domainForm.status ? 'ACT' : 'INA',
    }

    if (this.isEditMode) {
      this.adminCenterService.createDomainMgmt(payload).subscribe((res: any) => {
        console.log('ressss', res);

        if (res?.status.code == "000000") {
          this.commonToaster.showSuccess(res.status.description);
          this.dialogRef.close('retaiClose');
        } else {

        }
      })
    } else {
      this.adminCenterService.createDomainMgmt(payload).subscribe((res: any) => {
        console.log('create', res);
        if (res?.status.code == "000000") {
          this.commonToaster.showSuccess(res.status.description);
          this.dialogRef.close('retaiClose');
          this.adminCenterService.trigger();
        }

      })
    }
  }


  patchForm(p: any) {
    console.log('patch', p);
    console.log('data', this.data);
    const domainForm = p;


    this.productForm.patchValue({
      domainId: domainForm.domainId,
      domainDescription: domainForm.domainDesc,
      priority: domainForm.priority,
      status: domainForm.status === 'ACT' ? true : false
    })
  }

  closeForm() { }
}
