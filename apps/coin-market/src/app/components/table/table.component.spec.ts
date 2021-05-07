import {
    async,
    ComponentFixture,
    fakeAsync,
    TestBed,
    tick,
} from '@angular/core/testing';
import { TableComponent } from './table.component';
import { MaterialModule } from '../../shared/material.module';
import { MarketsService } from '../../shared/services/markets.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AntModule } from '../../shared/ng-zorro-antd.module';
import { FormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Market } from '../../models/market';

class MarketServiceMock {
    filterPair() {
        return 2;
    }
    findMarkets() {
        return 2;
    }
    sortData() {
        return 2;
    }
    public screenItems$: Observable<Market[]> = of([
        {
            imageUrl: 'assets/img/Binance.png',
            source: 'Binance',
            pairs: 'BTC/USDT',
            price: 54462.22,
            volume: 4018305861,
            volumePercentage: 6.33,
            liquidity: 888,
            confidence: 'Low',
            updated: 'Recently',
        },
        {
            imageUrl: 'assets/img/HuobiGlobal.jpg',
            source: 'Huobi Global',
            pairs: 'BTC/USDT',
            price: 54448.11,
            volume: 1611191824,
            volumePercentage: 2.54,
            liquidity: 925,
            confidence: 'Medium',
            updated: 'Recently',
        },
        {
            imageUrl: 'assets/img/HuobiGlobal.jpg',
            source: 'Huobi Global',
            pairs: 'BTC/USDT',
            price: 54448.11,
            volume: 1611191824,
            volumePercentage: 2.54,
            liquidity: 925,
            confidence: 'High',
            updated: 'Recently',
        },
    ]);
    public marketItems$: Observable<Market[]> = of([
        {
            imageUrl: 'assets/img/Binance.png',
            source: 'Binance',
            pairs: 'BTC/USDT',
            price: 54462.22,
            volume: 4018305861,
            volumePercentage: 6.33,
            liquidity: 888,
            confidence: 'Low',
            updated: 'Recently',
        },
        {
            imageUrl: 'assets/img/HuobiGlobal.jpg',
            source: 'Huobi Global',
            pairs: 'BTC/USDT',
            price: 54448.11,
            volume: 1611191824,
            volumePercentage: 2.54,
            liquidity: 925,
            confidence: 'Medium',
            updated: 'Recently',
        },
        {
            imageUrl: 'assets/img/HuobiGlobal.jpg',
            source: 'Huobi Global',
            pairs: 'BTC/USDT',
            price: 54448.11,
            volume: 1611191824,
            volumePercentage: 2.54,
            liquidity: 925,
            confidence: 'High',
            updated: 'Recently',
        },
    ]);
}

describe('TableComponent', () => {
    let component: TableComponent;
    let fixture: ComponentFixture<TableComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                MaterialModule,
                BrowserAnimationsModule,
                AntModule,
                FormsModule,
            ],
            declarations: [TableComponent],
            providers: [
                { provide: MarketsService, useClass: MarketServiceMock },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should get observable data', fakeAsync(() => {
        component.ngOnInit();
        fixture.detectChanges();

        tick(2000);
        fixture.detectChanges();
        component.setConfidenceBackgroundColor();
        let x = fixture.nativeElement.getElementsByClassName(
            'confidence-level'
        );
        expect(x[0].className).toContain('Low');
        expect(x[1].className).toContain('Medium');
        expect(x[2].className).toContain('High');
    }));
});
