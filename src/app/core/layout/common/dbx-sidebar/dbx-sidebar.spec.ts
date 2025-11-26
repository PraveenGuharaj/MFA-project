import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbxSidebar } from './dbx-sidebar';

describe('DbxSidebar', () => {
  let component: DbxSidebar;
  let fixture: ComponentFixture<DbxSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbxSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbxSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
