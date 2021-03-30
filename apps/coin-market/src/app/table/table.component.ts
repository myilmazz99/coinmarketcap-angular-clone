import { Component, ViewChild, AfterViewInit, DoCheck } from "@angular/core";
import data from "apps/coin-market/src/assets/data/data";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { Pair } from "../models/pair";
import { MarketsService } from "apps/coin-market/src/app/shared/services/markets.service";
import { Observable } from "rxjs";
import { Market } from "apps/coin-market/src/app/models/market";
import { DataSource } from "@angular/cdk/collections";

@Component({
  selector: "coin-market-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements AfterViewInit, DoCheck {
  marketItems$: Observable<Market[]>;

  constructor(private marketService: MarketsService) {
    // this.marketItems$ = this.marketService.marketItems$;
  }

  public markets = this.marketService.getMarkets();

  // // // public markets = [];
  // // // constructor(private _marketService: MarketsService) {}

  // // // ngOnInit() {
  // // //   this._marketService.getMarkets().subscribe((data) => (this.markets = data));
  // // // }
  // // //*************************** */
  // // // marketItems$: Observable<Markets[]>;
  // // // constructor(private marketsService: MarketsService) {}
  // // // ngOnInit() {
  // // //   this.marketItems$ = this.marketsService.getMarkets();
  // // //   console.log(this.marketItems$);
  // // // }

  // // // public markets = [];

  // // // constructor(private marketService: MarketsService) {}

  // // // ngOnInit() {
  // // //   this.markets = this.marketService.getMarkets();
  // // // }

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

  displayedColumns: string[] = [
    "position",
    "source",
    "pairs",
    "price",
    "volume",
    "volumePercentage",
    "liquidity",
    "confidence",
    "updated",
  ];
  dataSource = new MatTableDataSource(this.markets);

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  //Pair'leri seçilene göre filtrele
  filterPair(newItem: string) {
    if (newItem === "All") {
      this.applyFilter("");
    } else {
      this.applyFilter("/" + newItem);
    }
  }

  //Confidence background'u gelen data'ya göre değiştir
  confidencebG() {
    var bg = Array.from(
      document.getElementsByClassName(
        "confidence"
      ) as HTMLCollectionOf<HTMLElement>
    );
    bg.forEach((e) => {
      switch (e.innerText) {
        case "Low":
          e.style.background = "#ff3333";
          e.style.border = "1px solid #ff3333";
          break;
        case "Moderate":
          e.style.background = "#ff8c1a";
          e.style.border = "1px solid orange";
          break;
        case "High":
          e.style.background = "#00cc88";
          e.style.border = "1px solid #00cc88";
          break;
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  ngDoCheck() {
    this.confidencebG();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

// export class UserDataSource extends DataSource<any> {
//   constructor(private marketService: MarketsService) {
//     super();
//   }
//   connect(): Observable<Market[]> {
//     return this.marketService.getMarkets();
//   }
//   disconnect() {}
// }
