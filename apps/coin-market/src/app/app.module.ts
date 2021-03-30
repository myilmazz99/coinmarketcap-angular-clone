import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TableComponent } from "./table/table.component";
import { MatTableModule } from "@angular/material/table";
import { SelectComponent } from "./select/select.component";
import { MatSelectModule } from "@angular/material/select";
import { MatSortModule } from "@angular/material/sort";
import { FormsModule } from "@angular/forms";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTooltipModule } from "@angular/material/tooltip";
import { HttpClientModule } from "@angular/common/http";
import { MarketsService } from "./shared/services/markets.service";

@NgModule({
  declarations: [AppComponent, TableComponent, SelectComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSelectModule,
    MatSortModule,
    FormsModule,
    MatPaginatorModule,
    MatTooltipModule,
    HttpClientModule,
  ],
  providers: [MarketsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
