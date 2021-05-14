import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HistoricalData } from '../../models/historical-data.model';
import { HistoricalDataService } from '../../shared/services/historical-data.service';

@Component({
    selector: 'coin-market-historical-data',
    templateUrl: './historical-data.component.html',
    styleUrls: ['./historical-data.component.scss'],
})
export class HistoricalDataComponent {
    @ViewChild(MatMenuTrigger) menu: MatMenuTrigger;
    historicalData$: Observable<HistoricalData[]>;
    displayedColumns = [
        'date_time',
        'highest',
        'lowest',
        'opening',
        'closing',
        'volume',
        'marketCap',
    ];

    constructor(private historicalDataService: HistoricalDataService) {
        this.historicalData$ = historicalDataService.historicalData$.pipe(
            map((data) => data.filter((d) => d.coinID === '1'))
        );
    }

    loadMore() {
        this.historicalDataService.loadMore();
    }

    filterByDate(dates: number[]) {
        console.log(dates);
    }
}
