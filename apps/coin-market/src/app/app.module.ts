import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyPipe, DecimalPipe, registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import tr from '@angular/common/locales/tr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { MaterialModule } from './shared/material.module';
import { SwitchThemeBtnComponent } from './components/switch-theme-btn/switch-theme-btn.component';

registerLocaleData(tr);
@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        ScrollTopComponent,
        SwitchThemeBtnComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        MaterialModule,
    ],
    providers: [CurrencyPipe, DecimalPipe],
    bootstrap: [AppComponent],
})
export class AppModule {}
