/* eslint-disable no-case-declarations */
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'coin-chart-legend',
    templateUrl: './coin-chart-legend.component.html',
    styleUrls: ['./coin-chart-legend.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class CoinChartLegendComponent {
    @Input() legend: string[] = [];
    @Input() chart: Highcharts.Chart;

    legendSwitch(e: any) {
        const { name, checked } = e.target;

        switch (name) {
            case 'BTC':
                const serie_btc = this.chart.series.find(
                    (s) => s.name === name
                );
                if (checked) serie_btc?.show();
                else serie_btc?.hide();
                break;
            case 'USD':
                const serie_usd = this.chart.series.find(
                    (s) => s.name === name
                );
                if (!checked) serie_usd.hide();
                else serie_usd.show();
                break;
            default:
                break;
        }
    }
}
