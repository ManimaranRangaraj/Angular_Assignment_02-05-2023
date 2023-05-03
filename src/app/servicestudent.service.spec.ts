import { TestBed } from '@angular/core/testing';

import { ServicestudentService } from './servicestudent.service';

describe('ServicestudentService', () => {
  let service: ServicestudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicestudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
