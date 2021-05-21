import { Coin } from '../../app/models/coin';
import { VoteCoinData } from '../../app/models/voteCoinData.model';
import { OverviewPriceStatistics } from '../../app/models/overview-price-statistics.model';

export const fakeCoin = new Coin({
    name: 'Bitcoin',
    price: 52556.41,
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
    symbol: 'BTC',
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

export const fakeCoinStatistics: OverviewPriceStatistics = {
    price: 57695.06,
    price_change_24h: 653.45,
    price_low_high_24h: { low: 57695.06, high: 58937.05 },
    trading_volume_24h: 48568674778.31,
    market_dominance: 54.95,
    market_cap: 1093359164333.68,
    market_rank: 1,
    fully_diluted_market_cap: 1229276128246.84,
    price_low_high_yesterday: { low: 55879.08, high: 58338.74 },
    price_open_close_yesterday: { open: 56099.91, close: 58323.95 },
    price_change_percentage_yesterday: 3.96,
    price_low_high_7d: { low: 55604.02, high: 60110.27 },
    price_low_high_30d: { low: 50856.02, high: 61683.27 },
    price_low_high_90d: { low: 28953.02, high: 61683.27 },
    price_low_high_52w: { low: 6555.02, high: 61683.27 },
    price_low_high_all: {
        high: { date_time: new Date().toISOString(), high_price: 61683.86 },
        low: { date_time: new Date().toISOString(), low_price: 65.53 },
    },
};
