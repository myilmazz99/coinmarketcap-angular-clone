import { Coin } from '../../app/models/coin';
import { CoinStatistics } from '../../app/models/coin-statistics.model';
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

export const fakeCoinStatistics: CoinStatistics = {
    priceChange: { value: 653.45, comparedToLastValue: 1.13 },
    price_today_low: 57695.06,
    price_today_high: 58937.05,
    tradingVolume: { value: 48568674778.31, comparedToLastValue: -13.16 },
    volumeMarketCap: 0.04442,
    marketDominance: 54.95,
    marketCap: { value: 1093359164333.68, comparedToLastValue: 0.69 },
    dilutedMarketCap: { value: 1229276128246.84, comparedToLastValue: 0.68 },
    yesterdayLow: 55879.08,
    yesterdayHigh: 58338.74,
    yesterdayOpen: 56099.91,
    yesterdayClose: 58323.95,
    yesterdayChange: 3.96,
    yesterdayVolume: 53053855641.35,
    price_7d_low: 55604.02,
    price_7d_high: 60110.27,
    price_30d_low: 50856.57,
    price_30d_high: 61683.86,
    price_90d_low: 28953.37,
    price_90d_high: 61683.86,
    price_52w_low: 6555.5,
    price_52w_high: 61683.86,
    allTimeHigh: { value: 61683.86, comparedToLastValue: 5.1 },
    allTimeLow: { value: 65.53, comparedToLastValue: 89233.94 },
    returnOfInvestment: 43171.97,
    circulatingSupply: 18678100,
    totalSupply: 18678100,
    maxSupply: 21000000,
};
