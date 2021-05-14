import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HistoricalData } from '../../models/historical-data.model';

@Injectable({
    providedIn: 'root',
})
export class HistoricalDataService {
    private historicalData: BehaviorSubject<
        HistoricalData[]
    > = new BehaviorSubject<HistoricalData[]>([]);
    public historicalData$: Observable<HistoricalData[]>;

    constructor() {
        this.getHistoricalData();
        this.historicalData$ = this.historicalData.asObservable();
    }

    //this will request another month of data to be shown on table
    loadMore() {
        const existingData = this.historicalData.getValue();
        this.historicalData.next([
            ...existingData,
            new HistoricalData({
                coinID: '1',
                closing: {
                    value: Math.floor(Math.random() * 90000),
                    date_time: new Date(
                        new Date().setHours(-24 * 10)
                    ).toISOString(),
                },
                opening: {
                    value: Math.floor(Math.random() * 90000),
                    date_time: new Date(
                        new Date().setHours(-24 * 10)
                    ).toISOString(),
                },
                highest: {
                    value: Math.floor(Math.random() * 90000),
                    date_time: new Date(
                        new Date().setHours(-24 * 10)
                    ).toISOString(),
                },
                lowest: {
                    value: Math.floor(Math.random() * 90000),
                    date_time: new Date(
                        new Date().setHours(-24 * 10)
                    ).toISOString(),
                },
                volume: {
                    value: Math.floor(Math.random() * 9000000),
                    date_time: new Date(
                        new Date().setHours(-24 * 10)
                    ).toISOString(),
                },
                marketCap: {
                    value: Math.floor(Math.random() * 9000000),
                    date_time: new Date(
                        new Date().setHours(-24 * 10)
                    ).toISOString(),
                },
            }),
            new HistoricalData({
                coinID: '2',
                closing: {
                    value: Math.floor(Math.random() * 90000),
                    date_time: new Date(
                        new Date().setHours(-24 * 11)
                    ).toISOString(),
                },
                opening: {
                    value: Math.floor(Math.random() * 90000),
                    date_time: new Date(
                        new Date().setHours(-24 * 11)
                    ).toISOString(),
                },
                highest: {
                    value: Math.floor(Math.random() * 90000),
                    date_time: new Date(
                        new Date().setHours(-24 * 11)
                    ).toISOString(),
                },
                lowest: {
                    value: Math.floor(Math.random() * 90000),
                    date_time: new Date(
                        new Date().setHours(-24 * 11)
                    ).toISOString(),
                },
                volume: {
                    value: Math.floor(Math.random() * 9000000),
                    date_time: new Date(
                        new Date().setHours(-24 * 11)
                    ).toISOString(),
                },
                marketCap: {
                    value: Math.floor(Math.random() * 9000000),
                    date_time: new Date(
                        new Date().setHours(-24 * 11)
                    ).toISOString(),
                },
            }),
        ]);
    }

    getHistoricalData() {
        const data: HistoricalData[] = [];

        for (let i = 0; i < 10; i++) {
            const date = new Date(new Date().setHours(-24 * i)).toISOString();
            data.push(
                new HistoricalData({
                    coinID: '1',
                    closing: {
                        value: Math.floor(Math.random() * 90000),
                        date_time: date,
                    },
                    opening: {
                        value: Math.floor(Math.random() * 90000),
                        date_time: date,
                    },
                    highest: {
                        value: Math.floor(Math.random() * 90000),
                        date_time: date,
                    },
                    lowest: {
                        value: Math.floor(Math.random() * 90000),
                        date_time: date,
                    },
                    volume: {
                        value: Math.floor(Math.random() * 9000000),
                        date_time: date,
                    },
                    marketCap: {
                        value: Math.floor(Math.random() * 9000000),
                        date_time: date,
                    },
                })
            );
        }

        this.historicalData.next(data);
    }
}
