import { Component, ViewChild, AfterViewInit, DoCheck } from "@angular/core";
import data from "apps/coin-market/src/assets/data/data";
import dataDerivates from "apps/coin-market/src/assets/data/dataDerivates";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: "coin-market-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements AfterViewInit, DoCheck {
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
  dataSource = new MatTableDataSource(data);
  dataSource2 = new MatTableDataSource(dataDerivates);

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
      console.log(e);
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
