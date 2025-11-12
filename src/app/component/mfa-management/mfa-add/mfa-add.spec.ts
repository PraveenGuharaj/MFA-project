import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfaAdd } from './mfa-add';

describe('MfaAdd', () => {
  let component: MfaAdd;
  let fixture: ComponentFixture<MfaAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfaAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfaAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
