import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Coin } from '../../models/coin.model';
import { fakeCoin } from '../../../assets/data/coin-detail.data';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class CoinDetailsService {
    private coinItems = new BehaviorSubject<Coin>(null);
    public coinItems$: Observable<Coin>;

    constructor(private http: HttpClient) {
        this.coinItems$ = this.coinItems.asObservable();
        this.getCoin(); //?delete after backend implementation
    }

    getCoin(coin_id?: string) {
        // this.http
        //     .post<Coin>(`.../currencies/${coin_id}/summary`, {
        //         date_range: '24h',
        //     })
        //     .subscribe(
        //         (data) => {
        //             this.coinItems.next(data);
        //         },
        //         (err) => {
        //             console.log(err);
        //         }
        //     );

        //? delete after http implementation
        this.coinItems.next(fakeCoin);
    }
}
