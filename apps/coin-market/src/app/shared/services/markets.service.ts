import { Injectable, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Market } from '../../models/market';
import data from 'apps/coin-market/src/assets/data/data';

import { MatPaginator } from '@angular/material/paginator';

@Injectable()
export class MarketsService {
    @ViewChild(MatPaginator) paginator: MatPaginator;

    private marketItems = new BehaviorSubject<Market[]>([]);
    public marketItems$: Observable<Market[]>;

    constructor() {
        this.marketItems.next(data);
        this.marketItems$ = this.marketItems.asObservable();
    }
    // getMarkets(): Observable<Market[]> {
    //     return this.marketItems$;
    // }

    findMarkets(
        pairId: number,
        filter = '',
        sortOrder = 'asc',
        pageNumber = 0,
        pageSize = 3
    ): Observable<Market[]> {
        let markets = Object.values(data)
            .filter((x) => x.pairId == pairId)
            .sort((l1, l2) => l1.price - l2.price);
        const initialPos = pageNumber * pageSize;

        const marketPage = markets.slice(initialPos, initialPos + pageSize);
        if (filter) {
            markets.find((x) => x.pairId);
        }

        if (sortOrder == 'desc') {
            markets = markets.reverse();
        }
        return this.marketItems$;
    }
}
