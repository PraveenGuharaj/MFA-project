import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AdminCenterService } from '../admin-center-service';
import { CommonToaster } from '../../../shared/services/common-toaster';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-center-add-table-migration',
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSlideToggleModule
  ],
  templateUrl: './admin-center-add-table-migration.html',
  styleUrl: './admin-center-add-table-migration.scss',
})
export class AdminCenterAddTableMigration {
  productForm!: FormGroup;

  // Dropdown Options
  channels = ["SMS", "Email", "App", "Web"];
  categories = ["Login", "Transaction", "Reset", "Verification"];
  domains = ["Sync", "Migration"];
  blockDurations = ["30 Sec", "1 Min", "2 Min", "5 Min"];
  types = ["Primary", "Secondary", "Backup"];
  deliveryModesOptions = ["SMS", "Email", "WhatsApp", "IVR"];
  isEditMode = false;

  constructor(private fb: FormBuilder, private adminCenterService: AdminCenterService,
    private commonToaster: CommonToaster, private dialogRef: MatDialogRef<AdminCenterAddTableMigration>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.productForm = this.fb.group({
      syncTable: ['', Validators.required],
      syncMigration: ['', Validators.required]
    });
  }

  ngOnInit() {

    this.patchForm(this.data.editData)
  }


  submitForm() {
    // if (this.productForm.valid) {
    // } else {
    //   this.productForm.markAllAsTouched();
    // }

    console.log('productform', this.productForm);
    const readyToSyncForm = this.productForm.value;

    const payload = {
      tableName: readyToSyncForm.syncTable,
      syncMigration: readyToSyncForm.syncMigration,
      migrationStatus: "N",
      synStatus: "Y",
      action: this.isEditMode ? "ADD" : 'UPDATE',
      id: this.data.editData.id
    }

    if (this.isEditMode) {
      this.adminCenterService.updateReadyToSync(payload).subscribe((res: any) => {
        console.log('ressss', res);

        if (res?.status.code == "000000") {
          this.commonToaster.showSuccess('Sync Table updated successfully');
          this.dialogRef.close('retaiClose');
        } else {

        }
      })
    } else {
      this.adminCenterService.createReadyToSync(payload).subscribe((res: any) => {
        console.log('create', res);
        if (res?.status.code == "000000") {
          this.commonToaster.showSuccess('Sync table created successfully');
          this.dialogRef.close('retaiClose');
          this.adminCenterService.trigger();
        }

      })
    }
  }

  closeForm() { }

  patchForm(form: any) {

    console.log('p', this.data.editData)
    this.productForm.patchValue({
      syncTable: form.synTable,
      syncMigration: form.syncmigration
    });
  }
}
