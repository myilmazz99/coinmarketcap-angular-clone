import { Injectable } from '@angular/core';
import { coinListData } from 'apps/coin-market/src/assets/data/coinListData';
import { BehaviorSubject, Observable } from 'rxjs';
import { CoinList } from '../../models/coin-list.model';

@Injectable({
    providedIn: 'root',
})
export class CoinListService {
    private coinItems = new BehaviorSubject<CoinList[]>([]);
    public coinItems$: Observable<CoinList[]>;

    constructor() {
        this.coinItems.next(coinListData);
        this.coinItems$ = this.coinItems.asObservable();
    }
}
