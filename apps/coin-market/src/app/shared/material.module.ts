import { NgModule } from "@angular/core";
import { MatSliderModule } from "@angular/material/slider";
import { MatButtonModule } from "@angular/material/button";

const modules: any[] = [MatSliderModule, MatButtonModule];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class MaterialModule {}
