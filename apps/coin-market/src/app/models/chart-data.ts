export class ChartData {
    usd: any[];
    coin: any[];
    volume: any[];

    constructor(usd?, coin?, volume?) {
        this.usd = usd || [];
        this.coin = coin || [];
        this.volume = volume || [];
    }
}
