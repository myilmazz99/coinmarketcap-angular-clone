import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material.module';
import { CurrencyRoutingModule } from './currency-routing.module';
import { BuyAddButtonSectionComponent } from '../../components/details-section/buy-add-button-section/buy-add-button-section.component';
import { LinkSectionComponent } from '../../components/details-section/link-section/link-section.component';
import { NameSectionComponent } from '../../components/details-section/name-section/name-section.component';
import { PriceSectionComponent } from '../../components/details-section/price-section/price-section.component';

import { StatsSectionComponent } from '../../components/details-section/stats-section/stats-section.component';
import { CurrencyComponent } from './currency.component';
import { CurrencyTabsComponent } from '../../components/currency-tabs/currency-tabs.component';
import { LoadingBarComponent } from '../../components/loading-bar/loading-bar.component';
import { DetailsSectionComponent } from '../../components/details-section/details-section.component';
import { CoinDetailBarComponent } from '../../components/coin-detail-bar/coin-detail-bar.component';

@NgModule({
    imports: [
        CurrencyRoutingModule,
        CommonModule,
        MaterialModule,
        FormsModule,
        HttpClientModule,
    ],
    declarations: [
        CurrencyComponent,
        NameSectionComponent,
        PriceSectionComponent,
        StatsSectionComponent,
        BuyAddButtonSectionComponent,
        LinkSectionComponent,
        CurrencyTabsComponent,
        LoadingBarComponent,
        DetailsSectionComponent,
        CoinDetailBarComponent,
    ],
    exports: [CurrencyComponent],
})
export class CurrencyModule {}
