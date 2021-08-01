import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router'; // CLI imports router
import { NotFoundComponent } from './components/not-found/not-found.component';

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
        component: NotFoundComponent,
    },
]; // sets up routes constant where you define your routes

export const routingConfiguration: ExtraOptions = {
    paramsInheritanceStrategy: 'always',
};

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes, routingConfiguration)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
