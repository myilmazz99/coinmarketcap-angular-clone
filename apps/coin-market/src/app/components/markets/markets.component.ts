import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MarketList } from '../../models/market';
import { MarketsService } from '../../shared/services/markets.service';
import { TableComponent } from '../../shared/table/table.component';
import { MarketsDataSource } from '../../../assets/data/market-datasource';

@Component({
    selector: 'coin-market-markets',
    templateUrl: './markets.component.html',
    styleUrls: ['./markets.component.scss'],
})
export class MarketsComponent implements OnInit, AfterViewInit {
    @ViewChild(TableComponent) table: TableComponent;
    selectedValue = 'All';
    dataLength$: Observable<number>;
    dataSource: MarketsDataSource;

    constructor(private marketsService: MarketsService) {
        this.dataLength$ = marketsService.dataLength$;
    }

    ngOnInit() {
        this.dataSource = new MarketsDataSource(this.marketsService);
        this.dataSource.loadMarkets();
    }

    ngAfterViewInit() {
        this.table.paginator.page
            .pipe(
                tap(() => {
                    this.marketsService.pageNumber.next(
                        this.table.paginator.pageIndex
                    );
                    this.marketsService.pageSize.next(
                        this.table.paginator.pageSize
                    );

                    this.loadMarketsPage();
                })
            )
            .subscribe();

        this.table.paginator._intl.itemsPerPageLabel = 'Show Rows';

        this.table.select.selectionChange
            .pipe(
                tap(() => {
                    this.marketsService.selection.next(this.selectedValue);
                    this.table.paginator.firstPage();
                    this.loadMarketsPage();
                })
            )
            .subscribe();

        this.table.sort.sortChange
            .pipe(
                tap(() => {
                    this.marketsService.sortOrder.next(
                        this.table.sort.direction
                    );
                    this.marketsService.sortEvent.next(this.table.sort.active);
                    this.loadMarketsPage();
                })
            )
            .subscribe();
    }

    loadMarketsPage() {
        this.dataSource.loadMarkets();
    }

    onSelectChange(val: string) {
        this.selectedValue = val;
    }
}
