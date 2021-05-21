import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material.module';
import { AntModule } from '../../shared/ng-zorro-antd.module';
import { TableComponent } from './table.component';
import { MarketsRoutingModule } from './markets-routing.module';

@NgModule({
    imports: [
        MaterialModule,
        AntModule,
        CommonModule,
        FormsModule,
        MarketsRoutingModule,
    ],
    declarations: [TableComponent],
    exports: [TableComponent],
})
export class MarketsModule {}
