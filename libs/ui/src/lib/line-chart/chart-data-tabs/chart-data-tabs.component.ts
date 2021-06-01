import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChartData, ChartDataTab } from '@coin-market/data';

@Component({
    selector: 'ui-chart-data-tabs',
    templateUrl: './chart-data-tabs.component.html',
    styleUrls: ['./chart-data-tabs.component.scss'],
})
export class ChartDataTabsComponent {
    private _chart: Highcharts.Chart;
    @Input() set chart(val: Highcharts.Chart) {
        if (val) {
            this._chart = val;
            this.switchTab(this.selected);
        }
    }
    @Input() data: ChartData;

    @Input() selected: ChartDataTab;
    @Output() selectedChange = new EventEmitter<ChartDataTab>();

    tabs: ChartDataTab[] = [
        { text: 'Price', textJson: 'price' },
        { text: 'Market Cap', textJson: 'marketCap' },
    ];

    switchTab(val: ChartDataTab) {
        this.emitChanges(val);

        const serie_usd = this._chart.series.find((s) => s.name === 'USD');
        const serie_coin = this._chart.series.find((s) => s.name === 'BTC');

        serie_coin.update({
            type: 'line',
            data: this.data[val.textJson].coin,
        });
        serie_usd.update({
            type: 'line',
            data: this.data[val.textJson].usd,
        });
    }

    emitChanges(val: ChartDataTab) {
        this.selectedChange.emit(val);
    }
}
