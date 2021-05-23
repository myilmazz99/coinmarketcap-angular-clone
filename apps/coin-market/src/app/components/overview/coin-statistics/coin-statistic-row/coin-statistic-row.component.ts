import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'coin-market-coin-statistic-row',
    templateUrl: './coin-statistic-row.component.html',
    styleUrls: ['./coin-statistic-row.component.scss'],
})
export class CoinStatisticRowComponent implements OnInit {
    @Input() title: string;
    @Input() value: number | number[] | string;
    @Input() isCurrency: boolean;
    @Input() dayTag: boolean;
    @Input() percentage: number;
    @Input() tooltip: string;
    @Input() date: Date;
    comparison: Comparison;

    ngOnInit(): void {
        if (this.percentage) this.comparison = new Comparison(this.percentage);
    }

    isArray() {
        return this.value instanceof Array;
    }

    isString() {
        return typeof this.value === 'string';
    }

    handleComparisonClass() {
        return {
            'comparison--up': this.percentage > 0,
            'comparison--down': this.percentage < 0,
            'comparison--small': this.value,
        };
    }
}

class Comparison {
    icon?: 'expand_more' | 'expand_less';
    percentage?: number;

    constructor(percentage: number) {
        this.icon = percentage < 0 ? 'expand_more' : 'expand_less';
        this.percentage = percentage < 0 ? percentage * -1 : percentage;
    }
}
