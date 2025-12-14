import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterCfmsParameters } from './admin-center-cfms-parameters';

describe('AdminCenterCfmsParameters', () => {
  let component: AdminCenterCfmsParameters;
  let fixture: ComponentFixture<AdminCenterCfmsParameters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterCfmsParameters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterCfmsParameters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
