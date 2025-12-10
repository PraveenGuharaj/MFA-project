import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterAddMfa } from './admin-center-add-mfa';

describe('AdminCenterAddMfa', () => {
  let component: AdminCenterAddMfa;
  let fixture: ComponentFixture<AdminCenterAddMfa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterAddMfa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterAddMfa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
