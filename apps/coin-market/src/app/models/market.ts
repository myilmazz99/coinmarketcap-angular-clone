export class MarketList {
    imageUrl: string;
    market_name: string;
    pairs: string;
    price: number;
    volume: number;
    volume_percentage: number;
    liquidity: number;

    constructor(item: any) {
        this.imageUrl = item.imageUrl || null;
        this.market_name = item.market_name || '';
        this.pairs = item.pairs || '';
        this.price = item.price || '';
        this.volume = item.volume || '';
        this.volume_percentage = item.volume_percentage || '';
        this.liquidity = item.liquidity || '';
    }
}
