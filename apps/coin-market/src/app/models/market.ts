export class MarketList {
    market_id: number;
    market_icon: string;
    market_name: string;
    pairs: string;
    price: number;
    volume: number;
    volume_percentage: number;
    liquidity: number;

    constructor(item: any) {
        this.market_id = Number(item.market_id || '');
        this.market_icon = item.market_icon || null;
        this.market_name = item.market_name || '';
        this.pairs = item.pairs || '';
        this.price = item.price || '';
        this.volume = item.volume || '';
        this.volume_percentage = item.volume_percentage || '';
        this.liquidity = item.liquidity || '';
    }
}
