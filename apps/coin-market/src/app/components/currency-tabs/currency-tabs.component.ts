import { Component } from '@angular/core';

@Component({
    selector: 'coin-market-currency-tabs',
    templateUrl: './currency-tabs.component.html',
    styleUrls: ['./currency-tabs.component.scss'],
})
export class CurrencyTabsComponent {
    links = [
        { text: 'Overview', routerLink: '' },
        { text: 'Markets', routerLink: 'markets' },
        { text: 'Historical Data', routerLink: 'historical-data' },
    ];
    selected: string = this.links[0].routerLink;

    onClick(event: string) {
        this.selected = event;
    }
}
