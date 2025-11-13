import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfaHeader } from './mfa-header';

describe('MfaHeader', () => {
  let component: MfaHeader;
  let fixture: ComponentFixture<MfaHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfaHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfaHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
