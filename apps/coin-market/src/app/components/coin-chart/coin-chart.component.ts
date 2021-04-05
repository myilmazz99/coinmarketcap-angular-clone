import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';

import IndicatorsCore from 'highcharts/indicators/indicators';
import { Observable } from 'rxjs';
import { ChartData } from '../../models/chart-data';
import { OverviewService } from '../../shared/services/overview.service';
IndicatorsCore(Highcharts);

@Component({
    selector: 'coin-chart',
    styleUrls: ['./coin-chart.component.scss'],
    templateUrl: './coin-chart.component.html',
})
export class CoinChartComponent {
    Chart: Highcharts.Chart;
    chartCallback: Highcharts.ChartCallbackFunction = (
        chart: Highcharts.Chart
    ) => {
        this.Chart = chart;
    };

    //data
    selected = 'Price';

    //legend
    legend = ['USD', 'BTC'];

    chartData$: Observable<ChartData>;

    constructor(
        private currencyPipe: CurrencyPipe,
        private overviewService: OverviewService
    ) {
        this.chartData$ = this.overviewService.chartData$;
    }
}
