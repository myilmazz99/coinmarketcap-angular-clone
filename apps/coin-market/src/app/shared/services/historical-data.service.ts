import { Injectable } from '@angular/core';
import { CalendarDateRange } from '@coin-market/data';
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

    private dateRange: BehaviorSubject<CalendarDateRange> = new BehaviorSubject<CalendarDateRange>(
        new CalendarDateRange()
    );
    public dateRange$: Observable<CalendarDateRange>;

    constructor() {
        this.getHistoricalData();
        this.historicalData$ = this.historicalData.asObservable();

        this.dateRange$ = this.dateRange.asObservable();
    }

    //this will request another month of data, starting from oldest data shown on table
    loadMore() {
        const existingData = this.historicalData.getValue();
        const dataToAdd = this.generateDataForLoadMore();

        this.historicalData.next([...existingData, ...dataToAdd]);
    }

    //this will request last 2 months of data or the date range if provided
    getHistoricalData(date?: CalendarDateRange) {
        if (date) {
            //send request for dates provided
            const data = this.generateDataByDate(date); //will be replaced with http request

            this.historicalData.next(data);
            this.dateRange.next(date);
        } else {
            //send request for last 2 months
            const data = this.generateInitialData();

            this.historicalData.next(data);
            this.dateRange.next(
                new CalendarDateRange(
                    new Date(new Date().setHours(-24 * 10)),
                    new Date()
                )
            );
        }
    }

    //updates date with values passed
    filterByDate(dates: CalendarDateRange) {
        this.getHistoricalData(dates);
    }

    //generates fake data with dates provided
    generateDataByDate = (dates: CalendarDateRange) => {
        const { start, end } = dates;
        const arr: HistoricalData[] = [];

        const days = Math.floor((end.getTime() - start.getTime()) / 86400000);

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
        let { start } = this.dateRange.getValue();

        for (let i = 0; i < 5; i++) {
            const oldest = start;
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

            start = new Date(oldest.setHours(-24));
        }

        this.dateRange.next({ ...this.dateRange.getValue(), start });

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
