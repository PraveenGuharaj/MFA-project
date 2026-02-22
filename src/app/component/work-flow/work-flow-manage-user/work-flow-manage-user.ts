import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../../admin-center/admin-center-service';

@Component({
  selector: 'app-work-flow-manage-user',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './work-flow-manage-user.html',
  styleUrl: './work-flow-manage-user.scss',
})
export class WorkFlowManageUser {
  @Input() subProduct: boolean = false;
  getManageUser: any;

  constructor(private adminCenterService: AdminCenterService) { }

  ngOnInit() {
    this.getManageUserApi();
  }

  products = [
    {
      userId: 'PRD',
      userName: 'John',
      unit: 'PRD',
      group: 'USER-MGNT-GROUP',
      role: 'Team Lead',
      mfa: 'No',
      status: 'Active',
      actionsType: 'image'

    },
    {
      userId: 'PRD',
      userName: 'User',
      unit: 'PRD',
      group: 'UGM',
      role: 'Maker',
      mfa: 'No',
      status: 'Active',
      actionsType: 'image'

    },
    {
      userId: 'PRD',
      userName: 'John',
      unit: 'PRD',
      group: 'USER-MGNT-GROUP',
      role: 'Maker',
      mfa: 'No',
      status: 'Active',
      actionsType: 'image'

    },
    {
      userId: 'PRD',
      userName: 'Test 5',
      unit: 'PRD',
      group: 'UGM',
      role: 'Maker',
      mfa: 'No',
      status: 'Active',
      actionsType: 'image'

    },
    {
      userId: 'PRD',
      userName: 'Test 6',
      unit: 'PRD',
      group: 'USER-MGNT-GROUP',
      role: 'Maker',
      mfa: 'No',
      status: 'Active',
      actionsType: 'image'

    },
    {
      userId: 'PRD',
      userName: 'John',
      unit: 'PRD',
      group: 'USER-MGNT-GROUP',
      role: 'Maker',
      mfa: 'No',
      status: 'Active',
      actionsType: 'image'

    }
  ];


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }

  getManageUserApi() {
    this.adminCenterService.getManageUser().subscribe((res: any) => {
      this.getManageUser = res.data;
    })
  }

  getUnits(groups: any[]): string {
    return groups ? groups.map(g => g.unit).join(', ') : '';
  }

  getGroups(groups: any[]): string {
    return groups ? groups.map(g => g.grp).join(', ') : '';
  }
}
