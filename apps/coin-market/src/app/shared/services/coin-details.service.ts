import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Coin } from '../../models/coin.model';
import { fakeCoin } from '../../../assets/data/coin-detail.data';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CoinListService } from './coin-list.service';

@Injectable({
    providedIn: 'root',
})
export class CoinDetailsService {
    private coinItems = new BehaviorSubject<Coin>(null);
    public coinItems$: Observable<Coin>;

    constructor(
        private http: HttpClient,
        private activatedRoute: ActivatedRoute
    ) {
        this.coinItems$ = this.coinItems.asObservable();
    }

    getCoin(coinId: string) {
        this.http
            .get<Coin[]>('assets/data/coin-details.json')
            .toPromise()
            .then((data) => {
                if (data) {
                    const coin = data.find((i) => i.coin_id === coinId);

                    if (coin) {
                        this.coinItems.next(coin);
                    }
                }
            });
    }
}
