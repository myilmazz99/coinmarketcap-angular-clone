import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { Market } from '../../app/models/market';
import { MarketsService } from '../../app/shared/services/markets.service';

export class MarketsDataSource implements DataSource<Market> {
    constructor(private marketService: MarketsService) {}

    connect(): Observable<Market[]> {
        return this.marketService.screenItems$;
    }

    disconnect(): void {}
    loadMarkets() {
        this.marketService.findMarkets();
        this.marketService.filterPair();
        this.marketService.sortData();
    }
}
