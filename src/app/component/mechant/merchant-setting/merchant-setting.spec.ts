import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantSetting } from './merchant-setting';

describe('MerchantSetting', () => {
  let component: MerchantSetting;
  let fixture: ComponentFixture<MerchantSetting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerchantSetting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantSetting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
