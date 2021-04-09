import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoinStatistics } from '../../models/coin-statistics.model';
import { OverviewService } from '../../shared/services/overview.service';

@Component({
    selector: 'coin-statistics',
    templateUrl: './coin-statistics.component.html',
    styleUrls: ['./coin-statistics.component.scss'],
})
export class CoinStatisticsComponent implements OnInit {
    coinStatistics$: Observable<CoinStatistics>;
    expanded: boolean = false;

    constructor(private overviewService: OverviewService) {}

    ngOnInit(): void {
        this.coinStatistics$ = this.overviewService.coinStatistics$;
    }
}
