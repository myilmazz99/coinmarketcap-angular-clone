import { Component, Input } from "@angular/core";

@Component({
  selector: "chart-range-selector",
  templateUrl: "./chart-range-selector.component.html",
  styleUrls: ["./chart-range-selector.component.scss"],
})
export class ChartRangeSelectorComponent {
  ranges = ["1D", "7D", "1M", "3M", "1Y", "YTD", "ALL"];
  selected = "ALL";

  @Input() Chart: Highcharts.Chart;

  setExtremes(val: string) {
    this.selected = val;
    const now = new Date();
    const month = now.getMonth();
    const year = now.getFullYear();

    switch (val) {
      case "1D":
        this.Chart.xAxis[0].setExtremes(
          now.setHours(-24),
          new Date().getTime(),
          true,
          false
        );
        break;
      case "7D":
        this.Chart.xAxis[0].setExtremes(
          now.setHours(-7 * 24),
          new Date().getTime(),
          true,
          false
        );
        break;
      case "1M":
        this.Chart.xAxis[0].setExtremes(
          now.setMonth(month - 1),
          new Date().getTime(),
          true,
          false
        );
        break;
      case "3M":
        this.Chart.xAxis[0].setExtremes(
          now.setMonth(month - 3),
          new Date().getTime(),
          true,
          false
        );
        break;
      case "1Y":
        this.Chart.xAxis[0].setExtremes(
          now.setFullYear(year - 1),
          new Date().getTime(),
          true,
          false
        );
        break;
      case "YTD":
        this.Chart.xAxis[0].setExtremes(
          new Date(year, 0, 1).getTime(),
          undefined,
          true,
          false
        );
        break;

      default:
        this.Chart.xAxis[0].setExtremes();
        break;
    }
  }
}
