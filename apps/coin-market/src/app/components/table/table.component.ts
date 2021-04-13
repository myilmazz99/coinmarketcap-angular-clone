import {
    AfterViewInit,
    Component,
    DoCheck,
    Input,
    OnInit,
    ViewChild,
} from '@angular/core';
import { MarketsService } from '../../shared/services/markets.service';
import { MarketsDataSource } from '../../../assets/data/market-datasource';
import { MatPaginator } from '@angular/material//paginator';
import { tap } from 'rxjs/operators';
import { Market } from '../../models/market';
import { MatSort } from '@angular/material/sort';
import { Pair } from '../../models/pair';
import { MatSelect } from '@angular/material/select';

@Component({
    selector: 'coin-market-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit, DoCheck {
    market: Market;
    dataSource: MarketsDataSource;
    dataLength;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatSelect) select: MatSelect;

    displayedColumns = [
        'position',
        'source',
        'pairs',
        'price',
        'volume',
        'volumePercentage',
        'liquidity',
        'confidence',
        'updated',
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
        this.dataLength = marketsService.filterPair();
    }

    //Confidence background'u gelen data'ya göre değiştir
    setConfidenceBackgroundColor() {
        let background = Array.from(
            document.getElementsByClassName(
                'confidence'
            ) as HTMLCollectionOf<HTMLElement>
        );
        background.forEach((e) => {
            switch (e.innerText) {
                case 'Low':
                    e.style.background = 'rgb(234, 57, 67)';
                    e.style.border = '1px solid rgb(234, 57, 67)';
                    break;
                case 'Moderate':
                    e.style.background = 'rgb(245, 163, 65)';
                    e.style.border = '1px solid rgb(245, 163, 65)';
                    break;
                case 'High':
                    e.style.background = 'rgb(22, 199, 132)';
                    e.style.border = '1px solid rgb(22, 199, 132)';
                    break;
            }
        });
    }

    ngOnInit() {
        this.dataSource = new MarketsDataSource(this.marketsService);
        this.dataSource.loadMarkets();
    }

    ngAfterViewInit() {
        this.paginator.page
            .pipe(
                tap(() => {
                    this.marketsService.pageNumber.next(
                        this.paginator.pageIndex
                    );
                    this.marketsService.pageSize.next(this.paginator.pageSize);

                    this.loadMarketsPage();
                })
            )
            .subscribe();
        this.select.selectionChange
            .pipe(
                tap(() => {
                    this.marketsService.selection.next(this.selectedValue);
                    this.loadMarketsPage();
                })
            )
            .subscribe();
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

    ngDoCheck() {
        this.setConfidenceBackgroundColor();
        this.dataLength = this.marketsService.filterPair().length;
    }

    loadMarketsPage() {
        this.dataSource.loadMarkets();
    }
}
