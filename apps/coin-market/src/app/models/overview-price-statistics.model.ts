import { CoinSupplyNumbers } from './coin-supply-numbers.model';

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
    price_low_high_all: PriceAllTime;

    coin_id?: string;
    circulating_supply?: CoinSupplyNumbers;

    constructor(item: any) {
        this.price = item.price || 0;
        this.price_change_24h = item.price_change_24h || 0;
        this.price_low_high_24h = new PriceHighLow(item.price_low_high_24h);
        this.trading_volume_24h = item.trading_volume_24h || 0;
        this.market_dominance = item.market_dominance || 0;
        this.market_rank = item.market_rank || 0;
        this.market_cap = item.market_cap || 0;
        this.fully_diluted_market_cap = item.fully_diluted_market_cap || 0;
        this.price_change_percentage_yesterday =
            item.price_change_percentage_yesterday || 0;
        this.price_low_high_yesterday = new PriceHighLow(
            item.price_low_high_yesterday
        );
        this.price_open_close_yesterday = new PriceOpenClose(
            item.price_open_close_yesterday
        );
        this.price_low_high_7d = new PriceHighLow(item.price_low_high_7d);
        this.price_low_high_30d = new PriceHighLow(item.price_low_high_30d);
        this.price_low_high_90d = new PriceHighLow(item.price_low_high_90d);
        this.price_low_high_52w = new PriceHighLow(item.price_low_high_52w);
        this.price_low_high_all = new PriceAllTime(item.price_low_high_all);

        this.coin_id = item.coin_id || '';
        this.circulating_supply = new CoinSupplyNumbers(
            item.circulating_supply
        );
    }
}

class PriceAllTime {
    high: PriceAllTimeHigh;
    low: PriceAllTimeLow;

    constructor(item?: any) {
        this.high = new PriceAllTimeHigh(item?.high);
        this.low = new PriceAllTimeLow(item?.low);
    }
}

class PriceAllTimeHigh {
    date_time: string;
    high_price: number;

    date?: Date;

    constructor(item?: any) {
        this.date_time = item?.date_time || null;
        this.high_price = item?.high_price || 0;

        this.date = new Date(this.date_time);
    }
}

class PriceAllTimeLow {
    date_time: string;
    low_price: number;

    date?: Date;

    constructor(item?: any) {
        this.date_time = item?.date_time || null;
        this.low_price = item?.low_price || 0;

        this.date = new Date(this.date_time);
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
