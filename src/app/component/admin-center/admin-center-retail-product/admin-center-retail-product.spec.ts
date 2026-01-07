import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterRetailProduct } from './admin-center-retail-product';

describe('AdminCenterRetailProduct', () => {
  let component: AdminCenterRetailProduct;
  let fixture: ComponentFixture<AdminCenterRetailProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterRetailProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterRetailProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
