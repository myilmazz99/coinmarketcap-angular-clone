import { Component, Input } from '@angular/core';
import { Coin } from '../../../models/coin.model';

@Component({
    selector: 'coin-market-link-section',
    templateUrl: './link-section.component.html',
    styleUrls: ['./link-section.component.scss'],
})
export class LinkSectionComponent {
    @Input() coin: Coin;
}
