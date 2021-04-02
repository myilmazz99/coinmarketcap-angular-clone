import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import data from 'apps/coin-market/src/assets/data/data';
import { Market } from 'apps/coin-market/src/app/models/market';

@Injectable({
    providedIn: 'root',
})
export class MarketsService {
    marketItems$: Observable<Market[]>;
    private marketItems: BehaviorSubject<Market[]>;

    constructor() {}

    getMarkets() {
        return data;
    }
}
