import { Component } from "@angular/core";
import { numToUsd } from "../../helpers/numToUsd";

@Component({
  selector: "coin-converter",
  templateUrl: "./coin-converter.component.html",
  styleUrls: ["./coin-converter.component.scss"],
})
export class CoinConverterComponent {
  coinAmount = 0;
  usdAmount = 0;
  exchangeRate = 52556.41;
  coin: string;
  usd: string;

  constructor() {}

  onFocus(e: any, input: HTMLInputElement) {
    input.value = "";
    e.target.value = "";
  }

  onChange(input: HTMLInputElement) {
    if (input.name === "coin")
      this.usd = numToUsd().format(this.coinAmount * this.exchangeRate);
    else this.coin = numToUsd().format(this.usdAmount / this.exchangeRate);
  }
}
