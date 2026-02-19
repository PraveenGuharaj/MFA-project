import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../../admin-center/admin-center-service';
import { ComonPopup } from '../../../shared/comon-popup/comon-popup';
import { AddManageParameter } from '../add-manage-parameter/add-manage-parameter';
import { CommonToaster } from '../../../shared/services/common-toaster';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-manage-parameter',
  imports: [
    CommonModule,
    MatIconModule,
    ComonPopup,
    FormsModule
  ],
  templateUrl: './manage-parameter.html',
  styleUrl: './manage-parameter.scss',
})
export class ManageParameter {
  @Input() subProduct: boolean = false;
  getManageParameter: any;
  showDeleteConfirm: boolean = false;
  selectedProduct: any;
  getUnit: any;
  getChannel: any;
  selectedUnit: string = '';
  selectedChannel: string = '';


  constructor(private adminCenterService: AdminCenterService, public dialog: MatDialog,
    private commonToaster: CommonToaster) { }



  ngOnInit() {
    this.getManageParameterApi();
    this.getUnitApi();
    this.getChannelApi();
    this.adminCenterService.refresh$.subscribe(() => {
      console.log('Refreshing table...');
      this.getManageParameterApi();
    });
  }

  onProductremarksChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }

  getManageParameterApi() {
    const payload = {
      unitId: this.selectedUnit,
      channelId: this.selectedChannel
    };
    this.adminCenterService.getManageParameter(payload).subscribe((res: any) => {
      this.getManageParameter = res.data;
    })
  }

  openModal(product: any) {
    console.log('product', product);

    const dialogRef = this.dialog.open(AddManageParameter, {
      width: '60%',
      height: 'auto',
      position: { right: '0' },
      data: {
        editData: product,
        isEdit: true,
        unitId: this.selectedUnit,
        channelId: this.selectedChannel
      }
    });

    // 👇 THIS IS THE IMPORTANT PART
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('Dialog closed with:', result);

      if (result === 'retaiClose') {
        console.log('success');
        this.getManageParameterApi();
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

      licenseId: this.selectedProduct.licenseId,
      domainName: null,
      expiryDate: null,
      warningStatus: null,
      alertStatus: null,
      status: null,
      createdBy: null,
      action: "DELETE",
      notificationDeliveries: null

    }

    this.showDeleteConfirm = false;
    // this.selectedProduct = null;
    this.adminCenterService.deleteLicense(payload).subscribe((res) => {
      console.log('res', res);
      if (res.status.code == "000000") {
        this.commonToaster.showSuccess('Product License Deleted Successfully');
        this.getManageParameterApi();
      }

    })
  }

  getUnitApi() {
    this.adminCenterService.getUnits().subscribe((res: any) => {
      this.getUnit = res.data.units;
    })
  }

  getChannelApi() {
    this.adminCenterService.getMasterChannel().subscribe((res: any) => {
      this.getChannel = res.data;
    })
  }

  onSearch() {
    const payload = {
      unitId: this.selectedUnit,
      channelId: this.selectedChannel
    };

    console.log('Search Payload:', payload);

    this.adminCenterService.getManageParameter(payload).subscribe((res: any) => {
      console.log(res);
      this.getManageParameter = res.data;
    });
  }

  onReset() {
    this.selectedUnit = '';
    this.selectedChannel = '';
  }

}
