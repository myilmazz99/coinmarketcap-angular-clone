export class ChartData {
    usd: any[];
    coin: any[];
    volume: any[];
    marketCap: { usd: any[]; coin: any[] };

    constructor(usd?, coin?, volume?, marketCap?) {
        this.usd = usd || [];
        this.coin = coin || [];
        this.volume = volume || [];
        this.marketCap = marketCap || { usd: [], coin: [] };
    }
}
