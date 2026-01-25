import { TestBed } from '@angular/core/testing';

import { CommonToaster } from './common-toaster';

describe('CommonToaster', () => {
  let service: CommonToaster;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonToaster);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
