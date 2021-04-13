import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Coin } from '../../models/coin';
import {
    fakeCoin,
    fakeCoinStatistics,
    fakeCoinVotes,
    fakeTrendingCoinList,
} from '../../../assets/data/coinData';
import { VoteCoinData } from '../../models/voteCoinData.model';
import { ChartData } from '../../models/chart-data';
import { CoinPriceStatistics } from '../../models/coin-price-statistics.model';

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

    private coinStatistics: BehaviorSubject<CoinPriceStatistics> = new BehaviorSubject(
        null
    );
    public coinStatistics$: Observable<CoinPriceStatistics>;

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

        this.coinStatistics$ = this.coinStatistics.asObservable();
        this.getCoinStatistics();
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
        const chartData = new ChartData();
        for (let i = 500; i > 0; i--) {
            const day = new Date().getDate();
            chartData.price.usd.push([
                new Date().setDate(day - i),
                Math.floor(Math.random() * 100000 + 1),
            ]);
            chartData.price.coin.push([new Date().setDate(day - i), 1]);
            chartData.volume.push([
                new Date().setDate(day - i),
                Math.floor(Math.random() * 10000000 + 1),
            ]);
            chartData.marketCap.coin.push([
                new Date().setDate(day - i),
                Math.floor(Math.random() * 90000000 + 1),
            ]);
            chartData.marketCap.usd.push([
                new Date().setDate(day - i),
                Math.floor(Math.random() * 90000000000 + 1),
            ]);
        }
        this.chartData.next(chartData);
    }

    getCoinStatistics(): void {
        this.coinStatistics.next(fakeCoinStatistics);
    }
}
