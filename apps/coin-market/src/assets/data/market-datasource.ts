import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { Market } from '../../app/models/market';
import { MarketsService } from '../../app/shared/services/markets.service';

export class MarketsDataSource implements DataSource<Market> {
    private marketSubject = new BehaviorSubject<Market[]>([]);
    constructor(private marketService: MarketsService) {}

    connect(): Observable<Market[]> {
        return this.marketService.marketItems$;
    }

    disconnect(): void {}
    loadMarkets(
        pairId: number,
        filter = '',
        sortDirection = 'asc',
        pageIndex = 0,
        pageSize = 3
    ) {
        this.marketService
            .findMarkets(pairId, filter, sortDirection, pageIndex, pageSize)
            .subscribe((markets) => this.marketSubject.next(markets));
    }
}
