import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterManageMfa } from './admin-center-manage-mfa';

describe('AdminCenterManageMfa', () => {
  let component: AdminCenterManageMfa;
  let fixture: ComponentFixture<AdminCenterManageMfa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterManageMfa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterManageMfa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
