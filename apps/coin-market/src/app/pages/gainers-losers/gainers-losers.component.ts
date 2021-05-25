import { CurrencyPipe } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { GainersLosers } from '../../models/gainers-losers';
import { GainersLosersService } from '../../shared/services/gainers-losers.service';

@Component({
    selector: 'coin-market-gainers-losers',
    templateUrl: './gainers-losers.component.html',
    styleUrls: ['./gainers-losers.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class GainersLosersComponent implements OnInit {
    gainers$: Observable<GainersLosers[]>;
    losers$: Observable<GainersLosers[]>;
    gridOptions = {
        alignedGrids: [],
        defaultColDef: {
            sortable: true,
        },
    };

    columnDefs = [
        {
            headerName: '#',
            field: 'rank',
        },
        {
            headerName: 'Name',
            field: 'coin_name',

            cellRenderer: function (params) {
                const { coin_name, coin_id, coin_icon } = params.data;
                let newLink = `
                <div class="coin-icon-name-id">
                    <img class="coin-icon" src="${coin_icon}" alt="..."/>
                    <div class="coin-name" >${coin_name}</div>
                    <div class="coin-id">${coin_id}</div>
                </div>`;
                return newLink;
            },
        },
        {
            headerName: 'Price',
            field: 'price',

            cellRenderer: (params) => {
                const price = this.currencyPipe.transform(
                    params.data.price,
                    'USD',
                    'symbol',
                    '4.0-6'
                );
                return `${price}`;
            },
        },
    ];
    constructor(
        private gainersLosersService: GainersLosersService,
        private currencyPipe: CurrencyPipe
    ) {}

    ngOnInit() {
        this.gainers$ = this.gainersLosersService.gainers$;
        this.losers$ = this.gainersLosersService.losers$;
    }
}
