import { Component, Input } from '@angular/core';
import { ChartData, ChartDataTab } from '@coin-market/data';
import * as exceljs from 'exceljs';

@Component({
    selector: 'ui-chart-exports-button',
    templateUrl: './chart-exports-button.component.html',
    styleUrls: ['./chart-exports-button.component.scss'],
})
export class ChartExportsButtonComponent {
    @Input() chart: Highcharts.Chart;
    @Input() chartData: ChartData;
    @Input() selectedTab: ChartDataTab;
    exportOptions = [
        { text: 'Download PNG Image', type: 'image/png' },
        { text: 'Download JPEG Image', type: 'image/jpeg' },
        { text: 'Download PDF Image', type: 'application/pdf' },
    ];

    handlePrint() {
        this.chart.print();
    }

    handleDownload(type: string) {
        this.chart.exportChart(
            { type: type as Highcharts.ExportingMimeTypeValue },
            {}
        );
    }

    handleXLSX() {
        const wb = new exceljs.Workbook();
        const sheet = wb.addWorksheet('Chart');
        const currencyFormat = '"$"#,##0.00;[Red]-"$"#,##0.00';
        const { min, max } = this.chart.xAxis[0].getExtremes();

        sheet.columns = [
            {
                header: 'Date',
                key: 'date',
                width: 35,
                style: { numFmt: 'dd/mm/yyyy HH:MM:SS' },
            },
            {
                header: `USD (${this.selectedTab.text})`,
                key: 'usd',
                width: 20,
                style: { numFmt: currencyFormat },
            },
            { header: 'BTC', key: 'btc', width: 20 },
            {
                header: 'Volume',
                key: 'volume',
                width: 20,
                style: { numFmt: currencyFormat },
            },
        ];

        const data: Array<{
            date: Date;
            usd: number;
            btc: number;
            volume: number;
        }> = [];

        for (let i = 0; i < this.chartData.volume.length; i++) {
            const date: number = this.chartData.volume[i][0];
            if (date <= max && date >= min)
                data.push({
                    date: new Date(date),
                    usd: this.chartData[this.selectedTab.textJson].usd[i]
                        ? this.chartData[this.selectedTab.textJson].usd[i][1]
                        : null,
                    btc: this.chartData[this.selectedTab.textJson].coin[i]
                        ? this.chartData[this.selectedTab.textJson].coin[i][1]
                        : null,
                    volume: this.chartData.volume[i]
                        ? this.chartData.volume[i][1]
                        : null,
                });
        }

        sheet.addRows(data);

        wb.xlsx.writeBuffer().then(function (data: exceljs.Buffer) {
            const blob = new Blob([data], {
                type:
                    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            });
            const url = window.URL.createObjectURL(blob);
            const anchor = document.createElement('a');
            anchor.href = url;
            anchor.download = 'chart.xlsx';
            anchor.click();
            window.URL.revokeObjectURL(url);
        });
    }
}
