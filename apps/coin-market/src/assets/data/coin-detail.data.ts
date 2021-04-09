import { Coin } from '../../app/models/coin';
import { CoinStatistics } from '../../app/models/coin-statistics.model';
import { CoinPrices } from '../../app/models/coin-prices';

export const fakeCoin: Coin = new Coin({
    name: 'Bitcoin',
    shortName: 'BTC',
    rank: 1,
    watchlists: 834727,
});

export const fakeCoinStatistics: CoinStatistics = {
    marketCapPrice: 1028360948721,
    marketCapPercentage: 3.27,
    fullyMarketCapPrice: 1156036894571,
    fullyMarketCapPercentage: 3.28,
    volumePrice: 1028360948,
    volumePercentage: 8.27,
    volumeMarketCapNumber: 0.04989,
    circulatingSupplyNumber: 18666012,
    circulatingSupplyPercentage: 89,
    maxSupplyNumber: 21000000,
    totalSupplyNumber: 18666012,
};

export const fakeCoinPrice: CoinPrices = {
    name: 'Bitcoin',
    shortName: 'BTC',
    price: 59959.44,
    pricePercentage: 1.24,
    priceStatus: 2.16,
    priceSideValue: 33.49,
    priceSideName: 'ETH',
    priceLow: 50870.59,
    priceHigh: 55210.15,
};
