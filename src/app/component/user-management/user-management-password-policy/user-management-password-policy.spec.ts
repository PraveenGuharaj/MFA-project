import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementPasswordPolicy } from './user-management-password-policy';

describe('UserManagementPasswordPolicy', () => {
  let component: UserManagementPasswordPolicy;
  let fixture: ComponentFixture<UserManagementPasswordPolicy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserManagementPasswordPolicy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserManagementPasswordPolicy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
