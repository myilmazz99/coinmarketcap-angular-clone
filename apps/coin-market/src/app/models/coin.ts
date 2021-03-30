export class Coin {
    name: string;
    symbol: string; // todo daha uygun bir değişken adı bulalım
    icon: string;
    price: number;

    constructor(item: any) {
        this.name = item.name || null;
        this.symbol = item.symbol || null;
        this.icon = item.icon || 'icon yok adresi yani icon bulunamadı resmi';
        this.price = item.price || 0;
    }
}
