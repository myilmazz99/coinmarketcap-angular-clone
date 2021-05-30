import { Component, Input } from '@angular/core';

@Component({
    selector: 'ui-chart-fullscreen-button',
    templateUrl: './chart-fullscreen-button.component.html',
    styleUrls: ['./chart-fullscreen-button.component.scss'],
})
export class ChartFullscreenButtonComponent {
    @Input() chart: Highcharts.Chart;

    onClick() {
        this.chart.fullscreen.toggle();
    }
}
