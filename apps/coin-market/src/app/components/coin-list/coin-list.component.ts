import {
    AfterViewInit,
    Component,
    OnInit,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { CoinListDatasource } from 'apps/coin-market/src/assets/data/datasource/coin-list-datasource';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CoinListService } from '../../shared/services/coin-list.service';

@Component({
    selector: 'coin-market-coin-list',
    templateUrl: './coin-list.component.html',
    styleUrls: ['./coin-list.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class CoinListComponent implements OnInit, AfterViewInit {
    dataSource: CoinListDatasource;
    dataLength$: Observable<number>;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSelect) select: MatSelect;

    displayedColumns = [
        'coin_rank',
        'name',
        'price',
        'trend_24h',
        'trend_7d',
        'market_cap',
        'circulating_supply',
        'more_vert',
    ];
    selectedValue = 20;

    rows = [{ value: 10 }, { value: 15 }, { value: 20 }];

    constructor(private coinListService: CoinListService) {
        this.dataLength$ = coinListService.dataLength$;
    }

    ngOnInit(): void {
        this.dataSource = new CoinListDatasource(this.coinListService);
        this.dataSource.loadCoins();
    }

    ngAfterViewInit() {
        this.sort.sortChange
            .pipe(
                tap(() => {
                    this.coinListService.sortEvent.next(this.sort.active);
                    this.coinListService.sortOrder.next(this.sort.direction);
                    this.dataSource.loadCoins();
                })
            )
            .subscribe();

        this.paginator.page
            .pipe(
                tap(() => {
                    this.coinListService.pageNumber.next(
                        this.paginator.pageIndex
                    );
                    this.coinListService.pageSize.next(this.paginator.pageSize);

                    this.dataSource.loadCoins();
                })
            )
            .subscribe();

        this.select.selectionChange
            .pipe(
                tap(() => {
                    this.coinListService.pageSize.next(this.selectedValue);
                    this.dataSource.loadCoins();
                })
            )
            .subscribe();
        this.paginator._intl.itemsPerPageLabel = 'Show Rows';
    }
}
