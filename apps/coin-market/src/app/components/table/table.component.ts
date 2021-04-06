import {
    AfterViewInit,
    Component,
    DoCheck,
    OnInit,
    ViewChild,
} from '@angular/core';
import { MarketsService } from '../../shared/services/markets.service';
import { MarketsDataSource } from '../../../assets/data/market-datasource';
import { MatPaginator } from '@angular/material//paginator';
import { tap } from 'rxjs/operators';
import { Market } from '../../models/market';
@Component({
    selector: 'coin-market-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit, DoCheck {
    market: Market;
    dataSource: MarketsDataSource;
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
    @ViewChild(MatPaginator) paginator: MatPaginator;
    constructor(private marketsService: MarketsService) {}
    // getData() {
    //     this.marketsService.getMarkets().subscribe((data) => {
    //         for (let i = 0; i < 20; i++) {
    //             console.log(data[i]);
    //         }
    //     });
    // }
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

    ngOnInit() {
        this.dataSource = new MarketsDataSource(this.marketsService);
        this.dataSource.loadMarkets(this.market.pairId, '', 'asc', 0, 3);
    }
    ngAfterViewInit() {
        this.paginator.page.pipe(tap(() => this.loadMarketsPage())).subscribe();
    }
    ngDoCheck() {
        this.setConfidenceBackgroundColor();
    }
    loadMarketsPage() {
        this.dataSource.loadMarkets(
            this.market.pairId,
            '',
            'asc',
            this.paginator.pageIndex,
            this.paginator.pageSize
        );
    }
}

//----------------------------------------------------------------------------------
//     selectedValue = 'All';

//     pairs: Pair[] = [
//         { value: 0, viewValue: 'All' },
//         { value: 1, viewValue: 'USDT' },
//         { value: 2, viewValue: 'BUSD' },
//         { value: 3, viewValue: 'USD' },
//         { value: 4, viewValue: 'BTC' },
//         { value: 5, viewValue: 'JPY' },
//         { value: 6, viewValue: 'KRW' },
//         { value: 7, viewValue: 'EUR' },
//         { value: 8, viewValue: 'USDC' },
//         { value: 9, viewValue: 'UST' },
//         { value: 10, viewValue: 'GBP' },
//         { value: 11, viewValue: 'TRY' },
//     ];

//     //Pair'leri seçilene göre filtrele
//     filterPair(newItem: string) {
//         if (newItem === 'All') {
//             this.applyFilter('');
//         } else {
//             this.applyFilter('/' + newItem);
//         }
//     }

//     ngAfterViewInit() {
//         console.log('xx');
//         this.dataSource.sort = this.sort;
//         this.dataSource.paginator = this.paginator;
//     }
//     ngDoCheck() {
//         this.setConfidenceBackgroundColor();
//     }

//     applyFilter(filterValue: string) {
//         this.dataSource.filter = filterValue.trim().toLowerCase();
//     }
// }
