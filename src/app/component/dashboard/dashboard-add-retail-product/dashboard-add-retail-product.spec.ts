import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAddRetailProduct } from './dashboard-add-retail-product';

describe('DashboardAddRetailProduct', () => {
  let component: DashboardAddRetailProduct;
  let fixture: ComponentFixture<DashboardAddRetailProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardAddRetailProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAddRetailProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
