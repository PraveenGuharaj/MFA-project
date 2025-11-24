import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantProduct } from './merchant-product';

describe('MerchantProduct', () => {
  let component: MerchantProduct;
  let fixture: ComponentFixture<MerchantProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerchantProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
