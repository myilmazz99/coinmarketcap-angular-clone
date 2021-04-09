interface PriceChange {
    value: number;
    comparedToLastValue: number;
    occuredOn?: string;
}

export class CoinStatistics {
    priceChange: PriceChange;
    price_today_low: number;
    price_today_high: number;
    tradingVolume: PriceChange;
    volumeMarketCap: number;
    percent_market_dominance: number;
    marketCap: PriceChange;
    dilutedMarketCap: PriceChange;
    price_yesterday_low: number;
    price_yesterday_high: number;
    price_yesterday_open: number;
    price_yesterday_close: number;
    percent_yesterday_change: number;
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
    circulatingSupply: number;
    totalSupply: number;
    maxSupply: number;
}
