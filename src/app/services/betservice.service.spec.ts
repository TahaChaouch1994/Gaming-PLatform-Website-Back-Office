import { TestBed } from '@angular/core/testing';

import { BetserviceService } from './betservice.service';

describe('BetserviceService', () => {
  let service: BetserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BetserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
