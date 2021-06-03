import { Component, Input } from '@angular/core';
import { Coin } from '../../../models/coin.model';

@Component({
    selector: 'coin-market-price-section',
    templateUrl: './price-section.component.html',
    styleUrls: ['./price-section.component.scss'],
})
export class PriceSectionComponent {
    @Input() coin: Coin;
}
