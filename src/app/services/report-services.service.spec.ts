import { TestBed } from '@angular/core/testing';

import { ReportServicesService } from './report-services.service';

describe('ReportServicesService', () => {
  let service: ReportServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
