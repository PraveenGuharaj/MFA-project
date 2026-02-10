import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../admin-center-service';
import { MatDialog } from '@angular/material/dialog';
import { AdminCenterAddProduct } from '../admin-center-add-product/admin-center-add-product';
import { CommonToaster } from '../../../shared/services/common-toaster';
import { ComonPopup } from '../../../shared/comon-popup/comon-popup';

@Component({
  selector: 'app-admin-center-product',
  imports: [
    CommonModule,
    MatIconModule,
    ComonPopup
  ],
  templateUrl: './admin-center-product.html',
  styleUrl: './admin-center-product.scss',
})
export class AdminCenterProduct {
  @Input() subProduct: boolean = false;
  getProductData: any;
  selectedProduct: any;
  showDeleteConfirm: boolean = false;

  constructor(private adminCenterService: AdminCenterService, public dialog: MatDialog,
    private commonToaster: CommonToaster
  ) { }

  products = [
    {
      productCode: 'PR0014',
      productNameEnglish: 'Digital Savings Account',
      productNameArabic: 'بطاقت',
      productDescriptionEnglish: 'A convenient online savings account that allows customers...',
      productDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
      status: 'Enabled',
      priority: 1

    },
    {
      productCode: 'PR0014',
      productNameEnglish: 'Digital Savings Account',
      productNameArabic: 'بطاقت',
      productDescriptionEnglish: 'A convenient online savings account that allows customers...',
      productDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
      status: 'Enabled',
      priority: 1

    },
    {
      productCode: 'PR0014',
      productNameEnglish: 'Digital Savings Account',
      productNameArabic: 'بطاقت',
      productDescriptionEnglish: 'A convenient online savings account that allows customers...',
      productDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
      status: 'Enabled',
      priority: 1

    },
    {
      productCode: 'PR0014',
      productNameEnglish: 'Digital Savings Account',
      productNameArabic: 'بطاقت',
      productDescriptionEnglish: 'A convenient online savings account that allows customers...',
      productDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
      status: 'Enabled',
      priority: 1

    },
    {
      productCode: 'PR0014',
      productNameEnglish: 'Digital Savings Account',
      productNameArabic: 'بطاقت',
      productDescriptionEnglish: 'A convenient online savings account that allows customers...',
      productDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
      status: 'Enabled',
      priority: 1

    },
    {
      productCode: 'PR0014',
      productNameEnglish: 'Digital Savings Account',
      productNameArabic: 'بطاقت',
      productDescriptionEnglish: 'A convenient online savings account that allows customers...',
      productDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
      status: 'Enabled',
      priority: 1

    },
    {
      productCode: 'PR0014',
      productNameEnglish: 'Digital Savings Account',
      productNameArabic: 'بطاقت',
      productDescriptionEnglish: 'A convenient online savings account that allows customers...',
      productDescriptionArabic: 'منتج بطاقة ائتمان للعملاء المميز',
      status: 'Enabled',
      priority: 1

    }
  ];

  ngOnInit() {
    this.getProductApi();
    this.adminCenterService.refresh$.subscribe(() => {
      console.log('Refreshing table...');
      this.getProductApi();
    });
  }

  onProductTypeChanged(subProduct: boolean) {
    this.subProduct = subProduct;
  }

  getProductApi() {
    this.adminCenterService.getProduct().subscribe((res: any) => {
      console.log('getproduct', res);
      this.getProductData = res.data;
    })
  }

  openModal(product: any) {
    console.log('product', product);

    const dialogRef = this.dialog.open(AdminCenterAddProduct, {
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
        this.getProductApi();
        // this.loadSubProducts(); //  refresh list / API call
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
    this.adminCenterService.deleteProduct(payload).subscribe((res) => {
      console.log('res', res);
      if (res.status.code == "000000") {
        this.commonToaster.showSuccess('Product License Deleted Successfully');
        this.getProductApi();
      }

    })
  }
}
