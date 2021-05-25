import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { GainersLosersRoutingModule } from './gainers-losers-routing.module';
import { GainersLosersComponent } from './gainers-losers.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [GainersLosersComponent],
    imports: [
        CommonModule,
        GainersLosersRoutingModule,
        AgGridModule.withComponents([]),
        HttpClientModule,
    ],
    exports: [GainersLosersComponent],
    providers: [CurrencyPipe],
})
export class GainersLosersModule {}
