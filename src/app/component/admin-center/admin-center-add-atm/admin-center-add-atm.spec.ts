import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterAddAtm } from './admin-center-add-atm';

describe('AdminCenterAddAtm', () => {
  let component: AdminCenterAddAtm;
  let fixture: ComponentFixture<AdminCenterAddAtm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterAddAtm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterAddAtm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
