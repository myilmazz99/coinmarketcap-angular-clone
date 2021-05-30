import {
    AfterViewInit,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import { ChartDataTab, ChartData } from '@coin-market/data';

@Component({
    selector: 'ui-chart-data-tabs',
    templateUrl: './chart-data-tabs.component.html',
    styleUrls: ['./chart-data-tabs.component.scss'],
})
export class ChartDataTabsComponent {
    @Input() chart: Highcharts.Chart;
    @Input() data: ChartData;

    @Input() selected: ChartDataTab;
    @Output() selectedChange = new EventEmitter<ChartDataTab>();

    tabs: ChartDataTab[] = [
        { text: 'Price', textJson: 'price' },
        { text: 'Market Cap', textJson: 'marketCap' },
    ];

    handleClick(val: ChartDataTab) {
        this.selectedChange.emit(val);
        const serie_usd = this.chart.series.find((s) => s.name === 'USD');
        const serie_coin = this.chart.series.find((s) => s.name === 'BTC');

        serie_coin.update({
            type: 'line',
            data: this.data[val.textJson].coin,
        });
        serie_usd.update({
            type: 'line',
            data: this.data[val.textJson].usd,
        });
    }
}
