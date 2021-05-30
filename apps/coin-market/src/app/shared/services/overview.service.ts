import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Coin } from '../../models/coin.model';
import {
    fakeCoin,
    fakeCoinStatistics,
    fakeCoinVotes,
} from '../../../assets/data/coinData';
import { VoteCoinData } from '../../models/voteCoinData.model';
import {
    CalendarDateRange,
    ChartData,
    ChartDataTab,
    ChartDateRange,
} from '@coin-market/data';
import { OverviewPrice, OverviewMarketcap } from '@coin-market/data';
import { OverviewPriceStatistics } from '../../models/overview-price-statistics.model';

@Injectable({
    providedIn: 'root',
})
export class OverviewService {
    private overviewPrice = new BehaviorSubject<OverviewPrice[]>(null);
    private overviewMarketcap = new BehaviorSubject<OverviewMarketcap[]>(null);

    private coin = new BehaviorSubject<Coin>(null);
    public coin$: Observable<Coin>;

    private coinVotes = new BehaviorSubject<VoteCoinData>(null);
    public coinVotes$: Observable<VoteCoinData>;

    private coinStatistics: BehaviorSubject<OverviewPriceStatistics> = new BehaviorSubject(
        null
    );
    public coinStatistics$: Observable<OverviewPriceStatistics>;

    private chartData: BehaviorSubject<ChartData> = new BehaviorSubject(null);
    public chartData$: Observable<ChartData>;

    private _selectedTab = new BehaviorSubject<ChartDataTab>(
        new ChartDataTab()
    );
    private _selectedRange = new BehaviorSubject<ChartDateRange>(
        new ChartDateRange()
    );
    private _selectedCalendarRange = new BehaviorSubject<CalendarDateRange>(
        new CalendarDateRange()
    );

    public selectedTab$: Observable<ChartDataTab>;
    public selectedRange$: Observable<ChartDateRange>;
    public selectedCalendarRange$: Observable<CalendarDateRange>;

    //holds fake data, delete after http implementation
    price: OverviewPrice[] = [];
    price_coin: number[][] = [];
    marketcap: OverviewMarketcap[] = [];
    marketcap_coin: number[][] = [];

    /*
  This service is used for state of active coin
  */
    constructor() {
        this.fakeChartData();
        this.getOverviewPrice();
        this.getOverviewMarketcap();

        this.coin$ = this.coin.asObservable();
        this.getCoin();

        this.chartData$ = this.chartData.asObservable();
        this.mapChartData();

        this.coinVotes$ = this.coinVotes.asObservable();
        this.getCoinVotes();

        this.coinStatistics$ = this.coinStatistics.asObservable();
        this.getCoinStatistics();

        this.selectedTab$ = this._selectedTab.asObservable();
        this.selectedRange$ = this._selectedRange.asObservable();
        this.selectedCalendarRange$ = this._selectedCalendarRange.asObservable();
    }

    set selectedTab(val: ChartDataTab) {
        this._selectedTab.next(val);
    }

    set selectedRange(val: ChartDateRange) {
        this._selectedRange.next(val);
    }

    set selectedCalendarRange(val: CalendarDateRange) {
        this._selectedCalendarRange.next(val);
    }

    /*
  This method sends a request to get active Coin Detail
  Params(@coindID)
  Response(Coin)
  */
    getCoin(): void {
        this.coin.next(fakeCoin);
    }

    getCoinVotes(): void {
        this.coinVotes.next(fakeCoinVotes);
    }

    fakeChartData(): void {
        for (let i = 500; i > 0; i--) {
            const day = new Date().getDate();
            this.price.push({
                date_time: new Date(new Date().setDate(day - i)).toString(),
                price: Math.floor(Math.random() * 100000 + 1),
                vol_24h: Math.floor(Math.random() * 10000000 + 1),
            });
            this.marketcap.push({
                date_time: new Date(new Date().setDate(day - i)).toString(),
                marketCap: Math.floor(Math.random() * 90000000000 + 1),
                vol_24h: Math.floor(Math.random() * 10000000 + 1),
            });

            this.price_coin.push([new Date().setDate(day - i), 1]);
            this.marketcap_coin.push([
                new Date().setDate(day - i),
                Math.floor(Math.random() * 90000000 + 1),
            ]);
        }
    }

    getOverviewPrice(): void {
        this.overviewPrice.next(this.price);
    }

    getOverviewMarketcap(): void {
        this.overviewMarketcap.next(this.marketcap);
    }

    getCoinStatistics(): void {
        const { coin_id, circulating_supply } = this.coin.getValue();
        this.coinStatistics.next(
            new OverviewPriceStatistics({
                ...fakeCoinStatistics,
                coin_id,
                circulating_supply,
            })
        );
    }

    private mapChartData() {
        const price = this.overviewPrice.getValue();
        const marketcap = this.overviewMarketcap.getValue();
        const coin = this.coin.getValue();

        this.chartData.next(new ChartData(coin.coin_name, price, marketcap));
    }
}
