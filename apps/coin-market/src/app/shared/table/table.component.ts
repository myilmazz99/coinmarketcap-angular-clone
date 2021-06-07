import {
    AfterViewChecked,
    Component,
    EventEmitter,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material//paginator';
import { MatSort } from '@angular/material/sort';
import { Pair } from '../../models/pair';
import { MatSelect } from '@angular/material/select';

@Component({
    selector: 'coin-market-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewChecked {
    @ViewChild('marketsTable') matTable: any;
    @Input() showPaginator = true;
    @Input() showPairs = true;
    @Input() dataSource: any;
    @Input() dataLength: number;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatSelect) select: MatSelect;
    @Output() selectedEvent = new EventEmitter<string>(null);

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

    onSelectChange(val: string) {
        this.selectedEvent.emit(val);
    }

    ngAfterViewChecked() {
        this.matTable?.updateStickyColumnStyles();
    }
}
