import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantCategories } from './merchant-categories';

describe('MerchantCategories', () => {
  let component: MerchantCategories;
  let fixture: ComponentFixture<MerchantCategories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerchantCategories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantCategories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
