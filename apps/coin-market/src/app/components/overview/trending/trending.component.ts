import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Coin } from '../../../models/coin.model';
import { TrendingListService } from '../../../shared/services/trending-list.service';

@Component({
    selector: 'coin-market-trending',
    templateUrl: './trending.component.html',
    styleUrls: ['./trending.component.scss'],
})
export class TrendingComponent {
    trendingCoins$: Observable<Coin[]>;

    constructor(private trendingListService: TrendingListService) {
        this.trendingCoins$ = trendingListService.trendingCoins$;
    }
}
