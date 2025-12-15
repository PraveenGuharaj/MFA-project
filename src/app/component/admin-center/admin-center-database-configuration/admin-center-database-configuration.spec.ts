import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterDatabaseConfiguration } from './admin-center-database-configuration';

describe('AdminCenterDatabaseConfiguration', () => {
  let component: AdminCenterDatabaseConfiguration;
  let fixture: ComponentFixture<AdminCenterDatabaseConfiguration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterDatabaseConfiguration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterDatabaseConfiguration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
