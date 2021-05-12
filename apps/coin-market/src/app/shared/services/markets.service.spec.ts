import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { Market } from '../../models/market';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { MarketsService } from './markets.service';

describe('MarketsService', () => {
    let service: MarketsService;
    let httpMock;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [MarketsService],
        });
    });

    beforeEach(inject(
        [MarketsService, HttpTestingController],
        (_service, _httpMock) => {
            service = _service;
            httpMock = _httpMock;
        }
    ));
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('should filterItems', () => {
        let Marketskeler = [
            {
                imageUrl: 'assets/img/Binance.png',
                source: 'Binance',
                pairs: 'BTC/USD',
                price: 54462.22,
                volume: 4018305861,
                volumePercentage: 6.33,
                liquidity: 888,
                confidence: 'Low',
                updated: 'Recently',
            },
            {
                imageUrl: 'assets/img/HuobiGlobal.jpg',
                source: 'Huobi Global',
                pairs: 'BTC/USDT',
                price: 54448.11,
                volume: 1611191824,
                volumePercentage: 2.54,
                liquidity: 925,
                confidence: 'Medium',
                updated: 'Recently',
            },
            {
                imageUrl: 'assets/img/HuobiGlobal.jpg',
                source: 'Huobi Global',
                pairs: 'BTC/USDT',
                price: 54448.11,
                volume: 1611191824,
                volumePercentage: 2.54,
                liquidity: 925,
                confidence: 'High',
                updated: 'Recently',
            },
            {
                imageUrl: 'assets/img/HuobiGlobal.jpg',
                source: 'Huobi Global',
                pairs: 'BTC/USDT',
                price: 54448.11,
                volume: 1611191824,
                volumePercentage: 2.54,
                liquidity: 925,
                confidence: 'High',
                updated: 'Recently',
            },
        ];
        service.selection.next('USD');
        service.filterPair();
        service.marketItems$.subscribe((x) => {
            console.log(x.length);
            expect(x).toHaveLength(52);
            expect(x[2][1]).toBe('Huobi asdsad');
        });

        const req = httpMock.expectOne('assets/data/marketsData.json');

        req.flush(Marketskeler);
        httpMock.verify();
    });
});
