import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OverviewPriceStatistics } from '../../../models/overview-price-statistics.model';
import { OverviewService } from '../../../shared/services/overview.service';

@Component({
    selector: 'coin-market-coin-statistics',
    templateUrl: './coin-statistics.component.html',
    styleUrls: ['./coin-statistics.component.scss'],
})
export class CoinStatisticsComponent implements OnInit {
    coinStatistics$: Observable<OverviewPriceStatistics>;
    expanded = false;

    constructor(private overviewService: OverviewService) {}

    ngOnInit(): void {
        this.coinStatistics$ = this.overviewService.coinStatistics$;
    }
}
