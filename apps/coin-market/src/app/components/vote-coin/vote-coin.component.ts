import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Coin } from "../../models/coin";
import { VoteCoin } from "../../models/voteCoin.model";
import { VoteCoinData } from "../../models/voteCoinData.model";
import { CoinService } from "../../shared/services/coin.service";
import { LocalStorageService } from "../../shared/services/local-storage.service";

@Component({
  selector: "vote-coin",
  templateUrl: "./vote-coin.component.html",
  styleUrls: ["./vote-coin.component.scss"],
})
export class VoteCoinComponent implements OnInit, OnDestroy {
  coinSubscription: Subscription;
  coinName: string;
  votes$: Observable<VoteCoinData>;

  didVote = false;
  voted: number;

  constructor(
    private localStorageService: LocalStorageService,
    private coinService: CoinService
  ) {}

  ngOnInit(): void {
    // this.coinSubscription = this.coinService
    //   .getCoin()
    //   .subscribe((x) => (this.coinName = x.name));

    this.votes$ = this.coinService.getVotes();

    this.checkVote();
  }

  checkVote() {
    const vote = this.localStorageService.getItem(`${this.coinName}_vote`);

    if (vote) {
      const voteObj: VoteCoin = JSON.parse(vote);

      if (voteObj.expireDate < new Date().getMilliseconds())
        this.localStorageService.removeItem(`${this.coinName}_vote`);
      else {
        this.didVote = true;
        this.voted = voteObj.value;
      }
    }
  }

  vote(value: number) {
    this.didVote = true;
    this.voted = value;

    this.localStorageService.setItem(
      `${this.coinName}_vote`,
      JSON.stringify(new VoteCoin(value, new Date().setHours(24)))
    );

    //todo post vote
  }

  ngOnDestroy(): void {
    this.coinSubscription.unsubscribe();
  }
}
