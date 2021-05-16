import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './line-chart/line-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartFullscreenButtonComponent } from './line-chart/chart-fullscreen-button/chart-fullscreen-button.component';
import { MaterialModule } from './line-chart/material.module';
import { ChartRangeSelectorComponent } from './line-chart/chart-range-selector/chart-range-selector.component';
import { CoinChartLegendComponent } from './line-chart/coin-chart-legend/coin-chart-legend.component';
import { ChartDataTabsComponent } from './line-chart/chart-data-tabs/chart-data-tabs.component';
import { ChartExportsButtonComponent } from './line-chart/chart-exports-button/chart-exports-button.component';
import { CalendarComponent } from './calendar/calendar.component';
import { PredefinedDatesComponent } from './calendar/predefined-dates/predefined-dates.component';

@NgModule({
    imports: [CommonModule, HighchartsChartModule, MaterialModule],
    declarations: [
        LineChartComponent,
        ChartFullscreenButtonComponent,
        ChartRangeSelectorComponent,
        CoinChartLegendComponent,
        ChartDataTabsComponent,
        ChartExportsButtonComponent,
        CalendarComponent,
        PredefinedDatesComponent,
    ],
    exports: [LineChartComponent, CalendarComponent],
})
export class UiModule {}
