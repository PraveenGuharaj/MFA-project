import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterAddDatabase } from './admin-center-add-database';

describe('AdminCenterAddDatabase', () => {
  let component: AdminCenterAddDatabase;
  let fixture: ComponentFixture<AdminCenterAddDatabase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterAddDatabase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterAddDatabase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
