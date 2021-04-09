import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Coin } from "../../models/coin";
import { CoinStatistics } from "../../models/coin-statistics.model";
import { CoinDetailsService } from "../../shared/services/coin-details.service";

@Component({
  selector: "coin-market-stats-section",
  templateUrl: "./stats-section.component.html",
  styleUrls: ["./stats-section.component.scss"],
})
export class StatsSectionComponent implements OnInit {
  coinStatistics$: Observable<CoinStatistics>;

  constructor(private coinDetailsService: CoinDetailsService) {}

  ngOnInit(): void {
    this.coinStatistics$ = this.coinDetailsService.coinStatistics$;
  }
}
