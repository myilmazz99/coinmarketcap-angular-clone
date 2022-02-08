import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CoinList } from '../../models/coin-list.model';

@Injectable({
    providedIn: 'root',
})
export class CoinListService {
    private coinItems = new BehaviorSubject<CoinList[]>([]);
    public coinItems$: Observable<CoinList[]>;

    private screenItems = new BehaviorSubject<CoinList[]>([]);
    public screenItems$: Observable<CoinList[]>;

    private dataLength = new BehaviorSubject<number>(0);
    public dataLength$: Observable<number>;

    public pageSize: BehaviorSubject<number> = new BehaviorSubject(20);
    public pageNumber: BehaviorSubject<number> = new BehaviorSubject(0);
    public sortEvent: BehaviorSubject<string> = new BehaviorSubject('');
    public sortOrder: BehaviorSubject<string> = new BehaviorSubject('asc');

    constructor(private httpClient: HttpClient) {
        this.getCoins();

        this.coinItems$ = this.coinItems.asObservable();
        this.screenItems$ = this.screenItems.asObservable();
        this.dataLength$ = this.dataLength.asObservable();
    }

    getCoinList() {
        return this.coinItems.getValue();
    }

    getCoins() {
        this.httpClient
            .get<CoinList[]>('assets/data/coin-list.json')
            .toPromise()
            .then((data) => {
                this.coinItems.next(data);
                this.dataLength.next(data.length);
                this.paginateCoins();
            });
    }

    paginateCoins() {
        const pageNumber = this.pageNumber.getValue();
        const pageSize = this.pageSize.getValue();

        let res = [...this.coinItems.getValue()];

        const initialPos = pageNumber * pageSize;
        res = res.slice(initialPos, initialPos + pageSize);

        this.screenItems.next(res);
    }

    sortCoins() {
        const arr = this.coinItems.getValue();
        const sortEvent = this.sortEvent.getValue();
        const sortOrder = this.sortOrder.getValue();

        if (sortOrder === 'asc') {
            arr.sort((a, b) =>
                a[sortEvent] > b[sortEvent]
                    ? 1
                    : b[sortEvent] > a[sortEvent]
                    ? -1
                    : 0
            );
        } else {
            arr.sort((a, b) =>
                b[sortEvent] > a[sortEvent]
                    ? 1
                    : a[sortEvent] > b[sortEvent]
                    ? -1
                    : 0
            );
        }
        this.coinItems.next(arr);
        this.paginateCoins();
    }
}
