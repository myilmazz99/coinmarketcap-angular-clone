import { Component, Input, ViewChild } from "@angular/core";
import {
  MatCalendar,
  MatCalendarCellCssClasses,
  MatCalendarView,
} from "@angular/material/datepicker";
import { MatMenuTrigger } from "@angular/material/menu";

@Component({
  selector: "coin-chart-calendar",
  templateUrl: "./coin-chart-calendar.component.html",
  styleUrls: ["./coin-chart-calendar.component.scss"],
})
export class CoinChartCalendarComponent {
  @Input() Chart: Highcharts.Chart;
  @Input() trigger: MatMenuTrigger;

  predefinedDates = [7, 30, 90, 180, 365];
  calendar = { start: 0, end: 0, range: 0 };
  maxDate = new Date();

  onChange(e: any) {
    var date = new Date(e).getTime();
    var { start, end, range } = this.calendar;
    if (start === 0) start = date;
    else if (end === 0 && date > start) {
      end = date;
      range = Math.floor((end - start) / 86400000);
    } else {
      start = date;
      end = 0;
      range = 0;
    }

    this.calendar = { start, end, range };
  }

  closeMenu() {
    this.trigger.closeMenu();
  }

  onConfirm() {
    this.closeMenu();
    this.Chart.xAxis[0].setExtremes(this.calendar.start, this.calendar.end);
  }

  handlePredefinedDates(val: number) {
    this.closeMenu();
    const date = new Date().setHours(val * -24);
    this.Chart.xAxis[0].setExtremes(date, new Date().getTime());
  }

  dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      console.log(date);
      if (
        date.getTime() === this.calendar.start ||
        date.getTime() === this.calendar.end
      ) {
        return "selected-date";
      } else {
        return;
      }
    };
  }
}
