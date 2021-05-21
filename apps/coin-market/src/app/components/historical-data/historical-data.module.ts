import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiModule } from '@coin-market/ui';
import { MaterialModule } from '../../shared/material.module';
import { HistoricalDataComponent } from './historical-data.component';
import { HistoricalDataRoutingModule } from './historical-data-routing.module';

@NgModule({
    imports: [
        MaterialModule,
        UiModule,
        CommonModule,
        HistoricalDataRoutingModule,
    ],
    declarations: [HistoricalDataComponent],
    exports: [HistoricalDataComponent],
})
export class HistoricalDataModule {}
