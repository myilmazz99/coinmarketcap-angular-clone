import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Coin } from '../../models/coin.model';
import { CoinService } from '../../shared/services/coin.service';

@Component({
    selector: 'coin-market-details-section',
    styleUrls: ['./details-section.component.scss'],
    templateUrl: './details-section.component.html',
})
export class DetailsSectionComponent {
    coin$: Observable<Coin>;
    subscriptions: Subscription[] = [];

    constructor(private coinService: CoinService) {
        this.coin$ = this.coinService.coin$;
    }
}
