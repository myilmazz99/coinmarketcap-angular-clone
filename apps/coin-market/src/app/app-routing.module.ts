import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./pages/home/home.module').then((m) => m.HomeModule),
        pathMatch: 'full',
    },
    {
        path: 'currencies/:coin_id',
        loadChildren: () =>
            import('./pages/currency/currency.module').then(
                (m) => m.CurrencyModule
            ),
    },
    {
        path: 'gainers-losers',
        loadChildren: () =>
            import('./pages/gainers-losers/gainers-losers.module').then(
                (m) => m.GainersLosersModule
            ),
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full',
    },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
