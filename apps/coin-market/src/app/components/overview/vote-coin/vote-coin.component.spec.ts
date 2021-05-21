import { ComponentFixture, TestBed } from '@angular/core/testing';
import LocalStorageMock from '../../../mocks/localStorage.mock';
import { OverviewServiceMock } from '../../../mocks/overview-service.mock';
import { LocalStorageService } from '../../../shared/services/local-storage.service';
import { OverviewService } from '../../../shared/services/overview.service';
import { VoteCoinComponent } from './vote-coin.component';

describe('VoteCoinComponent', () => {
    let component: VoteCoinComponent;
    let fixture: ComponentFixture<VoteCoinComponent>;
    let localStorage: LocalStorageService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [VoteCoinComponent],
            providers: [
                { provide: LocalStorageService, useClass: LocalStorageMock },
                { provide: OverviewService, useClass: OverviewServiceMock },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(VoteCoinComponent);
        component = fixture.componentInstance;
        localStorage = TestBed.inject(LocalStorageService);
        fixture.detectChanges();
    });

    beforeEach(() => {
        component.coinName = 'BTC';
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('checkVote', () => {
        it('should keep vote', () => {
            const date = new Date().setHours(new Date().getHours() + 24);
            localStorage.setItem(
                'BTC_vote',
                JSON.stringify({ value: 1, expireDate: date })
            );
            component.checkVote();

            expect(component.voted).toBeTruthy();
        });

        it('should remove vote with expired date', () => {
            const date = new Date().setHours(-2);
            localStorage.setItem(
                'BTC_vote',
                JSON.stringify({ value: 1, expireDate: date })
            );
            component.checkVote();

            const item = localStorage.getItem('BTC_vote');

            expect(item).toBeFalsy();
        });

        it('should leave "voted" variable untouched if no vote is present', () => {
            component.checkVote();
            expect(component.voted).toBeFalsy();
        });
    });

    describe('vote', () => {
        it('should set token in local storage', () => {
            component.vote(1);
            const token = localStorage.getItem(`${component.coinName}_vote`);

            expect(token).toBeTruthy();
        });
    });

    describe('isVoteValid', () => {
        it('should return false when value property is not of type number', () => {
            const result = component.isVoteValid({
                value: '1',
                expireDate: new Date().getTime(),
            } as any);

            expect(result).toBe(false);
        });

        it('should return false if passed date is invalid', () => {
            const result = component.isVoteValid({
                value: 1,
                expireDate: '',
            } as any);

            expect(result).toBe(false);
        });

        it('should return false if passed value is not 1 or -1', () => {
            const result = component.isVoteValid({
                value: 0,
                expireDate: new Date().getTime(),
            } as any);

            expect(result).toBe(false);
        });

        it('should return true if passed obj is of type VoteCoin', () => {
            const result = component.isVoteValid({
                value: 1,
                expireDate: new Date().getTime(),
            } as any);

            expect(result).toBe(true);
        });
    });
});
