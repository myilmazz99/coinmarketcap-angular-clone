import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Coin } from '../../models/coin.model';
import { fakeCoin } from '../../../assets/data/coin-detail.data';

@Injectable({
    providedIn: 'root',
})
export class CoinDetailsService {
    private coinItems = new BehaviorSubject<Coin>(null);
    public coinItems$: Observable<Coin>;

    // private coinStatistics = new BehaviorSubject<CoinStatistics>(null);
    // public coinStatistics$: Observable<CoinStatistics>;

    // private coinPrice = new BehaviorSubject<CoinPrices>(null);
    // public coinPrice$: Observable<CoinPrices>;

    constructor() {
        this.coinItems$ = this.coinItems.asObservable();
        this.getCoin();

        // this.coinStatistics$ = this.coinStatistics.asObservable();
        // this.getCoinStatistics();

        // this.coinPrice$ = this.coinPrice.asObservable();
        // this.getCoinPrice();
    }

    getCoin() {
        this.coinItems.next(fakeCoin);
    }

    // getCoinStatistics() {
    //   this.coinStatistics.next(fakeCoinStatistics);
    // }

    // getCoinPrice() {
    //   this.coinPrice.next(fakeCoinPrice);
    // }
}
