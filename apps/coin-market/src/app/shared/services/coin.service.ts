import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Coin } from "../../models/coin";
import {
  fakeCoin,
  fakeCoinVotes,
  fakeTrendingCoinList,
} from "../../../assets/data/coinData";
import { VoteCoinData } from "../../models/voteCoinData.model";

@Injectable({
  providedIn: "root",
})
export class CoinService {
  private coin = new BehaviorSubject<Coin>(null);
  private coin$: Observable<Coin>;

  private trendingCoins = new BehaviorSubject<Coin[]>(null);
  private trendingCoins$: Observable<Coin[]>;

  private coinVotes = new BehaviorSubject<VoteCoinData>(null);
  private coinVotes$: Observable<VoteCoinData>;

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

  getVotes() {
    this.coinVotes.next(fakeCoinVotes);
    this.coinVotes$ = this.coinVotes.asObservable();

    return this.coinVotes$;
  }
}
