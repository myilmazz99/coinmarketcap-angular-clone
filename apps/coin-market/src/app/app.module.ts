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
import { ChartRangeSelectorComponent } from "./components/chart-range-selector/chart-range-selector.component";
import { HttpClientModule } from "@angular/common/http";
import { VoteCoinComponent } from "./components/vote-coin/vote-coin.component";
import { CoinChartLegendComponent } from "./components/coin-chart-legend/coin-chart-legend.component";

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HighchartsChartModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
