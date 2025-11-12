import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfaEdit } from './mfa-edit';

describe('MfaEdit', () => {
  let component: MfaEdit;
  let fixture: ComponentFixture<MfaEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfaEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfaEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
