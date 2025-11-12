import { TestBed } from '@angular/core/testing';

import { MfaManagementService } from './mfa-management.service';

describe('MfaManagementService', () => {
  let service: MfaManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MfaManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
