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

export class HistoricalDataRequest {
    date_range: string;
    start_date: string;
    end_date: string;

    constructor(item?: any) {
        this.date_range = item.date_range || null;
        this.start_date = item.start_date || null;
        this.end_date = item.end_date || null;
    }
}
