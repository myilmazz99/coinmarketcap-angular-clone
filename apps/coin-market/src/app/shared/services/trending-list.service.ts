import { Injectable } from '@angular/core';
import { fakeTrendingCoinList } from 'apps/coin-market/src/assets/data/coinData';
import { BehaviorSubject, Observable } from 'rxjs';
import { Coin } from '../../models/coin.model';

@Injectable({
    providedIn: 'root',
})
export class TrendingListService {
    private trendingCoins = new BehaviorSubject<Coin[]>(null);
    public trendingCoins$: Observable<Coin[]>;

    constructor() {
        this.trendingCoins$ = this.trendingCoins.asObservable();
        this.getTrendingCoins();
    }

    getTrendingCoins(): void {
        this.trendingCoins.next(fakeTrendingCoinList);
    }
}
