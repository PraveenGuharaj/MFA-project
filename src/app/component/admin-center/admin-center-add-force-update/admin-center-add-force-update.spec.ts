import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterAddForceUpdate } from './admin-center-add-force-update';

describe('AdminCenterAddForceUpdate', () => {
  let component: AdminCenterAddForceUpdate;
  let fixture: ComponentFixture<AdminCenterAddForceUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterAddForceUpdate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterAddForceUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
