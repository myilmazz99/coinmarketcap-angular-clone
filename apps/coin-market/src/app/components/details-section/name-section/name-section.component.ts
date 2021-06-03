import { Component, Input } from '@angular/core';
import { Coin } from '../../../models/coin.model';

@Component({
    selector: 'coin-market-name-section',
    templateUrl: './name-section.component.html',
    styleUrls: ['./name-section.component.scss'],
})
export class NameSectionComponent {
    @Input() coin: Coin;
}
