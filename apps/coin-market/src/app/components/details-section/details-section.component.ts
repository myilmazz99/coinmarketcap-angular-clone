import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

    constructor(
        private coinDetailService: CoinDetailsService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        //? uncomment after backend implementation
        // this.route.params.subscribe((params) => {
        //     this.coinDetailService.getCoin(params.coin_id);
        //     this.coin$ = this.coinDetailService.coinItems$;
        // });

        //? delete after backend implementation
        this.coin$ = this.coinDetailService.coinItems$;
    }
}
