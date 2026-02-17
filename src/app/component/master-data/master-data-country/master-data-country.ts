import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../../admin-center/admin-center-service';
import { MasterDataAddCountry } from '../master-data-add-country/master-data-add-country';
import { MatDialog } from '@angular/material/dialog';
import { CommonToaster } from '../../../shared/services/common-toaster';
import { ComonPopup } from '../../../shared/comon-popup/comon-popup';

@Component({
  selector: 'app-master-data-country',
  imports: [
    CommonModule,
    MatIconModule,
    ComonPopup
  ],
  templateUrl: './master-data-country.html',
  styleUrl: './master-data-country.scss',
})
export class MasterDataCountry {
  @Input() subProduct: boolean = false;
  products: any;
  activeProduct: any;
  inActiveProduct: any;
  showDeleteConfirm: boolean = false;
  selectedProduct: any;


  constructor(private adminCenterService: AdminCenterService,
    public dialog: MatDialog,
    private commonToaster: CommonToaster
  ) { }

  ngOnInit() {
    this.getCountryApi();
  }

  getCountryApi() {
    this.adminCenterService.getAllCountry().subscribe((res) => {
      console.log('country', res);
      this.products = res;
      this.activeProduct = this.products?.data.filter((i: any) => i.status == 'ACT');
      this.inActiveProduct = this.products?.data.filter((i: any) => i.status == 'IAC');


    })
  }


  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }

  openModal(product: any) {
    console.log('product', product);

    const dialogRef = this.dialog.open(MasterDataAddCountry, {
      width: '60%',
      height: 'auto',
      position: { right: '0' },
      data: {
        editData: product,
        isEdit: true
      }
    });

    // 👇 THIS IS THE IMPORTANT PART
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('Dialog closed with:', result);

      if (result === 'retaiClose') {
        console.log('success');
        this.getCountryApi();
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

      processName: "COUNTRY",
      product: "MASTER",
      serviceName: "startWorkflow",
      subProduct: "COUNTRY_CONFIG",
      action: "DELETE",
      requestData: [
        {
          "countryCode": this.selectedProduct.countryCode
        }
      ]
    }

    this.showDeleteConfirm = false;
    // this.selectedProduct = null;
    this.adminCenterService.createCountry(payload).subscribe((res: any) => {
      console.log('res', res);
      if (res.status.code == "000000") {
        this.commonToaster.showSuccess('Product License Deleted Successfully');
        this.getCountryApi();
      }

    })
  }

}
