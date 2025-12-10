import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterAddBranch } from './admin-center-add-branch';

describe('AdminCenterAddBranch', () => {
  let component: AdminCenterAddBranch;
  let fixture: ComponentFixture<AdminCenterAddBranch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCenterAddBranch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCenterAddBranch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
