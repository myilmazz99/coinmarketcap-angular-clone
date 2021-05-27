import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MarketList } from '../../models/market';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class MarketsService {
    private marketItems = new BehaviorSubject<MarketList[]>([]);
    public marketItems$: Observable<MarketList[]>;

    private screenItems = new BehaviorSubject<MarketList[]>([]);
    public screenItems$: Observable<MarketList[]>;

    private filteredItems = new BehaviorSubject<MarketList[]>([]);
    public filteredItems$: Observable<MarketList[]>;

    private dataLength = new BehaviorSubject<number>(0);
    public dataLength$: Observable<number>;

    sortOrder: BehaviorSubject<string> = new BehaviorSubject('');
    pageNumber: BehaviorSubject<number> = new BehaviorSubject(0);
    pageSize: BehaviorSubject<number> = new BehaviorSubject(20);
    selection: BehaviorSubject<string> = new BehaviorSubject('All');
    sortEvent: BehaviorSubject<string> = new BehaviorSubject('');

    constructor(private http: HttpClient) {
        this.getMarketItems();
        this.marketItems$ = this.marketItems.asObservable();
        this.filteredItems$ = this.filteredItems.asObservable();
        this.screenItems$ = this.screenItems.asObservable();
        this.dataLength$ = this.dataLength.asObservable();
    }

    getMarketItems() {
        return this.http
            .get<MarketList[]>('assets/data/marketsData.json')
            .subscribe((x) => {
                const data = x.map((e) => {
                    return new MarketList(e);
                });
                this.marketItems.next(data);
                this.filteredItems.next(data);
                this.findMarkets();
                this.dataLength.next(data.length);
            });
    }

    findMarkets(): void {
        let pageNumber = this.pageNumber.getValue();
        let pageSize = this.pageSize.getValue();

        let res = [...this.filteredItems.getValue()];

        const initialPos = pageNumber * pageSize;
        res = res.slice(initialPos, initialPos + pageSize);

        this.screenItems.next(res);
    }

    sortData() {
        let arr = this.filteredItems.getValue();
        let sortEvent = this.sortEvent.getValue();
        let sortOrder = this.sortOrder.getValue();

        if (sortEvent === 'market_name') {
            // Spesific(case insensitive) sorting algorithm for source column
            if (sortOrder === 'asc') {
                arr.sort((a, b) =>
                    a[sortEvent].toLowerCase() > b[sortEvent].toLowerCase()
                        ? 1
                        : b[sortEvent].toLowerCase() >
                          a[sortEvent].toLowerCase()
                        ? -1
                        : 0
                );
            } else {
                arr.sort((a, b) =>
                    b[sortEvent].toLowerCase() > a[sortEvent].toLowerCase()
                        ? 1
                        : a[sortEvent].toLowerCase() >
                          b[sortEvent].toLowerCase()
                        ? -1
                        : 0
                );
            }
        } else {
            // Same sorting algorithm for the all other columns
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
        }

        this.filteredItems.next(arr);
        this.findMarkets();
    }

    filterPair() {
        let arrAll = [];
        let arrFiltered = [];

        let selection = this.selection.getValue();
        arrAll = this.marketItems.getValue();

        if (selection === 'All') {
            this.filteredItems.next([...arrAll]);
            this.dataLength.next(arrAll.length);
            this.findMarkets();
        } else {
            arrAll.find((e) => {
                if (e.pairs.split('/')[1] === selection) {
                    arrFiltered.push(e);
                }
            });
            this.filteredItems.next([...arrFiltered]);
            this.dataLength.next(arrFiltered.length);
            this.findMarkets();
        }
    }
}
