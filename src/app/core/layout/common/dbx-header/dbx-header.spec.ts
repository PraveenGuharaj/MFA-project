import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbxHeader } from './dbx-header';

describe('DbxHeader', () => {
  let component: DbxHeader;
  let fixture: ComponentFixture<DbxHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbxHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbxHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
