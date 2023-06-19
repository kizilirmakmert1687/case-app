import { TestBed } from '@angular/core/testing';

import { CaseAppServiceService } from './case-app-service.service';

describe('CaseAppServiceService', () => {
  let service: CaseAppServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaseAppServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
