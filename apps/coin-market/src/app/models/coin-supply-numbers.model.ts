export class CoinSupplyNumbers {
    max_supply: number;
    circulating_supply: number;
    total_supply: number;

    constructor(item?: any) {
        this.max_supply = item?.max_supply || 0;
        this.circulating_supply = item?.circulating_supply || 0;
        this.total_supply = item?.total_supply || 0;
    }
}
