import { Component, OnInit } from '@angular/core';
import { Coin } from '../../models/coin';

@Component({
  selector: 'coin-market-stats-section',
  templateUrl: './stats-section.component.html',
  styleUrls: ['./stats-section.component.scss']
})
export class StatsSectionComponent implements OnInit {

  coin: Coin = new Coin({shortName: 'BTC', marketCapPrice: 1028360948721, marketCapPercentage: 3.27, fullyMarketCapPrice: 1156036894571, fullyMarketCapPercentage: 3.28, volumePrice: 1028360948, volumePercentage: 8.27, volumeMarketCapNumber: 0.04989, circulatingSupplyNumber: 18666012, circulatingSupplyPercentage: 89, maxSupplyNumber: 21000000, totalSupplyNumber: 18666012});

  constructor() { }

  ngOnInit(): void {
  }

}
