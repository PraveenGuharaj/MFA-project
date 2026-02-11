import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../admin-center-service';
import { MatDialog } from '@angular/material/dialog';
import { AdminCenterReadyToSync } from '../admin-center-ready-to-sync/admin-center-ready-to-sync';
import { AdminCenterAddDatabase } from '../admin-center-add-database/admin-center-add-database';
import { CommonToaster } from '../../../shared/services/common-toaster';
import { ComonPopup } from '../../../shared/comon-popup/comon-popup';
@Component({
  selector: 'app-admin-center-database-configuration',
  imports: [
    CommonModule,
    MatIconModule,
    ComonPopup
  ],
  templateUrl: './admin-center-database-configuration.html',
  styleUrl: './admin-center-database-configuration.scss',
})
export class AdminCenterDatabaseConfiguration {
  @Input() subProduct: boolean = false;
  getDataBaseConfigApi: any;
  showDeleteConfirm: boolean = false;
  selectedProduct: any;

  constructor(private adminCenterService: AdminCenterService, public dialog: MatDialog,
    private commonToaster: CommonToaster
  ) { }
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

    const dialogRef = this.dialog.open(AdminCenterAddDatabase, {
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

  openDeletePopup(product: any) {
    this.selectedProduct = product;
    this.showDeleteConfirm = true;
  }

  cancelDelete() {
    this.showDeleteConfirm = false;
    this.selectedProduct = null;
  }

  confirmDelete() {
    console.log('Deleting product:', this.selectedProduct);

    const payload = {

      id: this.selectedProduct.id,
      action: "DELETE",
    }

    this.showDeleteConfirm = false;
    // this.selectedProduct = null;
    this.adminCenterService.createDataBase(payload).subscribe((res: any) => {
      console.log('res', res);
      if (res.status.code == "000000") {
        this.commonToaster.showSuccess('Database Deleted Successfully');
        this.getDataBaseConfig();
      }

    })
  }

}
