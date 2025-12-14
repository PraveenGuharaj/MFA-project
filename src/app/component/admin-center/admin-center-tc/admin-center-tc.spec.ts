import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterTc } from './admin-center-tc';

describe('AdminCenterTc', () => {
  let component: AdminCenterTc;
  let fixture: ComponentFixture<AdminCenterTc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterTc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterTc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
