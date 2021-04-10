import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './pages/home/home.component';
import { MarketComponent } from './pages/market/market.component';

const routes: Routes = [
  { 
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  { 
    path: 'market',
    loadChildren: () => import('./pages/market/market.module').then(m => m.MarketModule)
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }