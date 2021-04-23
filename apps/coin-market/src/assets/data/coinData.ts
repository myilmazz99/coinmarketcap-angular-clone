import { Coin } from '../../app/models/coin';
import { CoinPriceStatistics } from '../../app/models/coin-price-statistics.model';
import { VoteCoinData } from '../../app/models/voteCoinData.model';

export const fakeCoin = new Coin({
    name: 'Bitcoin',
    price: 52556.41,
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
    shortName: 'BTC',
    rank: 1,
});

export const fakeTrendingCoinList: Coin[] = [
    new Coin({
        name: 'Bitcoin',
        price: 52556.41,
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
        symbol: 'BTC',
        rank: 1,
    }),
    new Coin({
        name: 'SHD CASH',
        price: 52556.41,
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8740.png',
        symbol: 'SHDC',
        rank: 2743,
    }),
    new Coin({
        name: 'Alaya',
        price: 52556.41,
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7814.png',
        symbol: 'ATP',
        rank: 1743,
    }),
    new Coin({
        name: 'Bitcashpay',
        price: 52556.41,
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7867.png',
        symbol: 'BCP',
        rank: 108,
    }),
    new Coin({
        name: 'RAMP',
        price: 52556.41,
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7463.png',
        symbol: 'RAMP',
        rank: 227,
    }),
];

export const fakeCoinVotes: VoteCoinData = {
    coinId: 1,
    good: 82,
    bad: 18,
};

export const fakeCoinStatistics: CoinPriceStatistics = {
    priceChange: { value: 653.45, comparisonPercentage: 1.13 },
    price_today_low: 57695.06,
    price_today_high: 58937.05,
    volumePrice: 48568674778.31,
    volumePercentage: -13.16,
    volumeMarketCapNumber: 0.04442,
    percent_market_dominance: 54.95,
    marketCapPrice: 1093359164333.68,
    marketCapPercentage: 0.69,
    fullyMarketCapPrice: 1229276128246.84,
    fullyMarketCapPercentage: 0.68,
    price_yesterday_low: 55879.08,
    price_yesterday_high: 58338.74,
    price_yesterday_open: 56099.91,
    price_yesterday_close: 58323.95,
    percent_yesterday_change: 3.96,
    price_yesterday_volume: 53053855641.35,
    price_7d_low: 55604.02,
    price_7d_high: 60110.27,
    price_30d_low: 50856.57,
    price_30d_high: 61683.86,
    price_90d_low: 28953.37,
    price_90d_high: 61683.86,
    price_52w_low: 6555.5,
    price_52w_high: 61683.86,
    allTimeHigh: { value: 61683.86, comparisonPercentage: 5.1 },
    allTimeLow: { value: 65.53, comparisonPercentage: 89233.94 },
    percent_roi: 43171.97,
    circulatingSupplyNumber: 18678100,
    circulatingSupplyPercentage: 0,
    totalSupplyNumber: 18678100,
    maxSupplyNumber: 21000000,
};
