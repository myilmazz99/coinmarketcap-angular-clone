import { Component, OnInit } from '@angular/core';
import { Coin } from '../../models/coin';

@Component({
  selector: 'coin-market-stats-section',
  templateUrl: './stats-section.component.html',
  styleUrls: ['./stats-section.component.scss']
})
export class StatsSectionComponent implements OnInit {

  coin: Coin = new Coin({shortName: 'BTC', marketCapPrice: '1,028,360,948,721', marketCapPercentage: '3.27', fullyMarketCapPrice: '1,156,036,894,571', fullyMarketCapPercentage: '3.28', volumePrice: '1,028,360,948', volumePercentage: '8.27', volumeMarketCapNumber: '0.04989', circulatingSupplyNumber: '18,666,012', circulatingSupplyPercentage: '89', maxSupplyNumber: '21,000,000', totalSupplyNumber:'18,666,012'});

  constructor() { }

  ngOnInit(): void {
  }

}
