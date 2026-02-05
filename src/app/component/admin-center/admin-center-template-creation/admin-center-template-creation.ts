import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../admin-center-service';

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

  constructor(private adminCenterService: AdminCenterService) { }

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
}
