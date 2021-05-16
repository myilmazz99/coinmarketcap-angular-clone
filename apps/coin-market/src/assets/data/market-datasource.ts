import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { MarketList } from '../../app/models/market';
import { MarketsService } from '../../app/shared/services/markets.service';

export class MarketsDataSource implements DataSource<MarketList> {
    constructor(private marketService: MarketsService) {}

    connect(): Observable<MarketList[]> {
        return this.marketService.screenItems$;
    }

    disconnect(): void {}
    loadMarkets() {
        this.marketService.findMarkets();
        this.marketService.filterPair();
        this.marketService.sortData();
    }
}
