import { DataSource } from '@angular/cdk/collections';
import { CoinList } from 'apps/coin-market/src/app/models/coin-list.model';
import { CoinListService } from 'apps/coin-market/src/app/shared/services/coin-list.service';
import { Observable } from 'rxjs';

export class CoinListDatasource implements DataSource<CoinList> {
    constructor(public coinListService: CoinListService) {}

    connect(): Observable<CoinList[]> {
        return this.coinListService.screenItems$;
    }
    disconnect() {}

    loadCoins() {
        this.coinListService.paginateCoins();
        this.coinListService.sortCoins();
    }
}
