import {
    AfterViewInit,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import { ChartDataTabs, ChartData } from '@coin-market/data';

@Component({
    selector: 'chart-data-tabs',
    templateUrl: './chart-data-tabs.component.html',
    styleUrls: ['./chart-data-tabs.component.scss'],
})
export class ChartDataTabsComponent implements AfterViewInit {
    @Input() tabs: ChartDataTabs[];
    @Input() chart: Highcharts.Chart;
    @Input() data: ChartData;
    @Output() selected = new EventEmitter<string>();

    handleClick(val: string) {
        this.selected.emit(val);
        const serie_usd = this.chart.series.find((s) => s.name === 'USD');
        const serie_coin = this.chart.series.find((s) => s.name === 'BTC');

        serie_coin.update({
            type: 'line',
            data: this.data[val].coin,
        });
        serie_usd.update({
            type: 'line',
            data: this.data[val].usd,
        });
    }

    ngAfterViewInit(): void {
        this.selected.emit(this.tabs[0].objProp);
    }
}
