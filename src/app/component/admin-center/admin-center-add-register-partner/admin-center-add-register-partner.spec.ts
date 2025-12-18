import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterAddRegisterPartner } from './admin-center-add-register-partner';

describe('AdminCenterAddRegisterPartner', () => {
  let component: AdminCenterAddRegisterPartner;
  let fixture: ComponentFixture<AdminCenterAddRegisterPartner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterAddRegisterPartner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterAddRegisterPartner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
