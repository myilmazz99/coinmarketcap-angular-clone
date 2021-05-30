import {
    Component,
    ElementRef,
    HostListener,
    OnInit,
    ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Coin } from '../../models/coin.model';
import { OverviewService } from '../../shared/services/overview.service';

@Component({
    selector: 'coin-market-coin-detail-bar',
    templateUrl: './coin-detail-bar.component.html',
    styleUrls: ['./coin-detail-bar.component.scss'],
})
export class CoinDetailBarComponent implements OnInit {
    @ViewChild('bar') bar: ElementRef;
    coin$: Observable<Coin>;

    constructor(private overviewService: OverviewService) {}

    ngOnInit(): void {
        this.coin$ = this.overviewService.coin$;
    }

    @HostListener('window:scroll') onScroll() {
        if (window.scrollY > 0 || window.pageYOffset > 0)
            this.bar?.nativeElement.classList.add('expanded');
        else this.bar?.nativeElement.classList.remove('expanded');
    }
}
