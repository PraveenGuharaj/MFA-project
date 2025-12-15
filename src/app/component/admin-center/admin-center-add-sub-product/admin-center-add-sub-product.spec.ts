import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterAddSubProduct } from './admin-center-add-sub-product';

describe('AdminCenterAddSubProduct', () => {
  let component: AdminCenterAddSubProduct;
  let fixture: ComponentFixture<AdminCenterAddSubProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterAddSubProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterAddSubProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
