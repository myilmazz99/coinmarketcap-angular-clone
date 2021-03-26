import { Component } from "@angular/core";

@Component({
  selector: "vote-coin",
  templateUrl: "./vote-coin.component.html",
  styleUrls: ["./vote-coin.component.scss"],
})
export class VoteCoinComponent {
  didVote = false;
  voted: number;
  good = 72;

  vote(value: number) {
    this.didVote = true;
    this.voted = value;

    if (value < 0) this.good--;
    else this.good++;
  }
}
