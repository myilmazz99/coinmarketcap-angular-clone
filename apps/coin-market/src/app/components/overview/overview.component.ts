import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MarketList } from '../../models/market';
import { MarketsService } from '../../shared/services/markets.service';
import { TableComponent } from '../../shared/table/table.component';

@Component({
    selector: 'coin-market-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit, AfterViewInit {
    @ViewChild(TableComponent) table: TableComponent;

    dataSource: MatTableDataSource<MarketList>;

    constructor(private marketService: MarketsService) {}

    ngOnInit(): void {
        this.marketService.marketItems$.subscribe((m) => {
            this.dataSource = new MatTableDataSource<MarketList>();
            this.dataSource.data = m.slice(0, 5);
            this.dataSource.sort = this.table?.sort;
        });
    }

    ngAfterViewInit() {
        this.dataSource.sort = this.table?.sort;
    }
}
