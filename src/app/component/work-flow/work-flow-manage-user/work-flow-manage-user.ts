import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

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
}
