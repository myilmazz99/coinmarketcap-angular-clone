import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UiModule } from '@coin-market/ui';
import { BuyAddButtonSectionComponent } from '../../components/buy-add-button-section/buy-add-button-section.component';
import { CoinChartComponent } from '../../components/overview/coin-chart/coin-chart.component';
import { CoinConverterComponent } from '../../components/overview/coin-converter/coin-converter.component';
import { CoinStatisticsComponent } from '../../components/overview/coin-statistics/coin-statistics.component';
import { LinkSectionComponent } from '../../components/link-section/link-section.component';
import { NameSectionComponent } from '../../components/name-section/name-section.component';
import { OverviewComponent } from '../../components/overview/overview.component';
import { PriceSectionComponent } from '../../components/price-section/price-section.component';
import { SelectComponent } from '../../components/select/select.component';
import { StatsSectionComponent } from '../../components/stats-section/stats-section.component';
import { TableComponent } from '../../components/table/table.component';
import { TrendingComponent } from '../../components/overview/trending/trending.component';
import { VoteCoinComponent } from '../../components/overview/vote-coin/vote-coin.component';
import { MaterialModule } from '../../shared/material.module';
import { CoinStatisticRowComponent } from '../../components/overview/coin-statistics/coin-statistic-row/coin-statistic-row.component';
import { AntModule } from '../../shared/ng-zorro-antd.module';
import { HistoricalDataComponent } from '../../components/historical-data/historical-data.component';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        MaterialModule,
        FormsModule,
        HttpClientModule,
        UiModule,
        AntModule,
    ],
    declarations: [
        HomeComponent,
        CoinStatisticRowComponent,
        CoinChartComponent,
        CoinStatisticsComponent,
        CoinConverterComponent,
        TrendingComponent,
        VoteCoinComponent,
        SelectComponent,
        NameSectionComponent,
        PriceSectionComponent,
        StatsSectionComponent,
        BuyAddButtonSectionComponent,
        LinkSectionComponent,
        OverviewComponent,
        TableComponent,
        BuyAddButtonSectionComponent,
        LinkSectionComponent,
        NameSectionComponent,
        PriceSectionComponent,
        StatsSectionComponent,
        HistoricalDataComponent,
    ],
    exports: [HomeComponent],
})
export class HomeModule {}
