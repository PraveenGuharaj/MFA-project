import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterAddBanner } from './admin-center-add-banner';

describe('AdminCenterAddBanner', () => {
  let component: AdminCenterAddBanner;
  let fixture: ComponentFixture<AdminCenterAddBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterAddBanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterAddBanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
