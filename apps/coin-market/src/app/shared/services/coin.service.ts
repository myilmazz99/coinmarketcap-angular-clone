import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Coin } from '../../models/coin.model';

@Injectable({
    providedIn: 'root',
})
export class CoinService {
    private _coin = new BehaviorSubject<Coin>(null);
    coin$: Observable<Coin>;

    get coin() {
        return this._coin.getValue();
    }

    constructor(private http: HttpClient) {
        this.coin$ = this._coin.asObservable();
    }

    getCoin(coinId: string) {
        this.http
            .get<Coin[]>('assets/data/coin-details.json')
            .toPromise()
            .then((data) => {
                if (data) {
                    const coin = data.find((i) => i.coin_id === coinId);

                    if (coin) {
                        this._coin.next(coin);
                    }
                }
            });
    }
}
