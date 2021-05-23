import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoinListComponent } from '../../components/coin-list/coin-list.component';
import { MaterialModule } from '../../shared/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MinusPipe } from '../../shared/pipes/minus.pipe';

@NgModule({
    imports: [HomeRoutingModule, CommonModule, MaterialModule],
    declarations: [HomeComponent, CoinListComponent, MinusPipe],
    exports: [HomeComponent],
})
export class HomeModule {}
