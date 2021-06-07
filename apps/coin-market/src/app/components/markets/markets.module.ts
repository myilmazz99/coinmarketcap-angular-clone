import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material.module';
import { TableModule } from '../../shared/table/table.module';
import { MarketsRoutingModule } from './markets-routing.module';
import { MarketsComponent } from './markets.component';

@NgModule({
    imports: [
        MaterialModule,
        CommonModule,
        FormsModule,
        MarketsRoutingModule,
        TableModule,
    ],
    declarations: [MarketsComponent],
    exports: [MarketsComponent],
})
export class MarketsModule {}
