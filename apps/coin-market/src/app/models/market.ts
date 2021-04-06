export interface Market {
    position: number;
    imageUrl: string;
    source: string;
    pairs: string;
    pairId: number;
    price: number;
    volume: number;
    volumePercentage: number;
    liquidity: number;
    confidence: string;
    updated: string;
}
