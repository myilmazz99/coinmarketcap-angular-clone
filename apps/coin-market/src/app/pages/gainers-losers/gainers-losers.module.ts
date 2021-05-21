import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GainersLosersRoutingModule } from './gainers-losers-routing.module';
import { GainersLosersComponent } from './gainers-losers.component';

@NgModule({
    declarations: [GainersLosersComponent],
    imports: [CommonModule, GainersLosersRoutingModule],
    exports: [GainersLosersComponent],
})
export class GainersLosersModule {}
