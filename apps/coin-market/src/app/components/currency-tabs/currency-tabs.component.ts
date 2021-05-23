import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'coin-market-currency-tabs',
    templateUrl: './currency-tabs.component.html',
    styleUrls: ['./currency-tabs.component.scss'],
})
export class CurrencyTabsComponent implements OnInit {
    links = [
        { text: 'Overview', routerLink: '' },
        { text: 'Markets', routerLink: 'markets' },
        { text: 'Historical Data', routerLink: 'historical-data' },
    ];
    selected = '';

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.matchRoute();

        this.router.events.subscribe((e) => {
            if (e instanceof NavigationEnd) this.matchRoute();
        });
    }

    matchRoute() {
        for (const l of this.links) {
            if (
                l.routerLink.length > 0 &&
                this.router.url.match('/' + l.routerLink)
            ) {
                this.selected = l.routerLink;
                break;
            }
        }
    }

    onClick(event: string) {
        this.selected = event;
    }
}
