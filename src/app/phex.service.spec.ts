import { TestBed } from '@angular/core/testing';

import { PhexService } from './phex.service';

describe('PhexService', () => {
  let service: PhexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
