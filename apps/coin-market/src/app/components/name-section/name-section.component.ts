import { Component, OnInit } from '@angular/core';
import { Coin } from '../../models/coin';

@Component({
  selector: 'coin-market-name-section',
  templateUrl: './name-section.component.html',
  styleUrls: ['./name-section.component.scss']
})
export class NameSectionComponent implements OnInit {
  coin: Coin = new Coin({name: 'Bitcoin', symbol: 'BTC'});
  constructor() { }

  ngOnInit(): void {
  }

}
