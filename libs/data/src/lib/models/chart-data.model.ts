export class ChartData {
    coinName: string;
    price: { usd: any[]; coin: any[] };
    marketCap: { usd: any[]; coin: any[] };
    volume: any[];

    constructor(price?, volume?, marketCap?) {
        this.coinName = 'Bitcoin';
        this.price = price || { usd: [], coin: [] };
        this.marketCap = marketCap || { usd: [], coin: [] };
        this.volume = volume || [];
    }
}
