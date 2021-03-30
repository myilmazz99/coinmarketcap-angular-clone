import { NgModule } from "@angular/core";
import { MatSliderModule } from "@angular/material/slider";
import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";
import { LayoutModule } from "@angular/cdk/layout";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatMenuModule } from "@angular/material/menu";

const modules: any[] = [
  MatSliderModule,
  MatButtonModule,
  MatGridListModule,
  LayoutModule,
  MatCardModule,
  MatIconModule,
  MatCheckboxModule,
  MatProgressBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatMenuModule,
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class MaterialModule {}
