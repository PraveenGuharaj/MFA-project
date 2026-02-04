import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../admin-center-service';
import { MatDialog } from '@angular/material/dialog';
import { AdminCenterAddLicense } from '../admin-center-add-license/admin-center-add-license';
@Component({
  selector: 'app-admin-center-manage-license',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './admin-center-manage-license.html',
  styleUrl: './admin-center-manage-license.scss',
})
export class AdminCenterManageLicense {
  @Input() subProduct: boolean = false;
  getLicenseData: any;

  constructor(private adminCenterService: AdminCenterService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getLicense();
    this.adminCenterService.refresh$.subscribe(() => {
      console.log('Refreshing table...');
      this.getLicense();
    });
  }

  openModal(product: any) {
    console.log('product', product);

    const dialogRef = this.dialog.open(AdminCenterAddLicense, {
      width: '60%',
      height: 'auto',
      position: { right: '0' },
      data: {
        editData: product,
        isEdit: true
      }
    });

    // 👇 THIS IS THE IMPORTANT PART
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with:', result);

      if (result === 'retaiClose') {
        console.log('success');
        this.getLicense();
        // this.loadSubProducts(); // 🔥 refresh list / API call
      }
    });
  }


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }

  getLicense() {
    this.adminCenterService.getLicense().subscribe((res: any) => {
      this.getLicenseData = res.data
    })
  }
}
