import { OverviewMarketcap } from './overview-marketcap.model';
import { OverviewPrice } from './overview-price.model';

export class ChartData {
    coinName: string;
    price: { usd: number[][]; coin: number[][] } = { usd: [], coin: [] };
    marketCap: { usd: number[][]; coin: number[][] } = { usd: [], coin: [] };
    volume: number[][] = [];

    constructor(
        coinName: string,
        price: OverviewPrice[],
        marketcap: OverviewMarketcap[]
    ) {
        this.coinName = coinName;

        price.map((i) => {
            this.price.usd.push([this.formatDate(i.date_time), i.price]);
            this.volume.push([this.formatDate(i.date_time), i.vol_24h]);
        });

        marketcap.map((i) => {
            this.marketCap.usd.push([
                this.formatDate(i.date_time),
                i.marketCap,
            ]);
        });
    }

    formatDate(date: string) {
        //todo date validation
        return new Date(date).getTime();
    }
}
