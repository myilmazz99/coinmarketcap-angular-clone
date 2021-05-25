export class GainersLosers {
    rank: number;
    coin_icon: string;
    coin_name: string;
    coin_id: string;
    price: number;

    constructor(item?: any) {
        this.rank = item.rank || 0;
        this.coin_icon = item.coin_icon || '';
        this.coin_name = item.coin_name || '';
        this.coin_id = item.coin_id || '';
        this.price = item.price || 0;
    }
}
