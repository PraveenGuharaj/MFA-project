import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterFaqManagement } from './admin-center-faq-management';

describe('AdminCenterFaqManagement', () => {
  let component: AdminCenterFaqManagement;
  let fixture: ComponentFixture<AdminCenterFaqManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterFaqManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterFaqManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
