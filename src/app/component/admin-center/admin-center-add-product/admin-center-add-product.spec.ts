import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterAddProduct } from './admin-center-add-product';

describe('AdminCenterAddProduct', () => {
  let component: AdminCenterAddProduct;
  let fixture: ComponentFixture<AdminCenterAddProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterAddProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterAddProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
