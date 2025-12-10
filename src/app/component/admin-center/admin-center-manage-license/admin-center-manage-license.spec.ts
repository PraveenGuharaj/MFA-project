import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterManageLicense } from './admin-center-manage-license';

describe('AdminCenterManageLicense', () => {
  let component: AdminCenterManageLicense;
  let fixture: ComponentFixture<AdminCenterManageLicense>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterManageLicense]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterManageLicense);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
