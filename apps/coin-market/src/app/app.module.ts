import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyPipe, DecimalPipe, registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { tr_TR } from 'ng-zorro-antd/i18n';
import tr from '@angular/common/locales/tr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

registerLocaleData(tr);
@NgModule({
    declarations: [AppComponent, NavbarComponent, FooterComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
    ],
    providers: [
        CurrencyPipe,
        DecimalPipe,
        { provide: NZ_I18N, useValue: tr_TR },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
