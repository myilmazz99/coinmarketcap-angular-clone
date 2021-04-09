export class Coin {
    name: string;
    shortName: string; // todo daha uygun bir değişken adı bulalım
    icon: string;
    price: number;
    rank: number;
    watchlists: number;
   /* pricePercentage: number;
    priceStatus: number;
    priceLow: number;
    priceHigh: number;
    priceSideValue: number;
    priceSideName: string; */
    /*marketCapPrice: number; bunları zaten  coinStatistic sınıfında yaptık
    marketCapPercentage: number;
    fullyMarketCapPrice: number;
    fullyMarketCapPercentage: number;
    volumePrice: number;
    volumePercentage: number;
    volumeMarketCapNumber: number;
    circulatingSupplyNumber: number;
    circulatingSupplyPercentage: number;
    maxSupplyNumber: number;
    totalSupplyNumber: number;*/

    constructor(item: any) {
        this.name = item.name || null;
        this.shortName = item.shortName || null;
        this.icon = item.icon || 'icon yok adresi yani icon bulunamadı resmi';
        this.price = item.price || 0;
        this.rank = item.rank || 0;
        this.watchlists = item.watchlists || 0;
        /* this.pricePercentage = item.pricePercentage || 0;
        this.priceStatus = item.priceStatus || 0;
        this.priceLow = item.priceLow || 0;
        this.priceHigh = item.priceHigh || 0;
        this.priceSideName = item.priceSideName || null;
        this.priceSideValue = item.priceSideValue || 0; */
        /*this.marketCapPrice = item.marketCapPrice  || 0;
        this.marketCapPercentage = item.marketCapPercentage  || 0;
        this.fullyMarketCapPrice = item.fullyMarketCapPrice  || 0;
        this.fullyMarketCapPercentage = item.fullyMarketCapPercentage  || 0;
        this.volumePrice = item.volumePrice || 0;
        this.volumePercentage = item.volumePercentage || 0;
        this.volumeMarketCapNumber = item.volumeMarketCapNumber || 0;
        this.circulatingSupplyNumber = item.circulatingSupplyNumber || 0;
        this.circulatingSupplyPercentage = item.circulatingSupplyPercentage || 0;
        this.maxSupplyNumber= item.maxSupplyNumber || 0;
        this.totalSupplyNumber= item.totalSupplyNumber || 0;*/

    }
}
