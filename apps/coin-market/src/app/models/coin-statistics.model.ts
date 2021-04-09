export class CoinStatistics {
    marketCapPrice: number;
    marketCapPercentage: number;
    fullyMarketCapPrice: number;
    fullyMarketCapPercentage: number;
    volumePrice: number;
    volumePercentage: number;
    volumeMarketCapNumber: number;
    circulatingSupplyNumber: number;
    circulatingSupplyPercentage: number;
    maxSupplyNumber: number;
    totalSupplyNumber: number;

    constructor(item: any) {
        this.marketCapPrice = item.marketCapPrice || 0;
        this.marketCapPercentage = item.marketCapPercentage || 0;
        this.fullyMarketCapPrice = item.fullyMarketCapPrice || 0;
        this.fullyMarketCapPercentage = item.fullyMarketCapPercentage || 0;
        this.volumePrice = item.volumePrice || 0;
        this.volumePercentage = item.volumePercentage || 0;
        this.volumeMarketCapNumber = item.volumeMarketCapNumber || 0;
        this.circulatingSupplyNumber = item.circulatingSupplyNumber || 0;
        this.circulatingSupplyPercentage = item.circulatingSupplyPercentage || 0;
        this.maxSupplyNumber = item.maxSupplyNumber || 0;
        this.totalSupplyNumber = item.totalSupplyNumber || 0;
    }
}
