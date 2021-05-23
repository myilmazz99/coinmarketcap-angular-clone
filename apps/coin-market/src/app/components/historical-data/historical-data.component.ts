import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { CalendarDateRange } from '@coin-market/data';
import { Observable } from 'rxjs';
import { HistoricalData } from '../../models/historical-data.model';
import { HistoricalDataService } from '../../shared/services/historical-data.service';

@Component({
    selector: 'coin-market-historical-data',
    templateUrl: './historical-data.component.html',
    styleUrls: ['./historical-data.component.scss'],
})
export class HistoricalDataComponent implements OnInit {
    @ViewChild(MatMenuTrigger) menu: MatMenuTrigger;
    historicalData$: Observable<HistoricalData[]>;
    dateRange$: Observable<CalendarDateRange>;
    displayedColumns = [
        'date_time',
        'highest',
        'lowest',
        'opening',
        'closing',
        'volume',
        'marketCap',
    ];

    constructor(private historicalDataService: HistoricalDataService) {}

    ngOnInit(): void {
        this.historicalData$ = this.historicalDataService.historicalData$;
        this.dateRange$ = this.historicalDataService.dateRange$;
    }

    loadMore() {
        this.historicalDataService.loadMore();
    }

    filterByDate(dates: CalendarDateRange) {
        this.historicalDataService.filterByDate(dates);
    }
}
