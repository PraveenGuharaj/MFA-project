import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSubProduct } from './dashboard-sub-product';

describe('DashboardSubProduct', () => {
  let component: DashboardSubProduct;
  let fixture: ComponentFixture<DashboardSubProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSubProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSubProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
