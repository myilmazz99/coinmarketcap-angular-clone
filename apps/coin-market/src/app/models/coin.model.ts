import { CoinSupplyNumbers } from './coin-supply-numbers.model';

export class Coin {
    coin_id: string;
    price: number;
    coin_name: string;
    market_cap: ValuePercentage;
    fully_diluted_market_cap: ValuePercentage;
    volume: ValuePercentage;
    circulating_supply: CoinSupplyNumbers;
    price_high_low: PriceHighLow;
    icon: string;

    constructor(item?: any) {
        this.coin_id = item?.coin_id || '';
        this.price = item?.price || 0;
        this.coin_name = item?.coin_name || '';
        this.market_cap = new ValuePercentage(item?.market_cap);
        this.fully_diluted_market_cap = new ValuePercentage(
            item?.fully_diluted_market_cap
        );
        this.volume = new ValuePercentage(item?.volume);
        this.circulating_supply = new CoinSupplyNumbers(
            item?.circulating_supply
        );
        this.price_high_low = new PriceHighLow(item?.price_high_low);
        this.icon = item.icon || '';
    }
}

class ValuePercentage {
    value: number;
    change_percentage: number;

    constructor(item?: any) {
        this.value = item?.value || 0;
        this.change_percentage = item?.change_percentage || 0;
    }
}

class PriceHighLow {
    high: number;
    low: number;
    interval: string;

    constructor(item?: any) {
        this.high = item?.high || 0;
        this.low = item?.low || 0;
        this.interval = item?.interval || '';
    }
}
