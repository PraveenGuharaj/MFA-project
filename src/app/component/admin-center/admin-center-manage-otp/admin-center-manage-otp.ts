import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../admin-center-service';
import { ComonPopup } from '../../../shared/comon-popup/comon-popup';
import { MatDialog } from '@angular/material/dialog';
import { AdminCenterAddConfiguration } from '../admin-center-add-configuration/admin-center-add-configuration';
@Component({
  selector: 'app-admin-center-manage-otp',
  imports: [
    CommonModule,
    MatIconModule,
    ComonPopup
  ],
  templateUrl: './admin-center-manage-otp.html',
  styleUrl: './admin-center-manage-otp.scss',
})
export class AdminCenterManageOtp {
  @Input() subProduct: boolean = false;

  products = [
    {
      domain: 'Domain1',
      channel: 'Mobile Banking',
      category: 'SAV-001',
      otpLength: 4,
      otpExpiry: '100s',
      maxAttempts: 4,
      deliveryModes: 'SMS',
      status: 'Active',
      actionsType: 'image'
    },
    {
      domain: 'Domain2',
      channel: 'WebPortal',
      category: 'CUR-002',
      otpLength: 3,
      otpExpiry: '300s',
      maxAttempts: 3,
      deliveryModes: 'PUSH',
      status: 'Active',
      actionsType: 'image'
    },
    {
      domain: 'Domain3',
      channel: 'Mobile App',
      category: 'LON-003',
      otpLength: 2,
      otpExpiry: '100s',
      maxAttempts: 2,
      deliveryModes: 'PUSH',
      status: 'Active',
      actionsType: 'image'
    },
    {
      domain: 'Domain4',
      channel: 'Mobile Banking',
      category: 'CRD-004',
      otpLength: 5,
      otpExpiry: '50s',
      maxAttempts: 5,
      deliveryModes: 'SMS',
      status: 'Active',
      actionsType: 'image'
    },
    {
      domain: 'Domain5',
      channel: 'WebPortal',
      category: 'DEP-005',
      otpLength: 1,
      otpExpiry: '60s',
      maxAttempts: 1,
      deliveryModes: 'SMS',
      status: 'Active',
      actionsType: 'image'
    },
    {
      domain: 'Domain4',
      channel: 'Mobile Banking',
      category: 'CRD-004',
      otpLength: 5,
      otpExpiry: '50s',
      maxAttempts: 5,
      deliveryModes: 'SMS',
      status: 'Active',
      actionsType: 'image'
    },
    {
      domain: 'Domain5',
      channel: 'WebPortal',
      category: 'DEP-005',
      otpLength: 1,
      otpExpiry: '60s',
      maxAttempts: 1,
      deliveryModes: 'SMS',
      status: 'Active',
      actionsType: 'image'
    },
    {
      domain: 'Domain4',
      channel: 'Mobile Banking',
      category: 'CRD-004',
      otpLength: 5,
      otpExpiry: '50s',
      maxAttempts: 5,
      deliveryModes: 'SMS',
      status: 'Active',
      actionsType: 'image'
    },
    {
      domain: 'Domain5',
      channel: 'WebPortal',
      category: 'DEP-005',
      otpLength: 1,
      otpExpiry: '60s',
      maxAttempts: 1,
      deliveryModes: 'SMS',
      status: 'Active',
      actionsType: 'image'
    },
    {
      domain: 'Domain4',
      channel: 'Mobile Banking',
      category: 'CRD-004',
      otpLength: 5,
      otpExpiry: '50s',
      maxAttempts: 5,
      deliveryModes: 'SMS',
      status: 'Active',
      actionsType: 'image'
    },
    {
      domain: 'Domain5',
      channel: 'WebPortal',
      category: 'DEP-005',
      otpLength: 1,
      otpExpiry: '60s',
      maxAttempts: 1,
      deliveryModes: 'SMS',
      status: 'Active',
      actionsType: 'image'
    },
    {
      domain: 'Domain4',
      channel: 'Mobile Banking',
      category: 'CRD-004',
      otpLength: 5,
      otpExpiry: '50s',
      maxAttempts: 5,
      deliveryModes: 'SMS',
      status: 'Active',
      actionsType: 'image'
    },
    {
      domain: 'Domain5',
      channel: 'WebPortal',
      category: 'DEP-005',
      otpLength: 1,
      otpExpiry: '60s',
      maxAttempts: 1,
      deliveryModes: 'SMS',
      status: 'Active',
      actionsType: 'image'
    }
  ];
  getOtp: any;
  selectedProduct: any;
  showDeleteConfirm: boolean = false;


  constructor(private adminCenterService: AdminCenterService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getOtpControl();
    this.adminCenterService.refresh$.subscribe(() => {
      console.log('Refreshing table...');
      this.getOtpControl(); //  refresh API call
    });
  }


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }

  getOtpControl() {
    this.adminCenterService.getOtp().subscribe((res: any) => {
      console.log('otppppp', res)
      this.getOtp = res.data;
    })
  }

  openDeletePopup(product: any) {
    console.log('product', product);

    this.selectedProduct = product;
    this.showDeleteConfirm = true;
  }

  cancelDelete() {
    this.showDeleteConfirm = false;
    this.selectedProduct = null;
  }

  confirmDelete() {
    // CALL DELETE API HERE
    console.log('Deleting product:', this.selectedProduct);

    this.showDeleteConfirm = false;
    // this.selectedProduct = null;
    this.adminCenterService.deleteOtp(this.selectedProduct.configId).subscribe((res) => {
      console.log('res', res);
      if (res.status.code == "SUCCESS") {
        // this.getProducts();
      }

    })
  }

  openModal(product: any) {
    console.log('product', product);

    const dialogRef = this.dialog.open(AdminCenterAddConfiguration, {
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
        // this.getProducts();
        // this.loadSubProducts(); // 🔥 refresh list / API call
      }
    });
  }
}
