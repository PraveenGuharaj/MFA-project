import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../../admin-center/admin-center-service';

@Component({
  selector: 'app-manage-parameter',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './manage-parameter.html',
  styleUrl: './manage-parameter.scss',
})
export class ManageParameter {
  @Input() subProduct: boolean = false;
  getManageParameter: any;

  constructor(private adminCenterService: AdminCenterService) { }

  products = [
    {
      key: 1,
      value: 'Banner testing',
      remarks: 'BannerID6',
      status: 'Active',
      actionsType: 'image'
    },
    {
      key: 1,
      value: 'Banner testing',
      remarks: 'BannerID6',
      status: 'Active',
      actionsType: 'image'
    },
    {
      key: 1,
      value: 'Banner testing',
      remarks: 'BannerID6',
      status: 'Active',
      actionsType: 'image'
    },
    {
      key: 1,
      value: 'Banner testing',
      remarks: 'BannerID6',
      status: 'Active',
      actionsType: 'image'
    },
    {
      key: 1,
      value: 'Banner testing',
      remarks: 'BannerID6',
      status: 'Active',
      actionsType: 'image'
    },
    {
      key: 1,
      value: 'Banner testing',
      remarks: 'BannerID6',
      status: 'Active',
      actionsType: 'image'
    },
    {
      key: 1,
      value: 'Banner testing',
      remarks: 'BannerID6',
      status: 'Active',
      actionsType: 'image'
    },
    {
      key: 1,
      value: 'Banner testing',
      remarks: 'BannerID6',
      status: 'Active',
      actionsType: 'image'
    },
    {
      key: 1,
      value: 'Banner testing',
      remarks: 'BannerID6',
      status: 'Active',
      actionsType: 'image'
    },
    {
      key: 1,
      value: 'Banner testing',
      remarks: 'BannerID6',
      status: 'Active',
      actionsType: 'image'
    }
  ];

  ngOnInit() {
    this.getManageParameterApi();
  }

  onProductremarksChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }

  getManageParameterApi() {
    const payload = {
      channelId: "BO",
      unitId: "PRD"
    }
    this.adminCenterService.getManageParameter(payload).subscribe((res: any) => {
      this.getManageParameter = res.data;
    })
  }
}
