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
    marketDominance: number;
    marketCap: PriceChange;
    dilutedMarketCap: PriceChange;
    yesterdayLow: number;
    yesterdayHigh: number;
    yesterdayOpen: number;
    yesterdayClose: number;
    yesterdayChange: number;
    yesterdayVolume: number;
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
    returnOfInvestment: number;
    circulatingSupply: number;
    totalSupply: number;
    maxSupply: number;
}
