import { NgModule } from '@angular/core';
import { CoinListComponent } from '../../components/coin-list/coin-list.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [HomeRoutingModule],
    declarations: [HomeComponent, CoinListComponent],
    exports: [HomeComponent],
})
export class HomeModule {}
