import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterProduct } from './admin-center-product';

describe('AdminCenterProduct', () => {
  let component: AdminCenterProduct;
  let fixture: ComponentFixture<AdminCenterProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
