import { Component, ViewChild, AfterViewInit, DoCheck } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Pair } from '../../models/pair';
import { MarketsService } from 'apps/coin-market/src/app/shared/services/markets.service';
import { Observable } from 'rxjs';
import { Market } from 'apps/coin-market/src/app/models/market';
import { DataSource } from '@angular/cdk/collections';

@Component({
    selector: 'coin-market-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit, DoCheck {
    @ViewChild(MatSort) sort: MatSort;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    marketItems$: Observable<Market[]>;

    constructor(private marketService: MarketsService) {
        // this.marketItems$ = this.marketService.marketItems$;
    }

    public markets = this.marketService.getMarkets();
    dataSource = new MatTableDataSource(this.markets);

    selectedValue = 'All';

    pairs: Pair[] = [
        { value: 0, viewValue: 'All' },
        { value: 1, viewValue: 'USDT' },
        { value: 2, viewValue: 'BUSD' },
        { value: 3, viewValue: 'USD' },
        { value: 4, viewValue: 'BTC' },
        { value: 5, viewValue: 'JPY' },
        { value: 6, viewValue: 'KRW' },
        { value: 7, viewValue: 'EUR' },
        { value: 8, viewValue: 'USDC' },
        { value: 9, viewValue: 'UST' },
        { value: 10, viewValue: 'GBP' },
        { value: 11, viewValue: 'TRY' },
    ];

    displayedColumns: string[] = [
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

    //Pair'leri seçilene göre filtrele
    filterPair(newItem: string) {
        if (newItem === 'All') {
            this.applyFilter('');
        } else {
            this.applyFilter('/' + newItem);
        }
    }

    //Confidence background'u gelen data'ya göre değiştir
    setConfidenceBackgroundColor() {
        var bg = Array.from(
            document.getElementsByClassName(
                'confidence'
            ) as HTMLCollectionOf<HTMLElement>
        );
        bg.forEach((e) => {
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

    ngAfterViewInit() {
        console.log('xx');
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }
    ngDoCheck() {
        this.setConfidenceBackgroundColor();
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
