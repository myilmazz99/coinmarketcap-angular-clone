interface PriceHighLow {
    high: number;
    low: number;
}

interface PriceOpenClose {
    open: number;
    close: number;
}

export class OverviewPriceStatistics {
    price: number;
    price_change_24h: number;
    price_low_high_24h: PriceHighLow;
    trading_volume_24h: number;
    market_dominance: number;
    market_rank: number;
    market_cap: number;
    fully_diluted_market_cap: number;
    price_change_percentage_yesterday: number;
    price_low_high_yesterday: PriceHighLow;
    price_open_close_yesterday: PriceOpenClose;
    price_low_high_7d: PriceHighLow;
    price_low_high_30d: PriceHighLow;
    price_low_high_90d: PriceHighLow;
    price_low_high_52w: PriceHighLow;
    price_low_high_all: {
        high: { date_time: string; high_price: number };
        low: { date_time: string; low_price: number };
    };
}
