import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../admin-center-service';
import { MatDialog } from '@angular/material/dialog';
import { AdminCenterAddTemplateCreation } from '../admin-center-add-template-creation/admin-center-add-template-creation';

@Component({
  selector: 'app-admin-center-template-creation',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './admin-center-template-creation.html',
  styleUrl: './admin-center-template-creation.scss',
})
export class AdminCenterTemplateCreation {
  @Input() subProduct: boolean = false;
  getTemplateCreationData: any;

  constructor(private adminCenterService: AdminCenterService,
    public dialog: MatDialog
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
}
