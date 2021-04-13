import { Component, Input } from '@angular/core';

@Component({
    selector: 'coin-statistic-row',
    templateUrl: './coin-statistic-row.component.html',
    styleUrls: ['./coin-statistic-row.component.scss'],
})
export class CoinStatisticRowComponent {
    @Input() title: string;
    @Input() value: number | number[] | string;
    @Input() isCurrency: boolean;
    @Input() dayTag: boolean;
    @Input() percentage: number;
    @Input() tooltip: string;

    isArray() {
        return this.value instanceof Array;
    }

    isString() {
        return typeof this.value === 'string';
    }

    handleComparisonClass(val: number) {
        return {
            'comparison--up': val > 0,
            'comparison--down': val < 0,
            'comparison--small': this.value,
        };
    }
}
