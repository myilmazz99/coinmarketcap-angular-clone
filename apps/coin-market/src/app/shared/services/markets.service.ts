import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Market } from '../../models/market';
import { marketsData } from 'apps/coin-market/src/assets/data/marketsData';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class MarketsService {
    private marketItems = new BehaviorSubject<Market[]>([]);
    public marketItems$: Observable<Market[]>;

    private screenItems = new BehaviorSubject<Market[]>([]);
    public screenItems$: Observable<Market[]>;

    private filteredItems = new BehaviorSubject<Market[]>([]);
    public filteredItems$: Observable<Market[]>;

    private dataLength = new BehaviorSubject<number>(0);
    public dataLength$: Observable<number>;

    sortOrder: BehaviorSubject<string> = new BehaviorSubject('asc');
    pageNumber: BehaviorSubject<number> = new BehaviorSubject(0);
    pageSize: BehaviorSubject<number> = new BehaviorSubject(5);
    selection: BehaviorSubject<any> = new BehaviorSubject('All');
    sortEvent: BehaviorSubject<any> = new BehaviorSubject('');

    constructor(private http: HttpClient) {
        this.getMarketItems();
        this.marketItems$ = this.marketItems.asObservable();
        this.filteredItems$ = this.filteredItems.asObservable();
        this.screenItems$ = this.screenItems.asObservable();
        this.dataLength$ = this.dataLength.asObservable();
    }

    getMarketItems() {
        return this.http
            .get<Market[]>('assets/data/marketsData.json')
            .subscribe((x) => {
                const data = x.map((e) => {
                    return new Market(e);
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
        let sortEvent = this.sortEvent.getValue();
        let sortOrder = this.sortOrder.getValue();
        let arr = this.filteredItems.getValue();

        if (sortEvent === 'confidence') {
            // Spesific sorting algorithm for confidence column
            if (sortOrder === 'asc') {
                arr.sort((a, b) =>
                    (a[sortEvent] === 'High' && b[sortEvent] === 'Moderate') ||
                    (a[sortEvent] === 'High' && b[sortEvent] === 'Low') ||
                    (a[sortEvent] === 'Moderate' && b[sortEvent] === 'Low')
                        ? 1
                        : (a[sortEvent] === 'Low' &&
                              b[sortEvent] === 'Moderate') ||
                          (a[sortEvent] === 'Low' && b[sortEvent] === 'High') ||
                          (a[sortEvent] === 'Moderate' &&
                              b[sortEvent] === 'High')
                        ? -1
                        : 0
                );
            } else {
                arr.sort((a, b) =>
                    (b[sortEvent] === 'High' && a[sortEvent] === 'Moderate') ||
                    (b[sortEvent] === 'High' && a[sortEvent] === 'Low') ||
                    (b[sortEvent] === 'Moderate' && a[sortEvent] === 'Low')
                        ? 1
                        : (b[sortEvent] === 'Low' &&
                              a[sortEvent] === 'Moderate') ||
                          (b[sortEvent] === 'Low' && a[sortEvent] === 'High') ||
                          (b[sortEvent] === 'Moderate' &&
                              a[sortEvent] === 'High')
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
            this.filteredItems.next(arrAll);
            this.dataLength.next(arrAll.length);
            this.findMarkets();
        } else {
            arrAll.find((e) => {
                if (e.pairs.split('/')[1] === selection) {
                    arrFiltered.push(e);
                }
            });
            this.filteredItems.next(arrFiltered);
            this.dataLength.next(arrFiltered.length);
            this.findMarkets();
        }
    }
}
