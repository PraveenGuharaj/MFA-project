import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../admin-center-service';
import { MatDialog } from '@angular/material/dialog';
import { AdminCenterAddMfa } from '../admin-center-add-mfa/admin-center-add-mfa';

@Component({
  selector: 'app-admin-center-manage-mfa',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './admin-center-manage-mfa.html',
  styleUrl: './admin-center-manage-mfa.scss',
})
export class AdminCenterManageMfa {
  @Input() subProduct: boolean = false;
  getMfa: any;

  constructor(private adminCenterService: AdminCenterService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getMfaData();
    this.adminCenterService.refresh$.subscribe(() => {
      console.log('Refreshing table...');
      this.getMfaData();
    });
  }

  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }

  openModal(product: any) {
    console.log('product', product);

    const dialogRef = this.dialog.open(AdminCenterAddMfa, {
      width: '60%',
      height: 'auto',
      position: { right: '0' },
      data: {
        editData: product,
        isEdit: true
      }
    });

    // 👇 THIS IS THE IMPORTANT PART
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('Dialog closed with:', result);

      if (result === 'retaiClose') {
        console.log('success');
        this.getMfa();
        // this.loadSubProducts(); 
      }
    });
  }

  getMfaData() {
    this.adminCenterService.getMfa().subscribe((res: any) => {
      console.log('getmfa', res);
      this.getMfa = res.data;

    })
  }
}
