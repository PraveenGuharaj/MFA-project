import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfaSidebar } from './mfa-sidebar';

describe('MfaSidebar', () => {
  let component: MfaSidebar;
  let fixture: ComponentFixture<MfaSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfaSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfaSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
