import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { CurrencyComponent } from './currency.component';

const routes: Routes = [
    {
        path: '',
        component: CurrencyComponent,
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('../../components/overview/overview.module').then(
                        (m) => m.OverviewModule
                    ),
            },
            {
                path: 'markets',
                loadChildren: () =>
                    import('../../components/table/markets.module').then(
                        (m) => m.MarketsModule
                    ),
            },
            {
                path: 'historical-data',
                loadChildren: () =>
                    import(
                        '../../components/historical-data/historical-data.module'
                    ).then((m) => m.HistoricalDataModule),
            },
        ],
    },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CurrencyRoutingModule {}
