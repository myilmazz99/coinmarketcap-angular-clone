import { TestBed } from '@angular/core/testing';

import { GainersLosersService } from './gainers-losers.service';

describe('GainersLosersService', () => {
  let service: GainersLosersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GainersLosersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
