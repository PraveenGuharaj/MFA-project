import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MerchantSideBar } from '../../merchant-side-bar/merchant-side-bar';
import { MerchantList } from '../../../../../component/merchant-list/merchant-list';
import { MerchantCategories } from '../../../../../component/mechant/merchant-categories/merchant-categories';
import { MerchantOfferManagement } from '../../../../../component/mechant/merchant-offer-management/merchant-offer-management';

@Component({
  selector: 'app-merchantf-layout',
  imports: [
    CommonModule,
    RouterModule,
    MerchantSideBar

  ],
  templateUrl: './merchantf-layout.html',
  styleUrl: './merchantf-layout.scss',
})
export class MerchantfLayout {
  isDrawerOpen = false;

}
