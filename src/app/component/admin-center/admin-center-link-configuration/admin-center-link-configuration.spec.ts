import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterLinkConfiguration } from './admin-center-link-configuration';

describe('AdminCenterLinkConfiguration', () => {
  let component: AdminCenterLinkConfiguration;
  let fixture: ComponentFixture<AdminCenterLinkConfiguration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterLinkConfiguration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterLinkConfiguration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
