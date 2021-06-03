export class Coin {
    coin_name: string;
    coin_id: string;
    icon: string;
    price: number;
    coin_rank: number;
    watchlists: number;

    constructor(item: any) {
        this.coin_name = item.name || null;
        this.coin_id = item.shortName || null;
        this.icon = item.icon || 'icon yok adresi yani icon bulunamadı resmi';
        this.price = item.price || 0;
        this.coin_rank = item.rank || 0;
        this.watchlists = item.watchlists || 0;

    }
}