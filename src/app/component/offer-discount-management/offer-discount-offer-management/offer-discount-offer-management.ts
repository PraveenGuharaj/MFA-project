import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../../admin-center/admin-center-service';
import { OfferDiscountAddOfferManagement } from '../offer-discount-add-offer-management/offer-discount-add-offer-management';
import { MatDialog } from '@angular/material/dialog';
import { CommonToaster } from '../../../shared/services/common-toaster';

@Component({
  selector: 'app-offer-discount-offer-management',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './offer-discount-offer-management.html',
  styleUrl: './offer-discount-offer-management.scss',
})
export class OfferDiscountOfferManagement {
  @Input() subProduct: boolean = false;
  getOfferMgmt: any;

  constructor(private adminCenterService: AdminCenterService,
    public dialog: MatDialog,
    private commonToaster: CommonToaster
  ) { }

  ngOnInit() {
    this.getOfferMgmtApi();
    this.adminCenterService.refresh$.subscribe(() => {
      console.log('Refreshing table...');
      this.getOfferMgmtApi();
    });
  }

  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }

  getOfferMgmtApi() {
    this.adminCenterService.getOfferMgmt().subscribe((res: any) => {
      this.getOfferMgmt = res.data;
    })
  }

  openModal(product: any) {
    console.log('product', product);

    const dialogRef = this.dialog.open(OfferDiscountAddOfferManagement, {
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
        this.getOfferMgmtApi();
        // this.loadSubProducts(); // refresh list / API call
      }
    });
  }
}
