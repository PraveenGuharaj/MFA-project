import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminCenterService } from '../../admin-center/admin-center-service';
import { CommonToaster } from '../../../shared/services/common-toaster';


@Component({
  selector: 'app-work-flow-add-role-management',
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
  templateUrl: './work-flow-add-role-management.html',
  styleUrl: './work-flow-add-role-management.scss',
})
export class WorkFlowAddRoleManagement {
  productForm!: FormGroup;
  hierarchyList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


  // Dropdown Options
  channels = ["SMS", "Email", "App", "Web"];
  categories = ["Login", "Transaction", "Reset", "Verification"];
  domains = ["Banking", "Insurance", "Fintech", "Wallet"];
  blockDurations = ["30 Sec", "1 Min", "2 Min", "5 Min"];
  types = ["Primary", "Secondary", "Backup"];
  deliveryModesOptions = ["SMS", "Email", "WhatsApp", "IVR"];
  isEditMode = false;
  getDomain: any;

  constructor(private fb: FormBuilder, private adminCenterService: AdminCenterService, private commonToaster: CommonToaster, private dialogRef: MatDialogRef<WorkFlowAddRoleManagement>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.productForm = this.fb.group({
      domain: ['', Validators.required],
      description: ['', Validators.required],
      approvalFlow: ['', Validators.required],
      hierarchyRoles: this.fb.array([])


    });

    this.hierarchyList.forEach(() => {
      this.hierarchyRoles.push(this.fb.control(''));
    });
  }

  ngOnInit() {
    this.getDomainApi();
  }

  get hierarchyRoles(): FormArray {
    return this.productForm.get('hierarchyRoles') as FormArray;
  }

  submitForm() {

    const formValue = this.productForm.value;

    const payload = formValue.hierarchyRoles
      .filter((role: string) => role && role.trim() !== '') // remove empty rows
      .map((role: string, index: number) => ({
        roleId: '',
        userLevelName: role,
        userRoleHierarchy: formValue.approvalFlow === 'H' ? 'Yes' : 'No',
        domainId: formValue.domain.name,
        description: formValue.description
      }));

    console.log('Final Payload:', payload);

    if (this.isEditMode) {
      this.adminCenterService.createChildProduct(payload).subscribe((res: any) => {
        console.log('ressss', res);

        if (res?.status.code == "000000") {
          console.log('data', this.data);

          this.commonToaster.showSuccess(res.status.description);
          this.dialogRef.close('retaiClose');
          this.adminCenterService.trigger(this.productForm.value.domain.name);
        } else {

        }
      })
    } else {
      this.adminCenterService.createRoleMgmt(payload).subscribe((res: any) => {
        console.log('create', res);
        if (res?.status.code == "000000") {
          this.commonToaster.showSuccess(res.status.description);
          this.dialogRef.close('retaiClose');
          this.adminCenterService.trigger(this.productForm.value.domain.name);
        }

      })
    }

  }

  closeForm() { }

  getDomainApi() {
    this.adminCenterService.getBoDropdown().subscribe((res: any) => {
      this.getDomain = res.data;
    })
  }

}
