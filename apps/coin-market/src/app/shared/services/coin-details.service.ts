import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Coin } from "../../models/coin";

@Injectable({
  providedIn: 'root'
})
export class CoinDetailsService {

  coinItems = new BehaviorSubject<Coin>(null);
  coinItems$: Observable<Coin[]>;

  /*getItem(key: string) {
    return localStorage.getItem(key);
  } */

  constructor() {
    //this.coinItems$ = this.coinItems.asObservable();
    //this.getItem();
   }

   getItem() {
    return this.coinItems;
  }
  
}
