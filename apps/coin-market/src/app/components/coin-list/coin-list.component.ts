import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { CoinListDatasource } from 'apps/coin-market/src/assets/data/datasource/coin-list-datasource';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CoinList } from '../../models/coin-list.model';
import { CoinListService } from '../../shared/services/coin-list.service';

@Component({
    selector: 'coin-market-coin-list',
    templateUrl: './coin-list.component.html',
    styleUrls: ['./coin-list.component.scss'],
})
export class CoinListComponent implements OnInit, AfterViewInit {
    coinItems$: Observable<CoinList[]>;
    dataSource: CoinListDatasource;
    @ViewChild(MatSort) sort: MatSort;

    displayedColumns = [
        'coin_rank',
        'name',
        'price',
        'trend_24h',
        'trend_7d',
        'market_cap',
        'circulating_supply',
    ];

    constructor(private coinListService: CoinListService) {}

    ngOnInit(): void {
        this.dataSource = new CoinListDatasource(this.coinListService);
    }

    ngAfterViewInit() {
        this.sort.sortChange
            .pipe(
                tap(() => {
                    this.coinListService.sortEvent.next(this.sort.active);
                    this.coinListService.sortOrder.next(this.sort.direction);
                    this.coinListService.sortCoins();
                })
            )
            .subscribe();
    }
}
