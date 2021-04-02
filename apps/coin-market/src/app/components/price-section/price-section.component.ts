import { Component, OnInit } from '@angular/core';
import { Coin } from '../../models/coin';

@Component({
  selector: 'coin-market-price-section',
  templateUrl: './price-section.component.html',
  styleUrls: ['./price-section.component.scss']
})
export class PriceSectionComponent implements OnInit{
  //percentage: number;
  coin: Coin = new Coin({name: 'Bitcoin', shortName: 'BTC', price: '59,959.44', pricePercentage: '1.24', priceStatus: '2.16', priceSideValue: '33.49', priceSideName: 'ETH', priceLow: '50,870.59', priceHigh: '55,210.15'});
  
  constructor(){
  }

  ngOnInit(): void {
  }

}
