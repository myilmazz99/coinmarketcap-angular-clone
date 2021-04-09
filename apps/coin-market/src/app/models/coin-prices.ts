export class CoinPrices {
    name: string;
    shortName: string;
    price: number;
    pricePercentage: number;
    priceStatus: number;
    priceLow: number;
    priceHigh: number;
    priceSideValue: number;
    priceSideName: string;

    constructor(item: any) {
        this.name = item.name || null;
        this.shortName = item.shortName || null;
        this.price = item.price || 0;
        this.pricePercentage = item.pricePercentage || 0;
        this.priceStatus = item.priceStatus || 0;
        this.priceLow = item.priceLow || 0;
        this.priceHigh = item.priceHigh || 0;
        this.priceSideName = item.priceSideName || null;
        this.priceSideValue = item.priceSideValue || 0;
    }
}
