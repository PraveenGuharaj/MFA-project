import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../admin-center-service';

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

  constructor(private adminCenterService: AdminCenterService) { }

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

  getMfaData() {
    this.adminCenterService.getMfa().subscribe((res: any) => {
      console.log('getmfa', res);
      this.getMfa = res.data;

    })
  }
}
