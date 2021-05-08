export class Market {
    imageUrl: string;
    source: string;
    pairs: string;
    price: number;
    volume: number;
    volumePercentage: number;
    liquidity: number;
    confidence: string;
    confidenceClass?: string;
    updated: string;

    constructor(item: any) {
        this.imageUrl = item.imageUrl || null;
        this.source = item.source || '';
        this.pairs = item.pairs || '';
        this.price = item.price || '';
        this.volume = item.volume || '';
        this.volumePercentage = item.volumePercentage || '';
        this.liquidity = item.liquidity || '';
        this.confidence = item.confidence || '';
        this.confidenceClass =
            item.confidence === 'Low'
                ? 'low'
                : item.confidence === 'Moderate'
                ? 'moderate'
                : 'high';
        this.updated = item.updated || '';
    }
}
