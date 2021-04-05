import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Coin } from '../../models/coin';
import {
    fakeCoin,
    fakeCoinVotes,
    fakeTrendingCoinList,
} from '../../../assets/data/coinData';
import { VoteCoinData } from '../../models/voteCoinData.model';
import { ChartData } from '../../models/chart-data';

@Injectable({
    providedIn: 'root',
})
export class OverviewService {
    private coin = new BehaviorSubject<Coin>(null);
    public coin$: Observable<Coin>;

    private trendingCoins = new BehaviorSubject<Coin[]>(null);
    public trendingCoins$: Observable<Coin[]>;

    private coinVotes = new BehaviorSubject<VoteCoinData>(null);
    public coinVotes$: Observable<VoteCoinData>;

    private chartData: BehaviorSubject<ChartData> = new BehaviorSubject(null);
    public chartData$: Observable<ChartData>;

    /*
  This service is used for state of active coin
  */
    constructor() {
        this.coin$ = this.coin.asObservable();
        this.getCoin();

        this.chartData$ = this.chartData.asObservable();
        this.getChartData();

        this.coinVotes$ = this.coinVotes.asObservable();
        this.getCoinVotes();

        this.trendingCoins$ = this.trendingCoins.asObservable();
        this.getTrendingCoins();
    }

    /*
  This method sends a request to get active Coin Detail
  Params(@coindID)
  Response(Coin)
  */
    getCoin(): void {
        this.coin.next(fakeCoin);
    }

    getTrendingCoins(): void {
        this.trendingCoins.next(fakeTrendingCoinList);
    }

    getCoinVotes(): void {
        this.coinVotes.next(fakeCoinVotes);
    }

    getChartData(): void {
        let chartData = { usd: [], coin: [] };
        for (var i = 500; i > 0; i--) {
            var day = new Date().getDate();
            chartData.usd.push([
                new Date().setDate(day - i),
                Math.floor(Math.random() * 100000 + 1),
            ]);
            chartData.coin.push([new Date().setDate(day - i), 1]);
        }
        this.chartData.next(chartData);
    }
}
