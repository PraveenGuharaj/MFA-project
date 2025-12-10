import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterCustomerSegments } from './admin-center-customer-segments';

describe('AdminCenterCustomerSegments', () => {
  let component: AdminCenterCustomerSegments;
  let fixture: ComponentFixture<AdminCenterCustomerSegments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterCustomerSegments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterCustomerSegments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
