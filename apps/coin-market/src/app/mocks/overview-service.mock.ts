import { of } from 'rxjs';
import { Coin } from '../models/coin';
import { VoteCoinData } from '../models/voteCoinData.model';

export class OverviewServiceMock {
    coin$ = of(new Coin({}));
    coinVotes$ = of(new VoteCoinData());
}
