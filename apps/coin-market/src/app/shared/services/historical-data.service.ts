import { Injectable } from '@angular/core';
import { DateRange } from '@coin-market/data';
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

    //keeps record of oldest data present on table
    private oldestData: Date;

    constructor() {
        this.getHistoricalData();
        this.historicalData$ = this.historicalData.asObservable();
    }

    //this will request another month of data, starting from oldest data shown on table
    loadMore() {
        const existingData = this.historicalData.getValue();
        const dataToAdd = this.generateDataForLoadMore();

        this.historicalData.next([...existingData, ...dataToAdd]);
    }

    //this will request last 2 months of data or the date range if provided
    getHistoricalData(date?: DateRange) {
        if (date) {
            //send request for dates provided
            const data = this.generateDataByDate(date); //will be replaced with http request

            this.historicalData.next(data);
            this.oldestData = new Date(date.start);
        } else {
            //send request for last 2 months
            const data = this.generateInitialData();

            this.historicalData.next(data);
            this.oldestData = new Date(new Date().setHours(-24 * 10));
        }
    }

    //updates date with values passed
    filterByDate(dates: DateRange) {
        this.getHistoricalData(dates);
    }

    //generates fake data with dates provided
    generateDataByDate = (dates: DateRange) => {
        const { start, end } = dates;
        const arr: HistoricalData[] = [];

        const days = Math.floor((end - start) / 86400000);

        for (let i = 0; i < days; i++) {
            arr.push(
                new HistoricalData({
                    coinID: '1',
                    closing: {
                        value: Math.floor(Math.random() * 90000),
                        date_time: new Date(
                            new Date(end).setHours(-24 * i)
                        ).toISOString(),
                    },
                    opening: {
                        value: Math.floor(Math.random() * 90000),
                        date_time: new Date(
                            new Date(end).setHours(-24 * i)
                        ).toISOString(),
                    },
                    highest: {
                        value: Math.floor(Math.random() * 90000),
                        date_time: new Date(
                            new Date(end).setHours(-24 * i)
                        ).toISOString(),
                    },
                    lowest: {
                        value: Math.floor(Math.random() * 90000),
                        date_time: new Date(
                            new Date(end).setHours(-24 * i)
                        ).toISOString(),
                    },
                    volume: {
                        value: Math.floor(Math.random() * 9000000),
                        date_time: new Date(
                            new Date(end).setHours(-24 * i)
                        ).toISOString(),
                    },
                    marketCap: {
                        value: Math.floor(Math.random() * 9000000),
                        date_time: new Date(
                            new Date(end).setHours(-24 * i)
                        ).toISOString(),
                    },
                })
            );
        }

        return arr;
    };

    generateDataForLoadMore() {
        const dataToAdd: HistoricalData[] = [];

        for (let i = 0; i < 5; i++) {
            const oldest = this.oldestData;
            dataToAdd.push(
                new HistoricalData({
                    coinID: '1',
                    closing: {
                        value: Math.floor(Math.random() * 90000),
                        date_time: oldest.toISOString(),
                    },
                    opening: {
                        value: Math.floor(Math.random() * 90000),
                        date_time: oldest.toISOString(),
                    },
                    highest: {
                        value: Math.floor(Math.random() * 90000),
                        date_time: oldest.toISOString(),
                    },
                    lowest: {
                        value: Math.floor(Math.random() * 90000),
                        date_time: oldest.toISOString(),
                    },
                    volume: {
                        value: Math.floor(Math.random() * 9000000),
                        date_time: oldest.toISOString(),
                    },
                    marketCap: {
                        value: Math.floor(Math.random() * 9000000),
                        date_time: oldest.toISOString(),
                    },
                })
            );

            this.oldestData = new Date(oldest.setHours(-24));
        }

        return dataToAdd;
    }

    generateInitialData() {
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

        return data;
    }
}
