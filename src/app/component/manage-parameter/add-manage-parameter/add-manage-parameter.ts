import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AdminCenterService } from '../../admin-center/admin-center-service';
import { CommonToaster } from '../../../shared/services/common-toaster';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-manage-parameter',
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSlideToggleModule
  ],
  templateUrl: './add-manage-parameter.html',
  styleUrl: './add-manage-parameter.scss',
})
export class AddManageParameter {
  productForm!: FormGroup;

  // Dropdown Options
  channels = ["SMS", "Email", "App", "Web"];
  categories = ["Login", "Transaction", "Reset", "Verification"];
  domains = ["Banking", "Insurance", "Fintech", "Wallet"];
  blockDurations = ["30 Sec", "1 Min", "2 Min", "5 Min"];
  types = ["Primary", "Secondary", "Backup"];
  deliveryModesOptions = ["SMS", "Email", "WhatsApp", "IVR"];
  getUnit: any;
  getChannel: any;
  isEditMode = false;

  constructor(private fb: FormBuilder, private adminCenterService: AdminCenterService, private commonToaster: CommonToaster, private dialogRef: MatDialogRef<AddManageParameter>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.productForm = this.fb.group({
      channel: ['', Validators.required],
      key: ['', Validators.required],
      value: ['', Validators.required],
      remarks: ['', Validators.required],
      unit: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.getUnitApi();
    this.getChannelApi();
    if (this.data?.editData) {
      this.isEditMode = true;
      this.patchForm(this.data.editData);
    }
  }

  getUnitApi() {
    this.adminCenterService.getUnits().subscribe((res: any) => {
      this.getUnit = res.data.units;
    })
  }

  getChannelApi() {
    this.adminCenterService.getMasterChannel().subscribe((res: any) => {
      this.getChannel = res.data;
    })
  }

  submitForm() {
    const form = this.productForm.value;
    console.log('form', form);


    const payload = [
      {
        // unitId: form.unit?.unitCode, // or from dropdown
        // channelId: form.channel?.channelId,


        unitId: this.isEditMode
          ? this.data?.unitId
          : form.unit?.unitCode,



        channelId: this.isEditMode
          ? this.data?.channelId
          : form.channel?.channelId,
        paramDetails: [
          {
            action: this.isEditMode ? 'MODIFY' : 'ADD',
            key: form.key,
            value: form.value,
            remark: form.remarks,
            status: form.status ? 'ACT' : 'IAC'
          }
        ]
      }
    ];

    console.log(payload);

    if (this.isEditMode) {
      this.adminCenterService.createManageParameter(payload).subscribe((res: any) => {
        console.log('ressss', res);

        if (res?.result.code == "000000") {
          this.commonToaster.showSuccess(res.result.description);
          this.dialogRef.close('retaiClose');
        } else {

        }
      })
    } else {
      this.adminCenterService.createManageParameter(payload).subscribe((res: any) => {
        console.log('create', res);
        if (res?.result.code == "000000") {
          this.commonToaster.showSuccess(res.result.description);
          this.dialogRef.close('retaiClose');
          this.adminCenterService.trigger();
        }

      })
    }
  }

  patchForm(p: any) {
    console.log('p', p);
    const parameterForm = p;
    this.productForm.patchValue({
      key: parameterForm.key,
      value: parameterForm.value,
      remarks: parameterForm.description
    })
  }


  closeForm() { }
}
