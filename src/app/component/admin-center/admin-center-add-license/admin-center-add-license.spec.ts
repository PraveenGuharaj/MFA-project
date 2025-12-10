import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterAddLicense } from './admin-center-add-license';

describe('AdminCenterAddLicense', () => {
  let component: AdminCenterAddLicense;
  let fixture: ComponentFixture<AdminCenterAddLicense>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterAddLicense]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterAddLicense);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
