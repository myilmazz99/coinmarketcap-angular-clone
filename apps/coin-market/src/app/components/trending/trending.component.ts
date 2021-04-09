import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Coin } from "../../models/coin";
import { CoinService } from "../../shared/services/coin.service";

@Component({
  selector: "trending",
  templateUrl: "./trending.component.html",
  styleUrls: ["./trending.component.scss"],
})
export class TrendingComponent {
  trendingCoins$: Observable<Coin[]>;
  coins$: Observable<Coin>;

  constructor(private coinService: CoinService) {
    this.trendingCoins$ = coinService.getTrendingCoins();
    this.coins$ = this.coinService.coin$;

  }
}
