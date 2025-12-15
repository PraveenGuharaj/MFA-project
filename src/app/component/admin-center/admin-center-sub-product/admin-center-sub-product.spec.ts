import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterSubProduct } from './admin-center-sub-product';

describe('AdminCenterSubProduct', () => {
  let component: AdminCenterSubProduct;
  let fixture: ComponentFixture<AdminCenterSubProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterSubProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterSubProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
