import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterAddTermsCondition } from './admin-center-add-terms-condition';

describe('AdminCenterAddTermsCondition', () => {
  let component: AdminCenterAddTermsCondition;
  let fixture: ComponentFixture<AdminCenterAddTermsCondition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterAddTermsCondition]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterAddTermsCondition);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
