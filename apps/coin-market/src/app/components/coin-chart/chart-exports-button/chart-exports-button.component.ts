import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'chart-exports-button',
    templateUrl: './chart-exports-button.component.html',
    styleUrls: ['./chart-exports-button.component.scss'],
})
export class ChartExportsButtonComponent implements OnInit {
    @Input() chart: Highcharts.Chart;
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

    ngOnInit(): void {}
}
