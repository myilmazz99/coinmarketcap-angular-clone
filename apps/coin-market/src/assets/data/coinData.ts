import { Coin } from "../../app/models/coin";
import { VoteCoinData } from "../../app/models/voteCoinData.model";

export const fakeCoin = new Coin({
  name: "Bitcoin",
  price: 52556.41,
  icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
  symbol: "BTC",
  rank: 1,
});

export const fakeTrendingCoinList: Coin[] = [
  new Coin({
    name: "Bitcoin",
    price: 52556.41,
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
    symbol: "BTC",
    rank: 1,
  }),
  new Coin({
    name: "SHD CASH",
    price: 52556.41,
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/8740.png",
    symbol: "SHDC",
    rank: 2743,
  }),
  new Coin({
    name: "Alaya",
    price: 52556.41,
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/7814.png",
    symbol: "ATP",
    rank: 1743,
  }),
  new Coin({
    name: "Bitcashpay",
    price: 52556.41,
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/7867.png",
    symbol: "BCP",
    rank: 108,
  }),
  new Coin({
    name: "RAMP",
    price: 52556.41,
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/7463.png",
    symbol: "RAMP",
    rank: 227,
  }),
];

export const fakeCoinVotes: VoteCoinData = {
  coinId: 1,
  good: 82,
  bad: 18,
};
