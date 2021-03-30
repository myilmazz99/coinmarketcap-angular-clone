import { Component, Output, EventEmitter, Input } from "@angular/core";
import { Pair } from "../models/pair";

@Component({
  selector: "coin-market-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss"],
})
export class SelectComponent {
  @Input() selectedValue: Pair;
  @Input() pairs: Pair[];

  @Output() newItemEvent = new EventEmitter<string>();
  showSelectValue(value) {
    this.newItemEvent.emit(value);
  }
}
