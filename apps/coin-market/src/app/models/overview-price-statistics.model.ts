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
    price_low_high_all: PriceAllTimeHighLow;

    circulating_supply?: CoinSupplyNumbers;

    constructor(item: any) {
        this.price = item.price || 0;
        this.price_change_24h = item.price_change_24h || 0;
        this.price_low_high_24h = item.price_low_high_24h || new PriceHighLow();
        this.trading_volume_24h = item.trading_volume_24h || 0;
        this.market_dominance = item.market_dominance || 0;
        this.market_rank = item.market_rank || 0;
        this.market_cap = item.market_cap || 0;
        this.fully_diluted_market_cap = item.fully_diluted_market_cap || 0;
        this.price_change_percentage_yesterday =
            item.price_change_percentage_yesterday || 0;
        this.price_low_high_yesterday =
            item.price_low_high_yesterday || new PriceHighLow();
        this.price_open_close_yesterday =
            item.price_open_close_yesterday || new PriceOpenClose();
        this.price_low_high_7d = item.price_low_high_7d || new PriceHighLow();
        this.price_low_high_30d = item.price_low_high_30d || new PriceHighLow();
        this.price_low_high_90d = item.price_low_high_90d || new PriceHighLow();
        this.price_low_high_52w = item.price_low_high_52w || new PriceHighLow();
        this.price_low_high_all = item.price_low_high_all
            ? new PriceAllTimeHighLow(item.price_low_high_all)
            : new PriceAllTimeHighLow();

        this.circulating_supply =
            item.circulating_supply || new CoinSupplyNumbers();
    }
}

class PriceAllTimeHighLow {
    high: {
        date_time: string;
        high_price: number;
        date_time_as_date_string?: string;
    } = {
        date_time: '',
        high_price: 0,
        date_time_as_date_string: '',
    };
    low: {
        date_time: string;
        low_price: number;
        date_time_as_date_string?: string;
    } = {
        date_time: '',
        low_price: 0,
        date_time_as_date_string: '',
    };

    constructor(item?: any) {
        this.high = item.high && {
            ...item.high,
            date_time_as_date_string: new Date(
                item?.high.date_time
            ).toLocaleDateString('en-US', {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
            }),
        };
        this.low = item.low && {
            ...item.low,
            date_time_as_date_string: new Date(
                item?.low.date_time
            ).toLocaleDateString('en-US', {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
            }),
        };
    }
}

class PriceHighLow {
    high: number;
    low: number;

    constructor(item?: any) {
        this.high = item?.high || 0;
        this.low = item?.low || 0;
    }
}

class PriceOpenClose {
    open: number;
    close: number;

    constructor(item?: any) {
        this.open = item?.open || 0;
        this.close = item?.close || 0;
    }
}

class CoinSupplyNumbers {
    max_supply: number;
    circulating_supply: number;
    total_supply: number;

    constructor(item?: any) {
        this.max_supply = item?.max_supply || 0;
        this.circulating_supply = item?.circulating_supply || 0;
        this.total_supply = item?.total_supply || 0;
    }
}
