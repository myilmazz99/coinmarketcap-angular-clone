import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './line-chart/line-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
    imports: [
        CommonModule,
        HighchartsChartModule,
    ],
    declarations: [LineChartComponent],
    exports: [LineChartComponent],
})
export class UiModule {}
