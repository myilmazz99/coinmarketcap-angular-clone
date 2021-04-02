import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Market } from '../../models/market';
import data from 'apps/coin-market/src/assets/data/data';

@Injectable()
export class MarketsService {
    private marketItems = new BehaviorSubject<Market[]>([]);
    public marketItems$: Observable<Market[]>;
    constructor() {
        this.marketItems.next(data);
        this.marketItems$ = this.marketItems.asObservable();
    }
}
//-------------------------------------------------------------------
// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';
// import data from 'apps/coin-market/src/assets/data/data';
// import { Market } from 'apps/coin-market/src/app/models/market';

// @Injectable({
//     providedIn: 'root',
// })
// export class MarketsService {
//     marketItems$: Observable<Market[]>;
//     private marketItems: BehaviorSubject<Market[]>;

//     constructor() {}

//     getMarkets() {
//         return data;
//     }
// }
