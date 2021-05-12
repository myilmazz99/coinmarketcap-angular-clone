import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OverviewService } from '../../../shared/services/overview.service';
import { ChartDataTabs, ChartData } from '@coin-market/data';

@Component({
    selector: 'coin-market-coin-chart',
    styleUrls: ['./coin-chart.component.scss'],
    templateUrl: './coin-chart.component.html',
})
export class CoinChartComponent implements OnInit {
    chartData$: Observable<ChartData>;
    legend = ['USD', 'BTC'];
    tabs: ChartDataTabs[] = [
        { text: 'Price', objProp: 'price' },
        { text: 'Market Cap', objProp: 'marketCap' },
    ];

    constructor(private overviewService: OverviewService) {}

    ngOnInit(): void {
        this.chartData$ = this.overviewService.chartData$;
    }
}
