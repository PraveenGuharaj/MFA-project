import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterPartnerOnboarding } from './admin-center-partner-onboarding';

describe('AdminCenterPartnerOnboarding', () => {
  let component: AdminCenterPartnerOnboarding;
  let fixture: ComponentFixture<AdminCenterPartnerOnboarding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterPartnerOnboarding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterPartnerOnboarding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
