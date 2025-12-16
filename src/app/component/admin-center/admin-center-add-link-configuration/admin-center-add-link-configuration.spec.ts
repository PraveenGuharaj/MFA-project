import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterAddLinkConfiguration } from './admin-center-add-link-configuration';

describe('AdminCenterAddLinkConfiguration', () => {
  let component: AdminCenterAddLinkConfiguration;
  let fixture: ComponentFixture<AdminCenterAddLinkConfiguration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterAddLinkConfiguration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterAddLinkConfiguration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
