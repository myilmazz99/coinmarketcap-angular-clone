import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GainersLosers } from '../../models/gainers-losers';
import { GainersLosersResponse } from '../../models/gainers-losers-response.model';

@Injectable({
    providedIn: 'root',
})
export class GainersLosersService {
    private gainers = new BehaviorSubject<GainersLosers[]>([]);
    public gainers$: Observable<GainersLosers[]>;

    private losers = new BehaviorSubject<GainersLosers[]>([]);
    public losers$: Observable<GainersLosers[]>;

    constructor(private http: HttpClient) {
        this.http
            .get<GainersLosersResponse>('assets/data/gainers.json')
            .subscribe((x) => {
                this.gainers.next(x.gainers);
                this.losers.next(x.losers);
            });

        this.gainers$ = this.gainers.asObservable();
        this.losers$ = this.losers.asObservable();
    }
}
