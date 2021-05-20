import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GainersLosersComponent } from './gainers-losers.component';

const routes: Routes = [{ path: '', component: GainersLosersComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GainersLosersRoutingModule {}
