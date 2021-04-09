export class Coin {
    name: string;
    shortName: string; // todo daha uygun bir değişken adı bulalım
    icon: string;
    price: number;
    rank: number;
    watchlists: number;

    constructor(item: any) {
        this.name = item.name || null;
        this.shortName = item.shortName || null;
        this.icon = item.icon || 'icon yok adresi yani icon bulunamadı resmi';
        this.price = item.price || 0;
        this.rank = item.rank || 0;
        this.watchlists = item.watchlists || 0;

    }
}
