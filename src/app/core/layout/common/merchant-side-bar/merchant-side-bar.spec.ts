import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantSideBar } from './merchant-side-bar';

describe('MerchantSideBar', () => {
  let component: MerchantSideBar;
  let fixture: ComponentFixture<MerchantSideBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerchantSideBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantSideBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
