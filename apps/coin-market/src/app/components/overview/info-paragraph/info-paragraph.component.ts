import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OverviewService } from '../../../shared/services/overview.service';

@Component({
    selector: 'coin-market-info-paragraph',
    templateUrl: './info-paragraph.component.html',
    styleUrls: ['./info-paragraph.component.scss'],
})
export class InfoParagraphComponent implements OnInit {
    data$: Observable<any>;
    expanded = false;

    constructor(private overviewService: OverviewService) {}

    ngOnInit(): void {
        this.data$ = combineLatest([
            this.overviewService.coin$,
            this.overviewService.coinStatistics$,
        ]).pipe(map((obs) => ({ ...obs[0], ...obs[1] })));
    }
}
