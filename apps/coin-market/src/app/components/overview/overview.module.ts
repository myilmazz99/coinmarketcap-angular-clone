import { NgModule } from '@angular/core';
import { OverviewComponent } from './overview.component';
import { CoinChartComponent } from '../../components/overview/coin-chart/coin-chart.component';
import { CoinConverterComponent } from '../../components/overview/coin-converter/coin-converter.component';
import { CoinStatisticsComponent } from '../../components/overview/coin-statistics/coin-statistics.component';
import { TrendingComponent } from '../../components/overview/trending/trending.component';
import { VoteCoinComponent } from '../../components/overview/vote-coin/vote-coin.component';
import { CoinStatisticRowComponent } from '../../components/overview/coin-statistics/coin-statistic-row/coin-statistic-row.component';
import { UiModule } from '@coin-market/ui';
import { CommonModule } from '@angular/common';
import { OverviewRoutingModule } from './overview-routing.module';
import { MaterialModule } from '../../shared/material.module';
import { MarketsModule } from '../../shared/table/markets.module';

@NgModule({
    imports: [
        UiModule,
        CommonModule,
        OverviewRoutingModule,
        MaterialModule,
        MarketsModule,
    ],
    declarations: [
        OverviewComponent,
        CoinStatisticRowComponent,
        CoinChartComponent,
        CoinStatisticsComponent,
        CoinConverterComponent,
        TrendingComponent,
        VoteCoinComponent,
    ],
    exports: [OverviewComponent],
})
export class OverviewModule {}
