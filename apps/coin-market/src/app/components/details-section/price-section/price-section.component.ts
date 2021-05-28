import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoinPrices } from '../../../models/coin-prices';
import { CoinDetailsService } from '../../../shared/services/coin-details.service';

@Component({
    selector: 'coin-market-price-section',
    templateUrl: './price-section.component.html',
    styleUrls: ['./price-section.component.scss'],
})
export class PriceSectionComponent implements OnInit {
    coinPrice$: Observable<CoinPrices>;
    isDisplay = false;

    isDisplayTime() {
        this.isDisplay = !this.isDisplay;
    }

    constructor(private coinDetailsService: CoinDetailsService) {}

    ngOnInit(): void {
        this.coinPrice$ = this.coinDetailsService.coinPrice$;
    }
}
