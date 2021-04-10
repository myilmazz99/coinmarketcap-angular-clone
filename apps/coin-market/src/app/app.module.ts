import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { MarketsService } from './shared/services/markets.service';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
    providers: [CurrencyPipe, MarketsService, DecimalPipe],
    bootstrap: [AppComponent],
})
export class AppModule {}
