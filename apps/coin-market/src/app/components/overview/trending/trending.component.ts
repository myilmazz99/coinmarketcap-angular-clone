import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Coin } from '../../../models/coin';
import { OverviewService } from '../../../shared/services/overview.service';

@Component({
    selector: 'coin-market-trending',
    templateUrl: './trending.component.html',
    styleUrls: ['./trending.component.scss'],
})
export class TrendingComponent {
    trendingCoins$: Observable<Coin[]>;

    constructor(private overviewService: OverviewService) {
        this.trendingCoins$ = overviewService.trendingCoins$;
    }
}
