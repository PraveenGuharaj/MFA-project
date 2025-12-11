import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterAddSegment } from './admin-center-add-segment';

describe('AdminCenterAddSegment', () => {
  let component: AdminCenterAddSegment;
  let fixture: ComponentFixture<AdminCenterAddSegment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterAddSegment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterAddSegment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
