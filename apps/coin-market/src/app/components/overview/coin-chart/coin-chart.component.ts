import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OverviewService } from '../../../shared/services/overview.service';
import { ChartDataTab, ChartData, ChartDateRange } from '@coin-market/data';

@Component({
    selector: 'coin-market-coin-chart',
    styleUrls: ['./coin-chart.component.scss'],
    templateUrl: './coin-chart.component.html',
})
export class CoinChartComponent implements OnInit {
    chartData$: Observable<ChartData>;
    selectedTab$: Observable<ChartDataTab>;
    selectedRange$: Observable<ChartDateRange>;

    constructor(private overviewService: OverviewService) {}

    ngOnInit(): void {
        this.chartData$ = this.overviewService.chartData$;
        this.selectedTab$ = this.overviewService.selectedTab$;
        this.selectedRange$ = this.overviewService.selectedRange$;
    }

    selectTabChange(val: any) {
        this.overviewService.selectedTab = val;
    }

    selectedRangeChange(val: any) {
        this.overviewService.selectedRange = val;
    }
}
