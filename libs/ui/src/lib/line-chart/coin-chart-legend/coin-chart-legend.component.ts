/* eslint-disable no-case-declarations */
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ui-coin-chart-legend',
    templateUrl: './coin-chart-legend.component.html',
    styleUrls: ['./coin-chart-legend.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class CoinChartLegendComponent implements OnInit {
    @Input() chart: Highcharts.Chart;
    @Input() coinId: string;
    legend: string[];

    ngOnInit(): void {
        this.legend = ['USD', this.coinId];
    }

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
