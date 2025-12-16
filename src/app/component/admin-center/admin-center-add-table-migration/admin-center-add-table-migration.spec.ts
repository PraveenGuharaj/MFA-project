import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterAddTableMigration } from './admin-center-add-table-migration';

describe('AdminCenterAddTableMigration', () => {
  let component: AdminCenterAddTableMigration;
  let fixture: ComponentFixture<AdminCenterAddTableMigration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterAddTableMigration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterAddTableMigration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
