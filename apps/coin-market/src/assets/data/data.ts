export interface Markets {
  position: number;
  imageUrl: string;
  source: string;
  pairs: string;
  price: number;
  volume: number;
  volumePercentage: number;
  liquidity: number;
  confidence: string;
  updated: string;
}
const data: Markets[] = [
  {
    position: 1,
    imageUrl: "assets/img/Binance.png",
    source: "Binance",
    pairs: "BTC/USDT",
    price: 54462.22,
    volume: 4018305861,
    volumePercentage: 6.33,
    liquidity: 888,
    confidence: "Low",
    updated: "Recently",
  },
  {
    position: 2,
    imageUrl: "assets/img/HuobiGlobal.jpg",
    source: "Huobi Global",
    pairs: "BTC/USDT",
    price: 54448.11,
    volume: 1611191824,
    volumePercentage: 2.54,
    liquidity: 925,
    confidence: "Low",
    updated: "Recently",
  },
  {
    position: 3,
    imageUrl: "assets/img/CoinbasePro.jpg",
    source: "Coinbase Pro",
    pairs: "BTC/USD",
    price: 54409.0,
    volume: 1295336827,
    volumePercentage: 2.04,
    liquidity: 735,
    confidence: "High",
    updated: "Recently",
  },
  {
    position: 4,
    imageUrl: "assets/img/Binance.png",
    source: "Binance",
    pairs: "BTC/BUSD",
    price: 54465.75,
    volume: 1043018886,
    volumePercentage: 1.64,
    liquidity: 846,
    confidence: "Moderate",
    updated: "Recently",
  },
  {
    position: 5,
    imageUrl: "assets/img/Bitfinex.jpg",
    source: "Bitfinex",
    pairs: "BTC/USD",
    price: 54348.0,
    volume: 565064806,
    volumePercentage: 0.89,
    liquidity: 726,
    confidence: "High",
    updated: "Recently",
  },
  {
    position: 6,
    imageUrl: "assets/img/bitFlyer.png",
    source: "bitFlyer",
    pairs: "BTC/JPY",
    price: 54485.01,
    volume: 431168700,
    volumePercentage: 0.68,
    liquidity: 481,
    confidence: "High",
    updated: "Recently",
  },
  {
    position: 7,
    imageUrl: "assets/img/Bitstamp.jpg",
    source: "Bitstamp",
    pairs: "BTC/USD",
    price: 54395.06,
    volume: 411005517,
    volumePercentage: 0.65,
    liquidity: 453,
    confidence: "Moderate",
    updated: "Recently",
  },
  {
    position: 8,
    imageUrl: "assets/img/Binance.png",
    source: "Binance",
    pairs: "ETH/BTC",
    price: 54585.35,
    volume: 400202504,
    volumePercentage: 0.63,
    liquidity: 831,
    confidence: "High",
    updated: "Recently",
  },
  {
    position: 9,
    imageUrl: "assets/img/Kraken.jpg",
    source: "Kraken",
    pairs: "BTC/USD",
    price: 54418.9,
    volume: 38442501,
    volumePercentage: 0.61,
    liquidity: 799,
    confidence: "High",
    updated: "Recently",
  },
  {
    position: 10,
    imageUrl: "assets/img/FTX.png",
    source: "FTX",
    pairs: "BTC/USD",
    price: 54376.0,
    volume: 351624004,
    volumePercentage: 0.55,
    liquidity: NaN,
    confidence: "High",
    updated: "Recently",
  },
  {
    position: 11,
    imageUrl: "assets/img/Bithumb.png",
    source: "Bithumb",
    pairs: "BTC/KRW",
    price: 57216.13,
    volume: 323673664,
    volumePercentage: 0.51,
    liquidity: 505,
    confidence: "High",
    updated: "Recently",
  },
  {
    position: 12,
    imageUrl: "assets/img/Kraken.jpg",
    source: "Kraken",
    pairs: "BTC/EUR",
    price: 54516.62,
    volume: 306007624,
    volumePercentage: 0.48,
    liquidity: 862,
    confidence: "High",
    updated: "Recently",
  },
  {
    position: 13,
    imageUrl: "assets/img/Binance.png",
    source: "Binance",
    pairs: "XRP/BTC",
    price: 54583.12,
    volume: 278532042,
    volumePercentage: 0.44,
    liquidity: 268,
    confidence: "Low",
    updated: "Recently",
  },
  {
    position: 14,
    imageUrl: "assets/img/Kucoin.png",
    source: "KuCoin",
    pairs: "BTC/USDT",
    price: 54447.68,
    volume: 270045284,
    volumePercentage: 0.43,
    liquidity: 884,
    confidence: "High",
    updated: "Recently",
  },
  {
    position: 15,
    imageUrl: "assets/img/Binance.png",
    source: "Binance",
    pairs: "BTC/EUR",
    price: 54543.47,
    volume: 228740881,
    volumePercentage: 0.36,
    liquidity: 661,
    confidence: "High",
    updated: "Recently",
  },
  {
    position: 16,
    imageUrl: "assets/img/Liquid.png",
    source: "Liquid",
    pairs: "BTC/JPY",
    price: 54479.17,
    volume: 210098239,
    volumePercentage: 0.33,
    liquidity: 419,
    confidence: "Moderate",
    updated: "Recently",
  },
  {
    position: 17,
    imageUrl: "assets/img/Coincheck.png",
    source: "Coincheck",
    pairs: "BTC/JPY",
    price: 54538.19,
    volume: 18370074,
    volumePercentage: 0.29,
    liquidity: 461,
    confidence: "High",
    updated: "Recently",
  },
  {
    position: 18,
    imageUrl: "assets/img/Binance.png",
    source: "Binance",
    pairs: "BNB/BTC",
    price: 54583.12,
    volume: 165056921,
    volumePercentage: 0.26,
    liquidity: 606,
    confidence: "High",
    updated: "Recently",
  },
  {
    position: 19,
    imageUrl: "assets/img/FTX.png",
    source: "FTX",
    pairs: "BTC/USDT",
    price: 54459.39,
    volume: 160662206,
    volumePercentage: 0.25,
    liquidity: NaN,
    confidence: "High",
    updated: "Recently",
  },
  {
    position: 20,
    imageUrl: "assets/img/Binance.png",
    source: "Binance",
    pairs: "THETA/BTC",
    price: 55257.94,
    volume: 142348858,
    volumePercentage: 0.22,
    liquidity: 497,
    confidence: "High",
    updated: "Recently",
  },
  {
    position: 21,
    imageUrl: "assets/img/Binance.png",
    source: "Binance",
    pairs: "BTC/USDT",
    price: 54462.22,
    volume: 162032857,
    volumePercentage: 0.26,
    liquidity: 251,
    confidence: "Moderate",
    updated: "Recently",
  },
  {
    position: 22,
    imageUrl: "assets/img/CoinbasePro.jpg",
    source: "Coinbase Pro",
    pairs: "BTC/EUR",
    price: 55138.61,
    volume: 148438661,
    volumePercentage: 0.24,
    liquidity: 526,
    confidence: "High",
    updated: "Recently",
  },
  {
    position: 23,
    imageUrl: "assets/img/FTX.png",
    source: "FTX",
    pairs: "BTC/USDT",
    price: 55130.34,
    volume: 133064304,
    volumePercentage: 0.21,
    liquidity: NaN,
    confidence: "High",
    updated: "Recently",
  },
  {
    position: 24,
    imageUrl: "assets/img/Binance.png",
    source: "Gemini",
    pairs: "BTC/USD",
    price: 55111.65,
    volume: 132529283,
    volumePercentage: 0.21,
    liquidity: 510,
    confidence: "High",
    updated: "Recently",
  },
  {
    position: 25,
    imageUrl: "assets/img/Bitfinex.jpg",
    source: "Coinone",
    pairs: "BTC/KRW",
    price: 57628.37,
    volume: 124270044,
    volumePercentage: 0.2,
    liquidity: 436,
    confidence: "High",
    updated: "Recently",
  },
  {
    position: 26,
    imageUrl: "assets/img/Binance.png",
    source: "Binance",
    pairs: "BTC/USDC",
    price: 55141.45,
    volume: 123714560,
    volumePercentage: 0.2,
    liquidity: 483,
    confidence: "Moderate",
    updated: "Recently",
  },
  {
    position: 27,
    imageUrl: "assets/img/Binance.png",
    source: "Binance",
    pairs: "ONE/BTC",
    price: 55257.94,
    volume: 81676236,
    volumePercentage: 0.13,
    liquidity: 138,
    confidence: "Low",
    updated: "Recently",
  },
  {
    position: 28,
    imageUrl: "assets/img/Binance.png",
    source: "Binance",
    pairs: "BTC/GBP",
    price: 55206.0,
    volume: 75398225,
    volumePercentage: 0.12,
    liquidity: 421,
    confidence: "High",
    updated: "Recently",
  },
  {
    position: 29,
    imageUrl: "assets/img/CoinbasePro.jpg",
    source: "Coinbase Pro",
    pairs: "BTC/GBP",
    price: 55157.17,
    volume: 72327598,
    volumePercentage: 0.12,
    liquidity: 437,
    confidence: "High",
    updated: "Recently",
  },
  {
    position: 30,
    imageUrl: "assets/img/Bitfinex.jpg",
    source: "Bitfinex",
    pairs: "BTC/USDT",
    price: 55126.33,
    volume: 69813.961,
    volumePercentage: 0.11,
    liquidity: 492,
    confidence: "High",
    updated: "Recently",
  },
  {
    position: 31,
    imageUrl: "assets/img/Bithumb.png",
    source: "Bithumb",
    pairs: "BTC/KRW",
    price: 57216.13,
    volume: 323673664,
    volumePercentage: 0.51,
    liquidity: 505,
    confidence: "High",
    updated: "Recently",
  },
  {
    position: 32,
    imageUrl: "assets/img/Kraken.jpg",
    source: "Kraken",
    pairs: "BTC/EUR",
    price: 54516.62,
    volume: 306007624,
    volumePercentage: 0.48,
    liquidity: 862,
    confidence: "High",
    updated: "Recently",
  },
  {
    position: 33,
    imageUrl: "assets/img/Binance.png",
    source: "Binance",
    pairs: "XRP/BTC",
    price: 54583.12,
    volume: 278532042,
    volumePercentage: 0.44,
    liquidity: 268,
    confidence: "Low",
    updated: "Recently",
  },
  {
    position: 34,
    imageUrl: "assets/img/Kucoin.png",
    source: "KuCoin",
    pairs: "BTC/USDT",
    price: 54447.68,
    volume: 270045284,
    volumePercentage: 0.43,
    liquidity: 884,
    confidence: "High",
    updated: "Recently",
  },
  {
    position: 35,
    imageUrl: "assets/img/Binance.png",
    source: "Binance",
    pairs: "BTC/EUR",
    price: 54543.47,
    volume: 228740881,
    volumePercentage: 0.36,
    liquidity: 661,
    confidence: "High",
    updated: "Recently",
  },
  {
    position: 36,
    imageUrl: "assets/img/Liquid.png",
    source: "Liquid",
    pairs: "BTC/JPY",
    price: 54479.17,
    volume: 210098239,
    volumePercentage: 0.33,
    liquidity: 419,
    confidence: "Moderate",
    updated: "Recently",
  },
  {
    position: 37,
    imageUrl: "assets/img/Coincheck.png",
    source: "Coincheck",
    pairs: "BTC/JPY",
    price: 54538.19,
    volume: 18370074,
    volumePercentage: 0.29,
    liquidity: 461,
    confidence: "High",
    updated: "Recently",
  },
  {
    position: 38,
    imageUrl: "assets/img/Binance.png",
    source: "Binance",
    pairs: "BNB/BTC",
    price: 54583.12,
    volume: 165056921,
    volumePercentage: 0.26,
    liquidity: 606,
    confidence: "High",
    updated: "Recently",
  },
  {
    position: 39,
    imageUrl: "assets/img/FTX.png",
    source: "FTX",
    pairs: "BTC/USDT",
    price: 54459.39,
    volume: 160662206,
    volumePercentage: 0.25,
    liquidity: NaN,
    confidence: "High",
    updated: "Recently",
  },
  {
    position: 40,
    imageUrl: "assets/img/CoinbasePro.jpg",
    source: "Coinbase Pro",
    pairs: "BTC/EUR",
    price: 54486.77,
    volume: 142348858,
    volumePercentage: 0.22,
    liquidity: 497,
    confidence: "High",
    updated: "Recently",
  },
];
export default data;
