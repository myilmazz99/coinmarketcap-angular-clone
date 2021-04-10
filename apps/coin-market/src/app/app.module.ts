import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { CoinChartComponent } from './components/coin-chart/coin-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CoinStatisticsComponent } from './components/coin-statistics/coin-statistics.component';
import { CoinConverterComponent } from './components/coin-converter/coin-converter.component';
import { TrendingComponent } from './components/trending/trending.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VoteCoinComponent } from './components/vote-coin/vote-coin.component';
import { CoinChartLegendComponent } from './components/coin-chart/coin-chart-legend/coin-chart-legend.component';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { CoinChartCalendarComponent } from './components/coin-chart/chart-range-selector/coin-chart-calendar/coin-chart-calendar.component';
import { ChartRangeSelectorComponent } from './components/coin-chart/chart-range-selector/chart-range-selector.component';
import { OverviewComponent } from './components/overview/overview.component';

import { SelectComponent } from './components/select/select.component';
import { MarketsService } from './shared/services/markets.service';
import { NameSectionComponent } from './components/name-section/name-section.component';
import { PriceSectionComponent } from './components/price-section/price-section.component';
import { StatsSectionComponent } from './components/stats-section/stats-section.component';
import { BuyAddButtonSectionComponent } from './components/buy-add-button-section/buy-add-button-section.component';
import { LinkSectionComponent } from './components/link-section/link-section.component';
import { TableComponent } from './components/table/table.component';
import { ChartFullscreenButtonComponent } from './components/coin-chart/chart-fullscreen-button/chart-fullscreen-button.component';
import { ChartExportsButtonComponent } from './components/coin-chart/chart-exports-button/chart-exports-button.component';
import { ChartDataTabsComponent } from './components/coin-chart/chart-data-tabs/chart-data-tabs.component';

import { UiModule } from '@coin-market/ui';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
    ],
    providers: [CurrencyPipe, MarketsService, DecimalPipe],
    bootstrap: [AppComponent],
})
export class AppModule {}
