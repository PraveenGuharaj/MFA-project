import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfaFields } from './mfa-fields';

describe('MfaFields', () => {
  let component: MfaFields;
  let fixture: ComponentFixture<MfaFields>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfaFields]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfaFields);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
