import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Coin } from '../../../models/coin';
import { CoinDetailsService } from '../../../shared/services/coin-details.service';

@Component({
    selector: 'coin-market-name-section',
    templateUrl: './name-section.component.html',
    styleUrls: ['./name-section.component.scss'],
    providers: [CoinDetailsService],
})
export class NameSectionComponent implements OnInit {
    coin$: Observable<Coin>;

    constructor(private coinDetailsService: CoinDetailsService) {}

    ngOnInit(): void {
        this.coin$ = this.coinDetailsService.coinItems$;
    }
}
