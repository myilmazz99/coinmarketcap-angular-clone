import {
    AfterViewInit,
    Component,
    Input,
    OnInit,
    ViewChild,
} from '@angular/core';
import { MarketsService } from '../../shared/services/markets.service';
import { MarketsDataSource } from '../../../assets/data/market-datasource';
import { MatPaginator } from '@angular/material//paginator';
import { tap } from 'rxjs/operators';
import { MatSort } from '@angular/material/sort';
import { Pair } from '../../models/pair';
import { MatSelect } from '@angular/material/select';
import { Observable } from 'rxjs';

@Component({
    selector: 'coin-market-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
    dataSource: MarketsDataSource;
    dataLength$: Observable<number>;

    @Input() showPaginator: boolean = true;
    @Input() showPairs: boolean = true;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatSelect) select: MatSelect;

    displayedColumns = [
        'market_id',
        'market_name',
        'pairs',
        'price',
        'volume',
        'volume_percentage',
        'liquidity',
    ];
    selectedValue = 'All';

    pairs: Pair[] = [
        { viewValue: 'All' },
        { viewValue: 'USDT' },
        { viewValue: 'BUSD' },
        { viewValue: 'USD' },
        { viewValue: 'BTC' },
        { viewValue: 'JPY' },
        { viewValue: 'KRW' },
        { viewValue: 'EUR' },
        { viewValue: 'USDC' },
        { viewValue: 'UST' },
        { viewValue: 'GBP' },
        { viewValue: 'TRY' },
    ];

    constructor(private marketsService: MarketsService) {
        this.dataLength$ = marketsService.dataLength$;
    }

    ngOnInit() {
        this.dataSource = new MarketsDataSource(this.marketsService);
        this.dataSource.loadMarkets();
    }

    ngAfterViewInit() {
        if (this.showPaginator === true) {
            //  Paginate just for the table in the market tab
            this.paginator.page
                .pipe(
                    tap(() => {
                        this.marketsService.pageNumber.next(
                            this.paginator.pageIndex
                        );
                        this.marketsService.pageSize.next(
                            this.paginator.pageSize
                        );

                        this.loadMarketsPage();
                    })
                )
                .subscribe();
        }
        if (this.showPairs === true) {
            // Filter just for the table in the market tab
            this.select.selectionChange
                .pipe(
                    tap(() => {
                        this.marketsService.selection.next(this.selectedValue);
                        this.paginator.firstPage();
                        this.loadMarketsPage();
                    })
                )
                .subscribe();
        }
        if (this.showPairs === true) {
            // Call usual sort method for the table in the market tab
            this.sort.sortChange
                .pipe(
                    tap(() => {
                        this.marketsService.sortOrder.next(this.sort.direction);
                        this.marketsService.sortEvent.next(this.sort.active);
                        this.loadMarketsPage();
                    })
                )
                .subscribe();
        }
        if (this.showPairs === false) {
            // Call different sort method for the table in the "overview" tab
            this.sort.sortChange
                .pipe(
                    tap(() => {
                        this.marketsService.sortOrder.next(this.sort.direction);
                        this.marketsService.sortEvent.next(this.sort.active);
                        this.marketsService.sortScreenItems();
                    })
                )
                .subscribe();
        }
    }

    loadMarketsPage() {
        this.dataSource.loadMarkets();
    }
}
