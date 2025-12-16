import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DashboardAddRetailProduct } from '../../../../component/dashboard/dashboard-add-retail-product/dashboard-add-retail-product';
import { DashboardSubProduct } from '../../../../component/dashboard/dashboard-sub-product/dashboard-sub-product';
import { AdminCenterAddConfiguration } from '../../../../component/admin-center/admin-center-add-configuration/admin-center-add-configuration';
import { AdminCenterAddAtm } from '../../../../component/admin-center/admin-center-add-atm/admin-center-add-atm';
import { AdminCenterAddLicense } from '../../../../component/admin-center/admin-center-add-license/admin-center-add-license';
import { AdminCenterAddMfa } from '../../../../component/admin-center/admin-center-add-mfa/admin-center-add-mfa';
import { AdminCenterAddBranch } from '../../../../component/admin-center/admin-center-add-branch/admin-center-add-branch';
import { AdminCenterAddDeviceManagement } from '../../../../component/admin-center/admin-center-add-device-management/admin-center-add-device-management';
import { AdminCenterAddMessageCampaign } from '../../../../component/admin-center/admin-center-add-message-campaign/admin-center-add-message-campaign';
import { AdminCenterAddSegment } from '../../../../component/admin-center/admin-center-add-segment/admin-center-add-segment';
import { AdminCenterAddTemplateCreation } from '../../../../component/admin-center/admin-center-add-template-creation/admin-center-add-template-creation';
import { AdminCenterAddTermsCondition } from '../../../../component/admin-center/admin-center-add-terms-condition/admin-center-add-terms-condition';
import { AdminCenterAddBanner } from '../../../../component/admin-center/admin-center-add-banner/admin-center-add-banner';
import { AdminCenterAddProduct } from '../../../../component/admin-center/admin-center-add-product/admin-center-add-product';
import { AdminCenterAddDatabase } from '../../../../component/admin-center/admin-center-add-database/admin-center-add-database';
import { AdminCenterAddSubProduct } from '../../../../component/admin-center/admin-center-add-sub-product/admin-center-add-sub-product';
import { AdminCenterAddTableMigration } from '../../../../component/admin-center/admin-center-add-table-migration/admin-center-add-table-migration';

@Component({
  selector: 'app-dbx-header',
  imports: [
    CommonModule,
    MatIconModule,
  ],
  templateUrl: './dbx-header.html',
  styleUrl: './dbx-header.scss',
})
export class DbxHeader {
  @Output() productTypeChanged = new EventEmitter<boolean>();
  @Output() tabChanged = new EventEmitter<string>();
  @Input() pageTitle?: string; // Title passed from the parent
  @Input() subMenuTitle?: string;
  @Input() isSubMenu?: boolean;
  @Input() headerTabs: any[] = [];  // Dynamic tabs
  @Input() isProductHub: boolean = false; // Property to check if we are in Product Hub

  @Input() activeTab: string = '';
  subProduct: boolean = false;
  atmLocators: boolean = false;
  selectedDateLabel = 'Today';

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    console.log('pageTitle', this.activeTab);

  }

  ngOnChanges(changes: SimpleChanges) {
    // Log to track changes in input properties
    if (changes['pageTitle']) {
    }
  }

  ngAfterViewInit() {
    this.pageTitle = this.pageTitle;
  }
  openModal() {
    this.dialog.open(DashboardAddRetailProduct, {
      width: '60%',  // Adjust width as needed
      height: 'auto',
      position: {
        right: '0',  // Ensure it opens on the right
      },
    });
  }

  openConfigurationModal() {
    this.dialog.open(AdminCenterAddConfiguration, {
      width: '60%',  // Adjust width as needed
      height: 'auto',
      position: {
        right: '0',  // Ensure it opens on the right
      },
    });
  }

  openLicenseModal() {
    this.dialog.open(AdminCenterAddLicense, {
      width: '60%',
      height: 'auto',
      position: {
        right: '0',
      },
    });
  }

  openAtmModal() {
    this.dialog.open(AdminCenterAddAtm, {
      width: '60%',
      height: 'auto',
      position: {
        right: '0',
      },
    });
  }

  openBranchModal() {
    this.dialog.open(AdminCenterAddBranch, {
      width: '60%',
      height: 'auto',
      position: {
        right: '0',
      },
    });
  }

  openMfaModal() {
    this.dialog.open(AdminCenterAddMfa, {
      width: '60%',
      height: 'auto',
      position: {
        right: '0',
      },
    });
  }

  openNotificationAddModal() {
    this.dialog.open(AdminCenterAddDeviceManagement, {
      width: '60%',
      height: 'auto',
      position: {
        right: '0',
      },
    });
  }

  openSubProductModal() {
    this.dialog.open(AdminCenterAddSubProduct, {
      width: '60%',
      height: 'auto',
      position: {
        right: '0',
      },
    });
  }

  openMessageCapaignModal() {
    this.dialog.open(AdminCenterAddMessageCampaign, {
      width: '60%',  // Adjust width as needed
      height: 'auto',
      position: {
        right: '0',  // Ensure it opens on the right
      },
    });
  }

  openSegmentModal() {
    this.dialog.open(AdminCenterAddSegment, {
      width: '60%',  // Adjust width as needed
      height: 'auto',
      position: {
        right: '0',  // Ensure it opens on the right
      },
    });
  }

  openTemplateCreationModal() {
    this.dialog.open(AdminCenterAddTemplateCreation, {
      width: '60%',  // Adjust width as needed
      height: 'auto',
      position: {
        right: '0',  // Ensure it opens on the right
      },
    });
  }

  openTableMigrationModal() {
    this.dialog.open(AdminCenterAddTableMigration, {
      width: '60%',  // Adjust width as needed
      height: 'auto',
      position: {
        right: '0',  // Ensure it opens on the right
      },
    });
  }

  subProductModel(isSubProduct: boolean) {
    this.subProduct = true;
    this.productTypeChanged.emit(isSubProduct);

  }

  retailProduct(isSubProduct: boolean) {
    this.subProduct = false
    this.productTypeChanged.emit(isSubProduct);
  }

  atmLocator(event: boolean) {
    this.atmLocators = false;
  }

  branchLocator(event: boolean) {
    this.atmLocators = true;
  }

  openSubModal() {
    this.dialog.open(DashboardSubProduct, {
      width: '60%',
      height: 'auto',
      position: {
        right: '0',
      },
    });
  }

  openTCModal() {
    this.dialog.open(AdminCenterAddTermsCondition, {
      width: '60%',
      height: 'auto',
      position: {
        right: '0',
      },
    });
  }

  openProductModal() {
    this.dialog.open(AdminCenterAddProduct, {
      width: '60%',
      height: 'auto',
      position: {
        right: '0',
      },
    });
  }

  openDatabaseModal() {
    this.dialog.open(AdminCenterAddDatabase, {
      width: '60%',
      height: 'auto',
      position: {
        right: '0',
      },
    });
  }

  openAddBannerModal() {
    this.dialog.open(AdminCenterAddBanner, {
      width: '60%',
      height: 'auto',
      position: {
        right: '0',
      },
    });
  }

  // Method to change active tab for User Overview
  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.tabChanged.emit(tab);
  }

  openDatePicker() {
  }

  refresh() {
  }
}