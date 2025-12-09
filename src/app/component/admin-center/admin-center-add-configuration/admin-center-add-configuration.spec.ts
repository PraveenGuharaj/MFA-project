import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterAddConfiguration } from './admin-center-add-configuration';

describe('AdminCenterAddConfiguration', () => {
  let component: AdminCenterAddConfiguration;
  let fixture: ComponentFixture<AdminCenterAddConfiguration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterAddConfiguration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterAddConfiguration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
