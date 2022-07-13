import { TestBed } from '@angular/core/testing';

import { DiabloService } from './diablo.service';

describe('DiabloService', () => {
  let service: DiabloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiabloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
