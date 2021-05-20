import { TestBed } from '@angular/core/testing';

import { CoinListService } from './coin-list.service';

describe('CoinListService', () => {
  let service: CoinListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoinListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
