import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfaView } from './mfa-view';

describe('MfaView', () => {
  let component: MfaView;
  let fixture: ComponentFixture<MfaView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfaView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfaView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
