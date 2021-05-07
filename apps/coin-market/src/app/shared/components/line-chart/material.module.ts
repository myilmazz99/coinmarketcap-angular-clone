import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

const modules: any[] = [
    MatIconModule,
    MatMenuModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatButtonModule,
];

@NgModule({
    imports: [...modules],
    exports: [...modules],
})
export class MaterialModule {}
