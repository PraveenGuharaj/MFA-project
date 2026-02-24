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
import { forkJoin } from 'rxjs';


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
      hierarchyRoles: this.fb.array([]),
      status: ['']


    });
    const count = this.isEditMode ? 1 : this.hierarchyList.length;

    for (let i = 0; i < count; i++) {
      this.hierarchyRoles.push(this.fb.control(''));
    }
  }



  ngOnInit() {
    this.isEditMode = !!this.data?.editData;

    // Clear first (safety)
    this.hierarchyRoles.clear();

    const count = this.isEditMode ? 1 : this.hierarchyList.length;

    for (let i = 0; i < count; i++) {
      this.hierarchyRoles.push(this.fb.control(''));
    }

    forkJoin({
      domains: this.adminCenterService.getBoDropdown()
    }).subscribe((res: any) => {
      this.getDomain = res.domains?.data;

      if (this.isEditMode) {
        this.loadEditData(this.data.editData);
      }
    });
  }

  loadEditData(data: any) {

    const selectedDomain = this.getDomain.find(
      (d: any) => d.name === data.domainId
    );

    this.productForm.patchValue({
      domain: selectedDomain,
      description: data.description,
      approvalFlow: data.userRoleHierarchy === 'Yes' ? 'H' : 'NH',
      status: data.status === 'ACT'


    });

    this.hierarchyRoles.clear();   // remove existing

    // Add only ONE control in edit mode
    this.hierarchyRoles.push(
      this.fb.control(data.userLevelName || '')
    );
  }


  get hierarchyRoles(): FormArray {
    return this.productForm.get('hierarchyRoles') as FormArray;
  }

  submitForm() {

    const formValue = this.productForm.value;

    const payload = formValue.hierarchyRoles
      .filter((role: string) => role && role.trim() !== '')
      .map((role: string) => ({

        roleId: this.isEditMode
          ? this.data.editData.roleId
          : '',

        userLevelName: role,
        userRoleHierarchy: formValue.approvalFlow === 'H' ? 'Yes' : 'No',
        domainId: formValue.domain.name,

        description: formValue.description,
        status: formValue.status === true ? 'ACT' : 'IAC',
      }));

    console.log('Final Payload:', payload);

    if (this.isEditMode) {

      this.adminCenterService.createRoleMgmt(payload).subscribe((res: any) => {

        if (res?.status.code == "000000") {
          this.commonToaster.showSuccess(res.status.description);
          this.dialogRef.close('retaiClose');
          this.adminCenterService.trigger(formValue.domain.name);
        }
      });

    } else {

      this.adminCenterService.createRoleMgmt(payload).subscribe((res: any) => {

        if (res?.status.code == "000000") {
          this.commonToaster.showSuccess(res.status.description);
          this.dialogRef.close('retaiClose');
          this.adminCenterService.trigger(formValue.domain.name);
        }
      });
    }
  }

  closeForm() { }

  getDomainApi() {
    this.adminCenterService.getBoDropdown().subscribe((res: any) => {
      this.getDomain = res.data;
    })
  }

  get visibleHierarchyList() {
    return this.isEditMode ? [1] : this.hierarchyList;
  }

}
