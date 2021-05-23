import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { VoteCoin } from '../../../models/voteCoin.model';
import { VoteCoinData } from '../../../models/voteCoinData.model';
import { OverviewService } from '../../../shared/services/overview.service';
import { LocalStorageService } from '../../../shared/services/local-storage.service';
import { isValid } from 'date-fns';

@Component({
    selector: 'coin-market-vote-coin',
    templateUrl: './vote-coin.component.html',
    styleUrls: ['./vote-coin.component.scss'],
})
export class VoteCoinComponent implements OnInit, OnDestroy {
    coinSubscription: Subscription;
    coinName: string;
    votes$: Observable<VoteCoinData>;

    voted: number;

    constructor(
        private localStorageService: LocalStorageService,
        private overviewService: OverviewService
    ) {}

    ngOnInit(): void {
        this.coinSubscription = this.overviewService.coin$.subscribe(
            (s) => (this.coinName = s.coin_name)
        );

        this.votes$ = this.overviewService.coinVotes$;
        this.checkVote();
    }

    checkVote() {
        const vote = this.localStorageService.getItem(`${this.coinName}_vote`);

        if (vote) {
            const voteObj: VoteCoin = JSON.parse(vote);

            if (
                !this.isVoteValid(voteObj) ||
                voteObj.expireDate < new Date().getTime()
            )
                this.localStorageService.removeItem(`${this.coinName}_vote`);
            else {
                this.voted = voteObj.value;
            }
        }
    }

    vote(value: number) {
        this.voted = value;

        this.localStorageService.setItem(
            `${this.coinName}_vote`,
            JSON.stringify(new VoteCoin(value, new Date().setHours(24)))
        );
    }

    isVoteValid(obj: VoteCoin): boolean {
        const { value, expireDate } = obj;

        if (typeof value !== 'number' || (value !== 1 && value !== -1))
            return false;

        if (!isValid(new Date(expireDate))) return false;

        return true;
    }

    ngOnDestroy(): void {
        this.coinSubscription.unsubscribe();
    }
}
