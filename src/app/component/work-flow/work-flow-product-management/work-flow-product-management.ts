import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../../admin-center/admin-center-service';


@Component({
  selector: 'app-work-flow-product-management',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './work-flow-product-management.html',
  styleUrl: './work-flow-product-management.scss',
})
export class WorkFlowProductManagement {
  @Input() subProduct: boolean = false;
  getProductMgmt: any;

  constructor(private adminCenterService: AdminCenterService) { }

  ngOnInit() {
    this.getPoductMgmtAPi();
  }


  getPoductMgmtAPi() {
    const payload = {
      "domainId": "BO",
      "name": "",
      "unitId": ""
    }


    this.adminCenterService.getProductMgmt(payload).subscribe((res: any) => {
      this.getProductMgmt = res.data;
    })
  }


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }
}
