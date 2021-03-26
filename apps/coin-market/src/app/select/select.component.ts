import { Component, Output, EventEmitter } from "@angular/core";

interface Pair {
  viewValue: string;
  value: number;
}
@Component({
  selector: "coin-market-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss"],
})
export class SelectComponent {
  selectedValue = "All";
  pairs: Pair[] = [
    { value: 0, viewValue: "All" },
    { value: 1, viewValue: "USDT" },
    { value: 2, viewValue: "BUSD" },
    { value: 3, viewValue: "USD" },
    { value: 4, viewValue: "BTC" },
    { value: 5, viewValue: "JPY" },
    { value: 6, viewValue: "KRW" },
    { value: 7, viewValue: "EUR" },
    { value: 8, viewValue: "USDC" },
    { value: 9, viewValue: "UST" },
    { value: 10, viewValue: "GBP" },
    { value: 11, viewValue: "TRY" },
  ];

  @Output() newItemEvent = new EventEmitter<string>();
  showSelectValue(value) {
    this.newItemEvent.emit(value);
  }
}
