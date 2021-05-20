import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoinList } from '../../models/coin-list.model';
import { CoinListService } from '../../shared/services/coin-list.service';

@Component({
    selector: 'coin-market-coin-list',
    templateUrl: './coin-list.component.html',
    styleUrls: ['./coin-list.component.scss'],
})
export class CoinListComponent implements OnInit {
    coinItems$: Observable<CoinList[]>;
    displayedColumns = [
        'coin_id',
        'name',
        'price',
        'trend_24h',
        'trend_7d',
        'market_cap',
        'circulating_supply',
    ];

    constructor(private coinListService: CoinListService) {}

    ngOnInit(): void {
        this.coinItems$ = this.coinListService.coinItems$;
    }
}
