import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Coin } from "../../models/coin";

@Injectable({
  providedIn: "root",
})
export class CoinService {
  coin = new BehaviorSubject<Coin>(null);
  coin$: Observable<Coin>;

  constructor() {
    this.coin.next(
      new Coin({
        name: "Bitcoin",
        price: 52556.41,
        icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
        symbol: "BTC",
        rank: 1,
      })
    );
    this.coin$ = this.coin.asObservable();
  }

  getCoin() {
    return this.coin$;
  }
}
