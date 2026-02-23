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
import { forkJoin } from 'rxjs';

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
    this.isEditMode = !!this.data?.editData;

    forkJoin({
      domains: this.adminCenterService.getBoDropdown()
    }).subscribe((res: any) => {

      this.getDomainMgmt = res.domains?.data;

      if (this.isEditMode) {
        this.loadEditData(this.data.editData);
      }
    });
  }

  loadEditData(p: any) {
    if (!this.getDomainMgmt) return;

    // 1️⃣ Find selected domain
    const selectedDomain = this.getDomainMgmt.find(
      (d: any) => d.name === p.domainId
    );

    if (!selectedDomain) return;

    this.domainId = selectedDomain.name;

    // 2️⃣ Load products based on domain
    const payload = {
      domainId: selectedDomain.name
    };

    this.adminCenterService.getMenuDropDown(payload).subscribe((res: any) => {

      this.getMenuDropdown = res.data;

      // 3️⃣ Find selected product
      const selectedProduct = this.getMenuDropdown.find(
        (prod: any) => prod.name === p.productCode
      );

      // 4️⃣ Patch form
      this.productForm.patchValue({
        domain: selectedDomain,
        product: selectedProduct,
        subProductCode: p.subProductCode,
        subProductDescription: p.subProductDesc,
        subProductURL: p.subProductUrl,
        priority: p.priority,
        status: p.status === 'ACT'
      });
    });
  }

  patchForm(p: any) {
    console.log('Edit Data:', p);

    const selectedDomain = this.getDomainMgmt?.find(
      (d: any) => d.name === p.domainId
    );

    if (selectedDomain) {
      this.domainId = selectedDomain.name;

      // Load product dropdown based on domain
      const payload = {
        domainId: selectedDomain.name
      };

      this.adminCenterService.getMenuDropDown(payload).subscribe((res: any) => {
        this.getMenuDropdown = res.data;

        const selectedProduct = this.getMenuDropdown?.find(
          (prod: any) => prod.name === p.productCode
        );

        this.productForm.patchValue({
          domain: selectedDomain,
          product: selectedProduct,
          subProductCode: p.subProductCode,
          subProductDescription: p.subProductDesc,
          subProductURL: p.subProductUrl,
          priority: p.priority,
          status: p.status === 'ACT'
        });
      });
    }
  }

  submitForm() {
    const form = this.productForm.value;

    const payload = {
      domain: this.isEditMode
        ? this.data?.editData?.domainId
        : form.domain.name,

      productCode: form.product.name,

      subProductCode: form.subProductCode,
      subProductDesc: form.subProductDescription,
      subProductUrl: form.subProductURL,
      priority: form.priority,
      status: form.status ? 'ACT' : 'IAC',
      action: this.isEditMode ? 'UPDATE' : 'ADD'
    };

    this.adminCenterService
      .createWorkFlowSubProduct(payload)
      .subscribe((res: any) => {

        if (res?.status.code === "000000") {
          this.commonToaster.showSuccess(res.status.description);
          this.dialogRef.close('retaiClose');

          this.adminCenterService.trigger(
            this.isEditMode
              ? this.data?.editData?.domainId
              : form.domain.name
          );
        }
      });
  }

  getDomainMgmtApi() {
    this.adminCenterService.getBoDropdown().subscribe((res: any) => {
      this.getDomainMgmt = res.data;
    })
  }

  closeForm() { }

  selectDomain(domain: any) {
    this.domainId = domain.name;

    const payload = {
      domainId: domain.name
    };

    this.adminCenterService.getMenuDropDown(payload)
      .subscribe((res: any) => {
        this.getMenuDropdown = res.data;

        // clear product when domain changes
        this.productForm.patchValue({
          product: ''
        });
      });
  }
}
