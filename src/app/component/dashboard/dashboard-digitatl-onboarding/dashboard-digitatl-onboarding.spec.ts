import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDigitatlOnboarding } from './dashboard-digitatl-onboarding';

describe('DashboardDigitatlOnboarding', () => {
  let component: DashboardDigitatlOnboarding;
  let fixture: ComponentFixture<DashboardDigitatlOnboarding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardDigitatlOnboarding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardDigitatlOnboarding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
