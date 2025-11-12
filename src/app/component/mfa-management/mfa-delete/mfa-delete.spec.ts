import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfaDelete } from './mfa-delete';

describe('MfaDelete', () => {
  let component: MfaDelete;
  let fixture: ComponentFixture<MfaDelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfaDelete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfaDelete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
