import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Coin } from "../../models/coin";
import { fakeCoin, fakeTrendingCoinList } from "../../../assets/data/coinData";

@Injectable({
  providedIn: "root",
})
export class CoinService {
  private coin = new BehaviorSubject<Coin>(null);
  private coin$: Observable<Coin>;

  private trendingCoins = new BehaviorSubject<Coin[]>(null);
  private trendingCoins$: Observable<Coin[]>;

  constructor() {}

  getCoin() {
    this.coin.next(fakeCoin);
    this.coin$ = this.coin.asObservable();
    return this.coin$;
  }

  getTrendingCoins() {
    this.trendingCoins.next(fakeTrendingCoinList);
    this.trendingCoins$ = this.trendingCoins.asObservable();

    return this.trendingCoins$;
  }
}
