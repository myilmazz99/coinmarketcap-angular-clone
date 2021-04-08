import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import data from "apps/coin-market/src/assets/data/data";
import { MatTableDataSource } from "@angular/material/table";
import { Market } from "apps/coin-market/src/app/models/market";

@Injectable({
  providedIn: "root",
})

export class MarketsService {
  marketItems$: Observable<Market[]>;
  private marketItems: BehaviorSubject<Market[]>;

  constructor() {
    // this.marketItems.next(data);
    // this.marketItems$ = this.marketItems.asObservable();
  }

  getMarkets() {
    return data;
  }
  // // // getMarkets(): Observable<Market[]> {
  // // //   return this.http.get<Market[]>(this.url);
  // // // }

  // // // private url: string = "/assets/data/data.ts";
  // // // marketItems$: Observable<Markets[]>;
  // // // private marketItems: BehaviorSubject<Markets[]>;
  // // // constructor(private http: HttpClient) {}
  // // // getMarkets(): Observable<Array<Markets>> {
  // // //   return this.http.get<Markets[]>(this.url);
  // // // }
  // // // private url: string = "/assets/data/data.ts";
  // // // constructor(private http: HttpClient) {}
  // // // getMarkets(): Observable<Array<Markets>> {
  // // //   return this.http.get<Markets[]>(this.url);
  // // // }
}
