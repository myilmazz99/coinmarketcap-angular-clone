import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { TableComponent } from './table.component';

@NgModule({
    imports: [MaterialModule, CommonModule, FormsModule],
    exports: [TableComponent],
    declarations: [TableComponent],
})
export class TableModule {}
