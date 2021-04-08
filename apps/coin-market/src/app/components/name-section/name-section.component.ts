import { Component, OnInit } from '@angular/core';
import { Coin } from '../../models/coin';
import { CoinDetailsService } from "../../shared/services/coin-details.service";

@Component({
  selector: 'coin-market-name-section',
  templateUrl: './name-section.component.html',
  styleUrls: ['./name-section.component.scss'],
  providers: [ CoinDetailsService ]
})
export class NameSectionComponent implements OnInit {

  coin: Coin = new Coin({name: 'Bitcoin', shortName: 'BTC', rank: 1, watchlists: 834727});
  //coinItemList: 
  coinItemList: Coin[] = [];
  constructor(private coinDetailsService: CoinDetailsService) {
  }

  ngOnInit(): void {
    //this.coin;
    //this.getItem();
    //this.coinItemList = this.coinDetailsService.getItem();
    //this.coinItemList = this.coinDetailsService.getItem();
  }

  getItem(){ 
    //this.coinDetailsService.getItem()(data: Coin[])=>{
      //this.coinItemList = data;
    //};
  }

}
