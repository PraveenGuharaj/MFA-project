import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  selector: 'app-work-flow-add-subproudct',
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
  templateUrl: './work-flow-add-subproudct.html',
  styleUrl: './work-flow-add-subproudct.scss',
})
export class WorkFlowAddSubproudct {
  productForm!: FormGroup;
  isEditMode = false;

  // Dropdown Options
  channels = ["SMS", "Email", "App", "Web"];
  categories = ["Login", "Transaction", "Reset", "Verification"];
  domains = ["Banking", "Insurance", "Fintech", "Wallet"];
  blockDurations = ["30 Sec", "1 Min", "2 Min", "5 Min"];
  types = ["Primary", "Secondary", "Backup"];
  deliveryModesOptions = ["SMS", "Email", "WhatsApp", "IVR"];
  getDomainMgmt: any;
  domainId: any;
  getMenuDropdown: any;

  constructor(private fb: FormBuilder, private adminCenterService: AdminCenterService, private commonToaster: CommonToaster, private dialogRef: MatDialogRef<WorkFlowAddSubproudct>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.productForm = this.fb.group({
      domain: ['', Validators.required],
      product: ['', Validators.required],
      subProductCode: ['', Validators.required],
      subProductDescription: ['', Validators.required],
      subProductURL: ['', Validators.required],
      priority: ['', Validators.required],
      status: ['']
    });
  }

  ngOnInit() {
    this.getDomainMgmtApi();
  }

  submitForm() {
    const subProductForm = this.productForm.value;
    console.log('product', this.productForm.value)

    const payload = {
      domain: subProductForm.domain.desc,
      productCode: subProductForm.product.desc,
      subProductCode: subProductForm.subProductCode,
      subProductDesc: subProductForm.subProductDescription,
      priority: subProductForm.priority,
      status: subProductForm.status === true ? 'ACT' : 'IAC',
      subProductUrl: subProductForm.subProductURL,
      action: this.isEditMode ? 'UPDATE' : 'ADD',
    }
    // const payload = {
    //   productCode: productForm.productCode,
    //   productDesc: productForm.productDescription,
    //   priority: productForm.priority,
    //   unit: productForm.unit.unitCode,
    //   status: productForm.status === true ? 'ACT' : 'IAC',
    //   // domain: productForm.domain.name,
    //   domain: this.isEditMode ? this.data?.editData?.domain : productForm.domain.name,

    //   action: this.isEditMode ? 'UPDATE' : 'ADD',
    // }



    if (this.isEditMode) {
      this.adminCenterService.createWorkFlowProduct(payload).subscribe((res: any) => {
        console.log('ressss', res);

        if (res?.status.code == "000000") {
          this.commonToaster.showSuccess(res.status.description);
          this.dialogRef.close('retaiClose');
          this.adminCenterService.trigger(this.data?.editData?.domain);
        } else {

        }
      })
    } else {
      this.adminCenterService.createWorkFlowSubProduct(payload).subscribe((res: any) => {
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

  closeForm() { }

  selectDomain(domainId: any) {
    console.log('data', domainId);
    this.domainId = domainId.name;
    const payload = {
      domainId: domainId.name
    }
    this.adminCenterService.getMenuDropDown(payload).subscribe((res: any) => {
      console.log('menu', res);
      this.getMenuDropdown = res.data;
    })

  }
}
