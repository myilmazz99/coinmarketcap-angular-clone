import { Component, Input } from '@angular/core';
import { Coin } from '../../../models/coin.model';

@Component({
    selector: 'coin-market-buy-add-button-section',
    templateUrl: './buy-add-button-section.component.html',
    styleUrls: ['./buy-add-button-section.component.scss'],
})
export class BuyAddButtonSectionComponent {
    @Input() coin: Coin;
}
