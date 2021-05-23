import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material.module';
import { AntModule } from '../../shared/ng-zorro-antd.module';
import { CurrencyRoutingModule } from './currency-routing.module';
import { BuyAddButtonSectionComponent } from '../../components/buy-add-button-section/buy-add-button-section.component';
import { LinkSectionComponent } from '../../components/link-section/link-section.component';
import { NameSectionComponent } from '../../components/name-section/name-section.component';
import { PriceSectionComponent } from '../../components/price-section/price-section.component';

import { StatsSectionComponent } from '../../components/stats-section/stats-section.component';
import { CurrencyComponent } from './currency.component';
import { CurrencyTabsComponent } from '../../components/currency-tabs/currency-tabs.component';
import { LoadingBarComponent } from '../../components/loading-bar/loading-bar.component';

@NgModule({
    imports: [
        CurrencyRoutingModule,
        CommonModule,
        MaterialModule,
        FormsModule,
        HttpClientModule,
        AntModule,
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
    ],
    exports: [CurrencyComponent],
})
export class CurrencyModule {}
