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
  selector: 'app-work-flow-add-child-product',
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
  templateUrl: './work-flow-add-child-product.html',
  styleUrl: './work-flow-add-child-product.scss',
})
export class WorkFlowAddChildProduct {
  productForm!: FormGroup;

  // Dropdown Options
  isEditMode = false;
  getDomainMgmt: any;
  domainId: any;
  getMenuDropdown: any;
  getSubMenuDropdown: any;

  constructor(private fb: FormBuilder, private adminCenterService: AdminCenterService, private commonToaster: CommonToaster, private dialogRef: MatDialogRef<WorkFlowAddChildProduct>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.productForm = this.fb.group({
      domain: ['', Validators.required],
      product: ['', Validators.required],
      subProduct: ['', Validators.required],
      childMenuProductCode: ['', Validators.required],
      childMenuDescription: ['', Validators.required],
      childMenuURL: ['', Validators.required],
      priority: ['', Validators.required],
      status: [''],

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
    console.log('pppp', p);

    if (!this.getDomainMgmt) return;

    // 1️⃣ Match domain using domainDesc (because domainId is null)
    const selectedDomain = this.getDomainMgmt.find(
      (d: any) => d.desc === p.domainDesc
    );

    if (!selectedDomain) return;

    this.domainId = selectedDomain.name;

    const domainPayload = {
      domainId: selectedDomain.name
    };

    // 2️⃣ Load Products
    this.adminCenterService.getMenuDropDown(domainPayload)
      .subscribe((res: any) => {

        this.getMenuDropdown = res.data;

        const selectedProduct = this.getMenuDropdown.find(
          (prod: any) => prod.name === p.productCode
        );

        if (!selectedProduct) return;

        const productPayload = {
          productCode: selectedProduct.name
        };

        // 3️⃣ Load SubProducts
        this.adminCenterService.getSubMenuDropDown(productPayload)
          .subscribe((subRes: any) => {

            this.getSubMenuDropdown = subRes.data;
            console.log('getSubMenuDropdown', this.getSubMenuDropdown);


            const selectedSubProduct = this.getSubMenuDropdown.find(
              (sub: any) => sub.subProductCode === p.subProductCode
            );

            console.log('selectedSubProduct', selectedSubProduct);


            // 4️⃣ Finally Patch Form
            this.productForm.patchValue({
              domain: selectedDomain,
              product: selectedProduct,
              subProduct: selectedSubProduct,
              childMenuProductCode: p.childMenuProdCode,
              childMenuDescription: p.childMenuDesc,
              childMenuURL: p.childMenuUrl,
              priority: p.priority,
              status: p.status === 'ACT'
            });
          });
      });
  }





  submitForm() {
    const childProductForm = this.productForm.value;
    console.log('product', this.productForm.value)
    const payload = {
      childMenuDesc: childProductForm.childMenuDescription,
      childMenuProdCode: childProductForm.childMenuProductCode,
      childMenuUrl: childProductForm.childMenuURL,
      productCode: childProductForm.product.desc,
      priority: childProductForm.priority,
      subProductCode: childProductForm.subProduct.subProductCode,
      status: childProductForm.status === true ? 'ACT' : 'IAC',
      // domain: this.isEditMode ? this.data?.editData?.domain : productForm.domain.name,
      action: this.isEditMode ? 'UPDATE' : 'ADD',
    }



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
      this.adminCenterService.createChildProduct(payload).subscribe((res: any) => {
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

  selectSubMenu(product: any) {
    console.log('product', product);
    const payload = {
      productCode: product.name
    };
    this.adminCenterService.getSubMenuDropDown(payload)
      .subscribe((res: any) => {
        this.getSubMenuDropdown = res.data;
      });
  }

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
