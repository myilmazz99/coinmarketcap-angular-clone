import { Coin } from '../../app/models/coin.model';

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
