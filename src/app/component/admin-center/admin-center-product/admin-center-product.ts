import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AdminCenterService } from '../admin-center-service';
import { MatDialog } from '@angular/material/dialog';
import { AdminCenterAddProduct } from '../admin-center-add-product/admin-center-add-product';

@Component({
  selector: 'app-admin-center-product',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './admin-center-product.html',
  styleUrl: './admin-center-product.scss',
})
export class AdminCenterProduct {
  @Input() subProduct: boolean = false;
  getProductData: any;

  constructor(private adminCenterService: AdminCenterService, public dialog: MatDialog) { }

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
}
