import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { Market } from '../../app/models/market';
import { MarketsService } from '../../app/shared/services/markets.service';

export class MarketsDataSource implements DataSource<Market> {
    constructor(private marketService: MarketsService) {}

    connect(collectionViewer: CollectionViewer): Observable<Market[]> {
        return this.marketService.marketItems$;
    }

    disconnect(): void {}
}
