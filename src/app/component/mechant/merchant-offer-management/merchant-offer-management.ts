import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-merchant-offer-management',
  imports: [
    CommonModule, MatIconModule, MatButtonModule, FormsModule

  ],
  templateUrl: './merchant-offer-management.html',
  styleUrl: './merchant-offer-management.scss',
})
export class MerchantOfferManagement {
  showCreateOfferModal: boolean = false;
  currentStep: number = 1;
  offers = [
    {
      merchantName: 'Nike Store',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
      title: 'Summer Sale - 30% Off',
      discount: '30%',
      discountType: 'Percentage',
      category: 'Seasonal',
      validPeriod: '6/1/2024 - 8/31/2024',
      status: 'Active',
    },
    {
      merchantName: 'Apple Store',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
      title: 'Back to School Bundle',
      discount: '$200',
      discountType: 'Fixed',
      category: 'New Customer',
      validPeriod: '8/15/2024 - 9/30/2024',
      status: 'Active',
    },
    {
      merchantName: 'Starbucks',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Starbucks_logo_2011.svg',
      title: 'Buy One Get One Free',
      discount: '1 Free',
      discountType: 'BOGO',
      category: 'Loyalty',
      validPeriod: '7/1/2024 - 7/31/2024',
      status: 'Pending',
    },
  ];


  newOffer = {
    merchant: '',
    category: '',
    subProduct: '',
    offerTitle: '',
    offerCategory: '',
    description: '',
    discountValue: '',
    discountType: '',
    eligibilityRule: '',
    startDate: '',
    endDate: '',
    termsConditionsUrl: '',
  };
  drawerMode: 'list' | 'view' = 'list';
  selectedOffer: any = null;
  showOfferModal = false;
  isEditMode = false;
  selectedOfferIndex: number | null = null;
  offerForm = {
    title: '',
    discount: '',
    discountType: '',
    category: '',
    validPeriod: '',
    description: ''
  }; createOffer() {
  }


  closeCreateOfferModal() {
    this.showCreateOfferModal = false;
  }

  goToNextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    } else {
      this.submitOffer();
    }
  }



  submitOffer() {
    const logo =
      this.newOffer.merchant === 'nike'
        ? 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg'
        : this.newOffer.merchant === 'apple'
          ? 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'
          : this.newOffer.merchant === 'starbucks'
            ? 'https://upload.wikimedia.org/wikipedia/commons/5/58/Starbucks_logo_2011.svg'
            : '';

    const discount =
      this.newOffer.discountType === 'percentage'
        ? `${this.newOffer.discountValue}%`
        : this.newOffer.discountType === 'fixed'
          ? `$${this.newOffer.discountValue}`
          : this.newOffer.discountValue || '';

    const validPeriod = this.newOffer.startDate && this.newOffer.endDate
      ? `${this.newOffer.startDate} - ${this.newOffer.endDate}`
      : '';

    const builtOffer: any = {
      merchantName: this.mapMerchantNameToDisplay(this.newOffer.merchant),
      logo,
      title: this.newOffer.offerTitle,
      discount,
      discountType: this.newOffer.discountType ? this.capitalizeFirst(this.newOffer.discountType) : '',
      category: this.newOffer.offerCategory || this.newOffer.category,
      validPeriod,
      status: 'Active',
      description: this.newOffer.description || '',
      termsConditionsUrl: this.newOffer.termsConditionsUrl || ''
    };

    if (this.isEditMode && this.selectedOfferIndex !== null && this.selectedOfferIndex >= 0) {
      // update existing item
      this.offers[this.selectedOfferIndex] = { ...this.offers[this.selectedOfferIndex], ...builtOffer };
    } else {
      // add new
      this.offers.unshift(builtOffer);
    }

    // reset and close
    this.isEditMode = false;
    this.selectedOfferIndex = null;
    this.newOffer = {
      merchant: '',
      category: '',
      subProduct: '',
      offerTitle: '',
      offerCategory: '',
      description: '',
      discountValue: '',
      discountType: '',
      eligibilityRule: '',
      startDate: '',
      endDate: '',
      termsConditionsUrl: '',
    };
    this.closeCreateOfferModal();
  }


  goToPreviousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  mapMerchantNameToDisplay(key: string) {
    if (!key) return '';
    if (key === 'nike') return 'Nike Store';
    if (key === 'apple') return 'Apple Store';
    if (key === 'starbucks') return 'Starbucks';
    return key;
  }

  capitalizeFirst(s: string) {
    if (!s) return s;
    return s.charAt(0).toUpperCase() + s.slice(1);
  }


  viewOffer(offer: any, index: number) {
    this.isEditMode = true;
    this.selectedOfferIndex = index;

    this.newOffer.merchant = this.mapMerchantNameToKey(offer.merchantName) || offer.merchantName?.toLowerCase() || '';
    this.newOffer.category = offer.category || '';
    this.newOffer.subProduct = '';
    this.newOffer.offerTitle = offer.title || '';
    this.newOffer.offerCategory = offer.category || offer.offerCategory || '';
    this.newOffer.description = offer.description || '';
    this.newOffer.discountType = this.normalizeDiscountType(offer.discount, offer.discountType);
    this.newOffer.discountValue = this.extractDiscountValue(offer.discount, this.newOffer.discountType);
    if (offer.validPeriod && offer.validPeriod.includes('-')) {
      const parts = offer.validPeriod.split('-').map((p: any) => p.trim());
      this.newOffer.startDate = parts[0] || '';
      this.newOffer.endDate = parts[1] || '';
    } else {
      this.newOffer.startDate = '';
      this.newOffer.endDate = '';
    }
    this.newOffer.termsConditionsUrl = offer.termsConditionsUrl || '';

    this.showCreateOfferModal = true;
    this.currentStep = 1;
  }

  mapMerchantNameToKey(merchantName: string): string {
    if (!merchantName) return '';
    const name = merchantName.toLowerCase();
    if (name.includes('nike')) return 'nike';
    if (name.includes('apple')) return 'apple';
    if (name.includes('starbuck') || name.includes('starbucks')) return 'starbucks';
    return '';
  }

  normalizeDiscountType(discountString: string, explicitType?: string) {
    if (explicitType) return explicitType.toLowerCase();
    if (!discountString) return '';
    if (discountString.includes('%')) return 'percentage';
    if (discountString.toLowerCase().includes('free') || discountString.toUpperCase().includes('BOGO')) return 'bogo';
    if (discountString.startsWith('$')) return 'fixed';
    return 'fixed';
  }

  extractDiscountValue(discountString: string, discountType: string) {
    if (!discountString) return '';
    if (discountType === 'percentage') {
      const match = discountString.match(/(\d+(\.\d+)?)/);
      return match ? match[0] : '';
    }
    if (discountType === 'fixed') {
      const match = discountString.replace(/[^0-9.]/g, '');
      return match || '';
    }
    return discountString;
  }

  openCreateOfferModal() {
    this.isEditMode = false;
    this.selectedOfferIndex = null;
    this.currentStep = 1;
    this.showCreateOfferModal = true;



    this.newOffer = {
      merchant: '',
      category: '',
      subProduct: '',
      offerTitle: '',
      offerCategory: '',
      description: '',
      discountValue: '',
      discountType: '',
      eligibilityRule: '',
      startDate: '',
      endDate: '',
      termsConditionsUrl: '',
    };

    this.showCreateOfferModal = true;
    this.currentStep = 1;
  }
}