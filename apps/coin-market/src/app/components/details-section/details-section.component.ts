import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Coin } from '../../models/coin.model';
import { CoinDetailsService } from '../../shared/services/coin-details.service';

@Component({
    selector: 'coin-market-details-section',
    styleUrls: ['./details-section.component.scss'],
    templateUrl: './details-section.component.html',
})
export class DetailsSectionComponent implements OnDestroy {
    coin$: Observable<Coin>;
    subscriptions: Subscription[] = [];

    constructor(
        private coinDetailService: CoinDetailsService,
        private route: ActivatedRoute
    ) {
        const routeSubscription = this.route.params.subscribe((params) => {
            this.coinDetailService.getCoin(params.coin_id);
            this.coin$ = this.coinDetailService.coinItems$;
        });

        this.subscriptions.push(routeSubscription);
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((i) => i.unsubscribe());
    }
}
