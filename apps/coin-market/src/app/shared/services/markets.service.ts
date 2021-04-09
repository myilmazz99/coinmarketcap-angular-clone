import { Injectable, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import data from "apps/coin-market/src/assets/data/data";
import { MatTableDataSource } from "@angular/material/table";
import { Market } from "apps/coin-market/src/app/models/market";
import { MatPaginator } from '@angular/material/paginator';

@Injectable({
  providedIn: "root",
})

export class MarketsService {
    @ViewChild(MatPaginator) paginator: MatPaginator;

    private marketItems = new BehaviorSubject<Market[]>([]);
    public marketItems$: Observable<Market[]>;

    private screenItems = new BehaviorSubject<Market[]>([]);
    public screenItems$: Observable<Market[]>;

    sortOrder: BehaviorSubject<string> = new BehaviorSubject('asc');
    pageNumber: BehaviorSubject<number> = new BehaviorSubject(0);
    pageSize: BehaviorSubject<number> = new BehaviorSubject(5);

    dataLength = 0;
    constructor() {
        this.dataLength = data.length;
        this.marketItems.next(data);
        this.marketItems$ = this.marketItems.asObservable();

        this.screenItems$ = this.screenItems.asObservable();
    }
    // getMarkets(): Observable<Market[]> {
    //     return this.marketItems$;
    // }

    findMarkets(): void {

        // pairId: number,
        // filter: string,
        let sortOrder = this.sortOrder.getValue();
        let pageNumber = this.pageNumber.getValue();
        let pageSize = this.pageSize.getValue();

        console.log(sortOrder, pageNumber, pageSize);
        
        let res = [...this.marketItems.getValue()];
        const initialPos = pageNumber * pageSize;
        res = res.slice(initialPos, initialPos + pageSize);
        this.screenItems.next(res);
        // let markets = Object.values(data)
        //     .filter((x) => x.pairId == pairId)
        //     .sort((l1, l2) => l1.price - l2.price);
        // const initialPos = pageNumber * pageSize;

        // const marketPage = markets.slice(initialPos, initialPos + pageSize);
        // if (filter) {
        //     markets.find((x) => x.pairId);
        // }

        // if (sortOrder == 'desc') {
        //     markets = markets.reverse();
        // }
        
    }

    sortData(event: any) {
        let arr = this.marketItems.getValue();
        
        if (event.direction === 'asc'){
            arr.sort((a,b) => (a[event.active] > b[event.active]) ? 1 : (b[event.active] > a[event.active]) ? -1 : 0);
        } else {
            arr.sort((a,b) => (b[event.active] > a[event.active]) ? 1 : (a[event.active] > b[event.active]) ? -1 : 0);
        }

        this.marketItems.next(arr);
        this.findMarkets();
    }
}
