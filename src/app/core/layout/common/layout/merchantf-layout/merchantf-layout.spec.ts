import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantfLayout } from './merchantf-layout';

describe('MerchantfLayout', () => {
  let component: MerchantfLayout;
  let fixture: ComponentFixture<MerchantfLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerchantfLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantfLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
