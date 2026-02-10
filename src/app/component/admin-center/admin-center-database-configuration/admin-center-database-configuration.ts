import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../admin-center-service';
@Component({
  selector: 'app-admin-center-database-configuration',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './admin-center-database-configuration.html',
  styleUrl: './admin-center-database-configuration.scss',
})
export class AdminCenterDatabaseConfiguration {
  @Input() subProduct: boolean = false;

  constructor(private adminCenterService: AdminCenterService) { }
  products = [
    {
      databaseType: 'PR0014',
      hostName: 'Digital Savings Account',
      port: 'بطاقت',
      databaseName: 'A convenient online savings account that allows customers...',
      userName: 'منتج بطاقة ائتمان للعملاء المميز',
      password: 'Enabled',
      encrypted: 1

    },
    {
      databaseType: 'PR0014',
      hostName: 'Digital Savings Account',
      port: 'بطاقت',
      databaseName: 'A convenient online savings account that allows customers...',
      userName: 'منتج بطاقة ائتمان للعملاء المميز',
      password: 'Enabled',
      encrypted: 1

    },
    {
      databaseType: 'PR0014',
      hostName: 'Digital Savings Account',
      port: 'بطاقت',
      databaseName: 'A convenient online savings account that allows customers...',
      userName: 'منتج بطاقة ائتمان للعملاء المميز',
      password: 'Enabled',
      encrypted: 1

    },
    {
      databaseType: 'PR0014',
      hostName: 'Digital Savings Account',
      port: 'بطاقت',
      databaseName: 'A convenient online savings account that allows customers...',
      userName: 'منتج بطاقة ائتمان للعملاء المميز',
      password: 'Enabled',
      encrypted: 1

    },
    {
      databaseType: 'PR0014',
      hostName: 'Digital Savings Account',
      port: 'بطاقت',
      databaseName: 'A convenient online savings account that allows customers...',
      userName: 'منتج بطاقة ائتمان للعملاء المميز',
      password: 'Enabled',
      encrypted: 1

    },
    {
      databaseType: 'PR0014',
      hostName: 'Digital Savings Account',
      port: 'بطاقت',
      databaseName: 'A convenient online savings account that allows customers...',
      userName: 'منتج بطاقة ائتمان للعملاء المميز',
      password: 'Enabled',
      encrypted: 1

    },
    {
      databaseType: 'PR0014',
      hostName: 'Digital Savings Account',
      port: 'بطاقت',
      databaseName: 'A convenient online savings account that allows customers...',
      userName: 'منتج بطاقة ائتمان للعملاء المميز',
      password: 'Enabled',
      encrypted: 1

    }
  ];

  ngOnInit() {
    this.getDataBaseConfig();
  }

  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }

  getDataBaseConfig() {
    this.adminCenterService.getReadyToSync().subscribe((res: any) => {
      console.log('resssss', res)
    })
  }

}
