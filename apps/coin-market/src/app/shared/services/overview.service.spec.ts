import { TestBed } from '@angular/core/testing';

import { OverviewService } from './overview.service';

describe('CoinService', () => {
    let service: OverviewService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(OverviewService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
