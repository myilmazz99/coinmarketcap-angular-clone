import { CoinService } from './../../../shared/services/coin.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Coin } from '../../../models/coin.model';
import { OverviewService } from '../../../shared/services/overview.service';

@Component({
    selector: 'coin-market-coin-converter',
    templateUrl: './coin-converter.component.html',
    styleUrls: ['./coin-converter.component.scss'],
})
export class CoinConverterComponent {
    coin$: Observable<Coin>;
    coinAmount: number;
    usdAmount: number;

    constructor(
        private overviewService: OverviewService,
        private coinService: CoinService
    ) {
        this.coin$ = this.coinService.coin$;
    }

    onFocus(e: any, input: HTMLInputElement) {
        input.value = '';
        e.target.value = '';
    }
}
