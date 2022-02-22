import { CoinService } from './../../shared/services/coin.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Coin } from '../../models/coin.model';

@Component({
    selector: 'coin-market-currency',
    templateUrl: './currency.component.html',
    styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent implements OnInit, OnDestroy {
    coin$: Observable<Coin>;

    _unsubscribeAll = new Subject();

    constructor(
        private activatedRoute: ActivatedRoute,
        private coinService: CoinService
    ) {
        this.coin$ = this.coinService.coin$;
    }

    ngOnInit(): void {
        this.activatedRoute.paramMap
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((paramMap) => {
                const coinId = paramMap.get('coin_id');

                this.coinService.getCoin(coinId);
            });
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
