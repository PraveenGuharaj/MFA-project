import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterManageOtp } from './admin-center-manage-otp';

describe('AdminCenterManageOtp', () => {
  let component: AdminCenterManageOtp;
  let fixture: ComponentFixture<AdminCenterManageOtp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterManageOtp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterManageOtp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
