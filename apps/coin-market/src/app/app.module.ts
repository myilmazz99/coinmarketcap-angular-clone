import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./shared/material.module";
import { CoinChartComponent } from "./components/coin-chart/coin-chart.component";
import { HighchartsChartModule } from "highcharts-angular";
import { CoinStatisticsComponent } from "./components/coin-statistics/coin-statistics.component";
import { CoinConverterComponent } from "./components/coin-converter/coin-converter.component";
import { TrendingComponent } from "./components/trending/trending.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { VoteCoinComponent } from "./components/vote-coin/vote-coin.component";
import { CoinChartLegendComponent } from "./components/coin-chart/coin-chart-legend/coin-chart-legend.component";
import { CurrencyPipe } from "@angular/common";
import { CoinChartCalendarComponent } from "./components/coin-chart/chart-range-selector/coin-chart-calendar/coin-chart-calendar.component";
import { ChartRangeSelectorComponent } from "./components/coin-chart/chart-range-selector/chart-range-selector.component";
import { OverviewComponent } from './components/overview/overview.component';

import { TableComponent } from "./table/table.component";
import { SelectComponent } from "./select/select.component";
import { MarketsService } from "./shared/services/markets.service";
import { NameSectionComponent } from './components/name-section/name-section.component';
@NgModule({
  declarations: [
    AppComponent,
    CoinChartComponent,
    CoinStatisticsComponent,
    CoinConverterComponent,
    TrendingComponent,
    ChartRangeSelectorComponent,
    VoteCoinComponent,
    CoinChartLegendComponent,
    CoinChartCalendarComponent,
    OverviewComponent,
    TableComponent,
    SelectComponent,
    NameSectionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HighchartsChartModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    CurrencyPipe, 
    MarketsService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
