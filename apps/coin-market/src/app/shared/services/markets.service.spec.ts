import { inject, TestBed } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { MarketsService } from './markets.service';
import { skip } from 'rxjs/operators';

describe('MarketsService', () => {
    let service: MarketsService;
    let httpMock;
    let dummyMarkets = [
        {
            imageUrl: 'assets/img/Binance.png',
            market_name: 'Binance',
            pairs: 'BTC/USD',
            price: 54462.22,
            volume: 4018305861,
            volume_percentage: 6.33,
            liquidity: 888,
        },
        {
            imageUrl: 'assets/img/Liquid.png',
            market_name: 'Liquid',
            pairs: 'BTC/JPY',
            price: 54479.17,
            volume: 210098239,
            volume_percentage: 0.33,
            liquidity: 419,
        },
        {
            imageUrl: 'assets/img/CoinbasePro.jpg',
            market_name: 'Coinbase Pro',
            pairs: 'BTC/USD',
            price: 54409.0,
            volume: 1295336827,
            volume_percentage: 2.04,
            liquidity: 735,
        },
        {
            imageUrl: 'assets/img/Kraken.jpg',
            market_name: 'bitFlyer',
            pairs: 'BTC/EUR',
            price: '54348.0',
            volume: 'abc',
            volume_percentage: 0.89,
            liquidity: 726,
        },
    ];

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
    afterEach(() => {
        httpMock.verify();
    });

    it('should get marketItems$ based on dummyMarkets', (done) => {
        service.marketItems$.pipe(skip(1)).subscribe((res) => {
            expect(res).toHaveLength(4);
            expect(res[3].market_name).toEqual('Kraken');
            done();
        });
        const req = httpMock.expectOne('assets/data/marketsData.json');
        req.flush(dummyMarkets);
    });
    it('should get filteredItems$ based on dummyMarkets', (done) => {
        service.filteredItems$.pipe(skip(1)).subscribe((res) => {
            expect(res).toHaveLength(4);
            expect(res[0].market_name).toEqual('Binance');
            done();
        });
        const req = httpMock.expectOne('assets/data/marketsData.json');
        req.flush(dummyMarkets);
    });
    it('should get dataLength$ based on dummyMarkets', (done) => {
        service.dataLength$.pipe(skip(1)).subscribe((res) => {
            expect(res).toEqual(4);
            done();
        });
        const req = httpMock.expectOne('assets/data/marketsData.json');
        req.flush(dummyMarkets);
    });

    describe('findMarkets()', () => {
        it('should paginate items based on pageSize', (done) => {
            service.pageSize.next(2);
            service.findMarkets();
            service.screenItems$.pipe(skip(1)).subscribe((res) => {
                expect(res).toHaveLength(2);
                done();
            });
            const req = httpMock.expectOne('assets/data/marketsData.json');
            req.flush(dummyMarkets);
        });
    });

    describe('sortData()', () => {
        it('should sort items for source column in ascending', (done) => {
            service.sortEvent.next('market_name');
            service.sortOrder.next('asc');
            service.filteredItems$.pipe(skip(1)).subscribe((res) => {
                expect(res[0].market_name).toEqual('Binance');
                done();
            });

            const req = httpMock.expectOne('assets/data/marketsData.json');
            req.flush(dummyMarkets);
            service.sortData();
        });

        it('should sort items for source column in descending', (done) => {
            service.sortEvent.next('market_name');
            service.sortOrder.next('desc');
            service.filteredItems$.pipe(skip(2)).subscribe((res) => {
                expect(res[0].market_name).toEqual('Liquid');
                done();
            });
            const req = httpMock.expectOne('assets/data/marketsData.json');
            req.flush(dummyMarkets);
            service.sortData();
        });

        it('should sort items for price column in ascending', (done) => {
            service.sortEvent.next('price');
            service.sortOrder.next('asc');
            service.filteredItems$.pipe(skip(2)).subscribe((res) => {
                expect(res[0].price).toEqual(54348.0);
                done();
            });
            const req = httpMock.expectOne('assets/data/marketsData.json');
            req.flush(dummyMarkets);
            service.sortData();
        });

        it('should sort items for price column in descending', (done) => {
            service.sortEvent.next('price');
            service.sortOrder.next('desc');
            service.filteredItems$.pipe(skip(2)).subscribe((res) => {
                expect(res[0].price).toEqual(54479.17);
                done();
            });
            const req = httpMock.expectOne('assets/data/marketsData.json');
            req.flush(dummyMarkets);
            service.sortData();
        });

        describe('filterPair()', () => {
            it('should display all the items if the selection is All', (done) => {
                service.selection.next('All');
                service.filteredItems$.pipe(skip(2)).subscribe((res) => {
                    expect(res).toHaveLength(4);
                    done();
                });
                const req = httpMock.expectOne('assets/data/marketsData.json');
                req.flush(dummyMarkets);
                service.filterPair();
            });
            it('should filter items for pair JPY', (done) => {
                service.selection.next('JPY');
                service.filteredItems$.pipe(skip(2)).subscribe((res) => {
                    expect(res[0].market_name).toEqual('Liquid');
                    expect(res).toHaveLength(1);
                    done();
                });
                const req = httpMock.expectOne('assets/data/marketsData.json');
                req.flush(dummyMarkets);
                service.filterPair();
            });

            it('should filter items for pair USD', (done) => {
                service.selection.next('USD');
                service.filteredItems$.pipe(skip(2)).subscribe((res) => {
                    expect(res[0].market_name).toEqual('Binance');
                    expect(res[1].market_name).toEqual('Coinbase Pro');
                    expect(res).toHaveLength(2);
                    done();
                });
                const req = httpMock.expectOne('assets/data/marketsData.json');
                req.flush(dummyMarkets);
                service.filterPair();
            });
        });
    });
});
