import { Component, Input } from '@angular/core';
import { Coin } from '../../../models/coin.model';

@Component({
    selector: 'coin-market-stats-section',
    templateUrl: './stats-section.component.html',
    styleUrls: ['./stats-section.component.scss'],
})
export class StatsSectionComponent {
    @Input() coin: Coin;
}
