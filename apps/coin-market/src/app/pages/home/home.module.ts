import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UiModule } from '@coin-market/ui';
import { HighchartsChartModule } from 'highcharts-angular';
import { BuyAddButtonSectionComponent } from '../../components/buy-add-button-section/buy-add-button-section.component';
import { ChartDataTabsComponent } from '../../components/coin-chart/chart-data-tabs/chart-data-tabs.component';
import { ChartExportsButtonComponent } from '../../components/coin-chart/chart-exports-button/chart-exports-button.component';
import { ChartFullscreenButtonComponent } from '../../components/coin-chart/chart-fullscreen-button/chart-fullscreen-button.component';
import { ChartRangeSelectorComponent } from '../../components/coin-chart/chart-range-selector/chart-range-selector.component';
import { CoinChartCalendarComponent } from '../../components/coin-chart/chart-range-selector/coin-chart-calendar/coin-chart-calendar.component';
import { CoinChartLegendComponent } from '../../components/coin-chart/coin-chart-legend/coin-chart-legend.component';
import { CoinChartComponent } from '../../components/coin-chart/coin-chart.component';
import { CoinConverterComponent } from '../../components/coin-converter/coin-converter.component';
import { CoinStatisticsComponent } from '../../components/coin-statistics/coin-statistics.component';
import { LinkSectionComponent } from '../../components/link-section/link-section.component';
import { NameSectionComponent } from '../../components/name-section/name-section.component';
import { OverviewComponent } from '../../components/overview/overview.component';
import { PriceSectionComponent } from '../../components/price-section/price-section.component';
import { SelectComponent } from '../../components/select/select.component';
import { StatsSectionComponent } from '../../components/stats-section/stats-section.component';
import { TableComponent } from '../../components/table/table.component';
import { TrendingComponent } from '../../components/trending/trending.component';
import { VoteCoinComponent } from '../../components/vote-coin/vote-coin.component';
import { MaterialModule } from '../../shared/material.module';


@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        MaterialModule,
        HighchartsChartModule,
        FormsModule,
        HttpClientModule,
        UiModule,
    ],
  declarations: [
      HomeComponent,
      CoinChartComponent,
        CoinStatisticsComponent,
        CoinConverterComponent,
        TrendingComponent,
        ChartRangeSelectorComponent,
        VoteCoinComponent,
        CoinChartLegendComponent,
        CoinChartCalendarComponent,
        SelectComponent,
        NameSectionComponent,
        PriceSectionComponent,
        StatsSectionComponent,
        BuyAddButtonSectionComponent,
        LinkSectionComponent,
        OverviewComponent,
        ChartFullscreenButtonComponent,
        ChartExportsButtonComponent,
        ChartDataTabsComponent,
        TableComponent,
    ],
  exports: [HomeComponent],
})
export class HomeModule { }
