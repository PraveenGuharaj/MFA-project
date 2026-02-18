import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AdminCenterService } from '../../admin-center/admin-center-service';

@Component({
  selector: 'app-master-data-add-channel',
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatCheckboxModule
  ],
  templateUrl: './master-data-add-channel.html',
  styleUrl: './master-data-add-channel.scss',
})
export class MasterDataAddChannel {
  productForm!: FormGroup;

  // Dropdown Options
  channels = ["SMS", "Email", "App", "Web"];
  categories = ["Login", "Transaction", "Reset", "Verification"];
  domains = ["Banking", "Insurance", "Fintech", "Wallet"];
  blockDurations = ["30 Sec", "1 Min", "2 Min", "5 Min"];
  types = ["Primary", "Secondary", "Backup"];
  deliveryModesOptions = ["SMS", "Email", "WhatsApp", "IVR"];

  constructor(private fb: FormBuilder, private adminCenterService: AdminCenterService) {
    this.productForm = this.fb.group({
      channelId: ['', Validators.required],
      channelDescription: ['', Validators.required],
      description: ['', Validators.required],
      status: [true]
    });
  }

  submitForm() {
    console.log('form', this.productForm.value);
    const formValue = this.productForm.value;

    const payload = {
      serviceName: "startWorkflow",
      processName: "CHANNEL",
      action: "ADD",
      product: "MASTER",
      subProduct: "CHANNEL_CONFIG",
      requestData: [
        {
          channelId: formValue.channelId,
          channelDesc: formValue.channelDescription,
          description: formValue.description,
          status: formValue.status ? "ACT" : "INA"
        }
      ]
    };

    console.log("Final Payload:", payload);

    this.adminCenterService.createChannel(payload).subscribe((res: any) => {

    })

  }

  closeForm() { }
}
