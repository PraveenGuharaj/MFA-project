import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AdminCenterService } from '../admin-center-service';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonToaster } from '../../../shared/services/common-toaster';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-admin-center-add-database',
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSlideToggleModule
  ],
  templateUrl: './admin-center-add-database.html',
  styleUrl: './admin-center-add-database.scss',
})
export class AdminCenterAddDatabase {
  productForm!: FormGroup;

  // Dropdown Options
  domains = ["Oracle", "PostgraSQL"];
  encryptedPswd = ['Yes', 'No']
  showPassword: boolean = false;
  isEditMode = false;

  constructor(private fb: FormBuilder, private adminCenterService: AdminCenterService,
    private commonToaster: CommonToaster, private dialogRef: MatDialogRef<AdminCenterAddDatabase>
  ) {
    this.productForm = this.fb.group({
      dataBaseType: ['', Validators.required],
      portName: ['', Validators.required],
      hostName: ['', Validators.required],
      datBase: ['', Validators.required],
      userName: ['', Validators.required],
      encryptedPassword: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  encryptPassword(password: string): string {
    const secretKey = 'your-secret-key'; // Must match backend key
    return CryptoJS.AES.encrypt(password, secretKey).toString();
  }


  submitForm() {
    const dataBaseForm = this.productForm.value;
    console.log('dataBaseForm', dataBaseForm)
    const encryptedPwd = this.encryptPassword(dataBaseForm.password);
    const isEncrypted = dataBaseForm.encryptedPassword === 'Yes';

    const payload = {
      id: null,
      dbType: dataBaseForm.dataBaseType,
      hostName: dataBaseForm.hostName,
      port: Number(dataBaseForm.portName),
      database: dataBaseForm.datBase,
      username: dataBaseForm.userName,
      password: isEncrypted
        ? encryptedPwd
        : dataBaseForm.password,
      encryptedPassword: dataBaseForm.encryptedPassword,
      action: "ADD"
    }
    if (this.isEditMode) {
      this.adminCenterService.updateLicense(payload).subscribe((res: any) => {
        console.log('ressss', res);

        if (res?.status.code == "000000") {
          this.commonToaster.showSuccess('Database created successfully');
          this.dialogRef.close('retaiClose');
        } else {

        }
      })
    } else {
      this.adminCenterService.createDataBase(payload).subscribe((res: any) => {
        console.log('create', res);
        if (res?.status.code == "000000") {
          this.commonToaster.showSuccess('Database created successfully');
          this.dialogRef.close('retaiClose');
          this.adminCenterService.trigger();
        }

      })
    }
  }

  closeForm() { }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
