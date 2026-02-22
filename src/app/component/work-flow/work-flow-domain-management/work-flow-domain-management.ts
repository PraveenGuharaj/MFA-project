import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../../admin-center/admin-center-service';

@Component({
  selector: 'app-work-flow-domain-management',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './work-flow-domain-management.html',
  styleUrl: './work-flow-domain-management.scss',
})
export class WorkFlowDomainManagement {
  @Input() subProduct: boolean = false;
  getDomainMgmt: any;

  constructor(private adminCenterService: AdminCenterService) { }

  ngOnInit() {
    this.getDomainMgmtApi();
    this.adminCenterService.refresh$.subscribe(() => {
      this.getDomainMgmtApi();
    });
  }


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }

  getDomainMgmtApi() {
    this.adminCenterService.getDomainMgmt().subscribe((res: any) => {
      this.getDomainMgmt = res.data;
    })
  }
}
