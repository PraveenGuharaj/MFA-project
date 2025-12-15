import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterBaner } from './admin-center-baner';

describe('AdminCenterBaner', () => {
  let component: AdminCenterBaner;
  let fixture: ComponentFixture<AdminCenterBaner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterBaner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterBaner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
