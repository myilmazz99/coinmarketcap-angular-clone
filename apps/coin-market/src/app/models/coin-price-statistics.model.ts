import { CoinStatistics } from './coin-statistics.model';

interface PriceChange {
    value: number;
    comparisonPercentage: number;
    occuredOn?: number;
}

export class CoinPriceStatistics extends CoinStatistics {
    priceChange: PriceChange;
    price_today_low: number;
    price_today_high: number;
    marketDominance: number;
    price_yesterday_low: number;
    price_yesterday_high: number;
    price_yesterday_open: number;
    price_yesterday_close: number;
    yesterdayChange: number;
    price_yesterday_volume: number;
    price_7d_low: number;
    price_7d_high: number;
    price_30d_low: number;
    price_30d_high: number;
    price_90d_low: number;
    price_90d_high: number;
    price_52w_low: number;
    price_52w_high: number;
    allTimeHigh: PriceChange;
    allTimeLow: PriceChange;
    percent_roi: number;
}
