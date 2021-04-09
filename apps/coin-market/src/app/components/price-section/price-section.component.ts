import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
//import { Coin } from '../../models/coin';
import { CoinPrices } from "../../models/coin-prices";
import { CoinDetailsService } from "../../shared/services/coin-details.service";

@Component({
  selector: 'coin-market-price-section',
  templateUrl: './price-section.component.html',
  styleUrls: ['./price-section.component.scss']
})
export class PriceSectionComponent implements OnInit{
  //percentage: number;
  //coin: Coin = new Coin({name: 'Bitcoin', shortName: 'BTC', price: 59959.44, pricePercentage: 1.24, priceStatus: 2.16, priceSideValue: 33.49, priceSideName: 'ETH', priceLow: 50870.59, priceHigh: 55210.15});
  
  coinPrice$: Observable<CoinPrices>;

  constructor(private coinDetailsService: CoinDetailsService) {}

  ngOnInit(): void {
    this.coinPrice$ = this.coinDetailsService.coinPrice$;
  }

}
