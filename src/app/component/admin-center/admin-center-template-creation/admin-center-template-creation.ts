import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../admin-center-service';
import { MatDialog } from '@angular/material/dialog';
import { AdminCenterAddTemplateCreation } from '../admin-center-add-template-creation/admin-center-add-template-creation';
import { ComonPopup } from '../../../shared/comon-popup/comon-popup';
import { CommonToaster } from '../../../shared/services/common-toaster';

@Component({
  selector: 'app-admin-center-template-creation',
  imports: [
    CommonModule,
    MatIconModule,
    ComonPopup
  ],
  templateUrl: './admin-center-template-creation.html',
  styleUrl: './admin-center-template-creation.scss',
})
export class AdminCenterTemplateCreation {
  @Input() subProduct: boolean = false;
  getTemplateCreationData: any;
  showDeleteConfirm: boolean = false;
  selectedProduct: any;

  constructor(private adminCenterService: AdminCenterService,
    public dialog: MatDialog, private commonToaster: CommonToaster
  ) { }

  ngOnInit() {
    this.getTemplateCreation();
    this.adminCenterService.refresh$.subscribe(() => {
      console.log('Refreshing table...');
      this.getTemplateCreation();
    });
  }

  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }

  getTemplateCreation() {
    this.adminCenterService.getTemplateCreation().subscribe((res: any) => {
      this.getTemplateCreationData = res.data;
    })
  }

  openModal(product: any) {
    console.log('product', product);

    const dialogRef = this.dialog.open(AdminCenterAddTemplateCreation, {
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
        this.getTemplateCreation();
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


      templateId: this.selectedProduct.templateId,
      domainId: null,
      categoryId: null,
      unitId: null,
      channelId: null,
      notificationType: null,
      remarks: null,
      templateName: null,
      deepLink: null,
      notificationTemplate: null,
      action: "DELETE"


    }

    this.showDeleteConfirm = false;
    // this.selectedProduct = null;
    this.adminCenterService.deleteTemplate(payload).subscribe((res) => {
      console.log('res', res);
      if (res.status.code == "000000") {
        this.commonToaster.showSuccess('Template Deleted Successfully');
        this.getTemplateCreation();
      }

    })
  }

}
