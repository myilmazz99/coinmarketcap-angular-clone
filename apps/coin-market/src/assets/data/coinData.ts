import { Coin } from '../../app/models/coin.model';
import { VoteCoinData } from '../../app/models/voteCoinData.model';
import { OverviewPriceStatistics } from '../../app/models/overview-price-statistics.model';

export const fakeCoin: Coin = {
    coin_id: 'btc',
    price: 56201.17,
    coin_name: 'Bitcoin',
    market_cap: { value: 1028360948721, change_percentage: 3.27 },
    fully_diluted_market_cap: {
        value: 1156036894571,
        change_percentage: -3.54,
    },
    volume: { value: 1028360948, change_percentage: 0.88 },
    circulating_supply: {
        circulating_supply: 18666012,
        max_supply: 21000000,
        total_supply: 18666012,
    },
    price_high_low: { high: 58429.22, low: 55889.15, interval: '24h' },
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
};

export const fakeTrendingCoinList: Coin[] = [
    new Coin({
        coin_name: 'Bitcoin',
        price: 52556.41,
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
        coin_id: 'BTC',
    }),
    new Coin({
        coin_name: 'SHD CASH',
        price: 52556.41,
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8740.png',
        coin_id: 'SHDC',
    }),
    new Coin({
        coin_name: 'Alaya',
        price: 52556.41,
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7814.png',
        coin_id: 'ATP',
    }),
    new Coin({
        coin_name: 'Bitcashpay',
        price: 52556.41,
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7867.png',
        coin_id: 'BCP',
    }),
    new Coin({
        coin_name: 'RAMP',
        price: 52556.41,
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7463.png',
        coin_id: 'RAMP',
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
