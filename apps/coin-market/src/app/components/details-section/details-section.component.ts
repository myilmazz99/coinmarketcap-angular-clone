import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Coin } from '../../models/coin.model';
import { CoinDetailsService } from '../../shared/services/coin-details.service';

@Component({
    selector: 'coin-market-details-section',
    styleUrls: ['./details-section.component.scss'],
    templateUrl: './details-section.component.html',
})
export class DetailsSectionComponent implements OnInit {
    coin$: Observable<Coin>;

    constructor(private coinDetailService: CoinDetailsService) {}

    ngOnInit(): void {
        this.coin$ = this.coinDetailService.coinItems$;
    }
}
