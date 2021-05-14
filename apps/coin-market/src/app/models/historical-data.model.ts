export class HistoricalData {
    coinID: string;
    opening: { value: number; date_time: string };
    closing: { value: number; date_time: string };
    highest: { value: number; date_time: string };
    lowest: { value: number; date_time: string };
    volume: { value: number; date_time: string };
    marketCap: { value: number; date_time: string };
    date_time?: string;

    constructor(item: HistoricalData) {
        this.coinID = item.coinID || '';
        this.opening = item.opening || { value: 0, date_time: '' };
        this.closing = item.closing || { value: 0, date_time: '' };
        this.lowest = item.lowest || { value: 0, date_time: '' };
        this.volume = item.volume || { value: 0, date_time: '' };
        this.marketCap = item.marketCap || { value: 0, date_time: '' };
        this.highest = item.highest || { value: 0, date_time: '' };

        this.date_time = item.opening.date_time;
    }
}
