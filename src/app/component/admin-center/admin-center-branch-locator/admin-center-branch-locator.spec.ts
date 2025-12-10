import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterBranchLocator } from './admin-center-branch-locator';

describe('AdminCenterBranchLocator', () => {
  let component: AdminCenterBranchLocator;
  let fixture: ComponentFixture<AdminCenterBranchLocator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterBranchLocator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterBranchLocator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
