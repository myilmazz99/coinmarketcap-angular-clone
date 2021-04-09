import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Coin } from "../../models/coin";
import { CoinService } from "../../shared/services/coin.service";

@Component({
  selector: "coin-converter",
  templateUrl: "./coin-converter.component.html",
  styleUrls: ["./coin-converter.component.scss"],
})
export class CoinConverterComponent {
  coin$: Observable<Coin>;
  coinAmount = 0;
  usdAmount = 0;

  constructor(private coinService: CoinService) {
    this.coin$ = this.coinService.coin$;
  }

  onFocus(e: any, input: HTMLInputElement) {
    input.value = "";
    e.target.value = "";
  }
}
