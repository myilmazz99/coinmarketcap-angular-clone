import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

const modules: any[] = [
    MatIconModule,
    MatMenuModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatButtonModule,
    MatNativeDateModule,
];

@NgModule({
    imports: [...modules],
    exports: [...modules],
})
export class MaterialModule {}
