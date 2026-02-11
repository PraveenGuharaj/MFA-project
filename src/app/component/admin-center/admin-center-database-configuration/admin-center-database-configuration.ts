import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../admin-center-service';
import { MatDialog } from '@angular/material/dialog';
import { AdminCenterReadyToSync } from '../admin-center-ready-to-sync/admin-center-ready-to-sync';
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
  getDataBaseConfigApi: any;

  constructor(private adminCenterService: AdminCenterService, public dialog: MatDialog) { }
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
    this.adminCenterService.refresh$.subscribe(() => {
      console.log('Refreshing table...');
      this.getDataBaseConfig();
    });
  }

  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }

  getDataBaseConfig() {
    this.adminCenterService.getDatabaseConfig().subscribe((res: any) => {
      console.log('resssss', res)
      this.getDataBaseConfigApi = res.data;
    })
  }

  openModal(product: any) {
    console.log('product', product);

    const dialogRef = this.dialog.open(AdminCenterReadyToSync, {
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
        this.getDataBaseConfig();
        // this.loadSubProducts(); // 🔥 refresh list / API call
      }
    });
  }

}
