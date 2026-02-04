import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../admin-center-service';
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

  constructor(private adminCenterService: AdminCenterService) { }

  ngOnInit() {
    this.getLicense();
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
