import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Market } from '../../models/market';
import { marketsData } from 'apps/coin-market/src/assets/data/marketsData';

@Injectable()
export class MarketsService {
    private marketItems = new BehaviorSubject<Market[]>([]);
    public marketItems$: Observable<Market[]>;

    private screenItems = new BehaviorSubject<Market[]>([]);
    public screenItems$: Observable<Market[]>;

    sortOrder: BehaviorSubject<string> = new BehaviorSubject('asc');
    pageNumber: BehaviorSubject<number> = new BehaviorSubject(0);
    pageSize: BehaviorSubject<number> = new BehaviorSubject(5);
    selection: BehaviorSubject<any> = new BehaviorSubject('All');
    sortEvent: BehaviorSubject<any> = new BehaviorSubject('');

    constructor() {
        this.marketItems.next(marketsData);
        this.marketItems$ = this.marketItems.asObservable();
        this.screenItems$ = this.screenItems.asObservable();
    }

    findMarkets(): void {
        let pageNumber = this.pageNumber.getValue();
        let pageSize = this.pageSize.getValue();

        let res = [...this.marketItems.getValue()];

        const initialPos = pageNumber * pageSize;
        res = res.slice(initialPos, initialPos + pageSize);

        this.screenItems.next(res);
    }

    sortData() {
        let sortEvent = this.sortEvent.getValue();
        let sortOrder = this.sortOrder.getValue();
        let arr = this.filterPair();

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
        this.marketItems.next(arr);
        this.findMarkets();
    }

    filterPair() {
        let arr2 = [];
        let arr = [];
        this.marketItems.next(marketsData);

        let selection = this.selection.getValue();
        arr = this.marketItems.getValue();

        if (selection === 'All') {
            this.marketItems.next(arr);

            this.findMarkets();
            return arr;
        } else {
            arr.find((e) => {
                if (e.pairs.split('/')[1] === selection) {
                    arr2.push(e);
                }
            });
            this.marketItems.next(arr2);
            this.findMarkets();
            return arr2;
        }
    }
}
