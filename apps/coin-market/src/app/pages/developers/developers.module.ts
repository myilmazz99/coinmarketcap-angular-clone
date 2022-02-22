import { DevelopersComponent } from './developers.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

const routes: Routes = [{ path: '', component: DevelopersComponent }];

@NgModule({
    declarations: [DevelopersComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [CurrencyPipe],
})
export class DevelopersModule {}
