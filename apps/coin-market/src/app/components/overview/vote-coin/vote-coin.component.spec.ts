import { ComponentFixture, TestBed } from '@angular/core/testing';
import LocalStorageMock from '../../../mocks/localStorage.mock';
import { LocalStorageService } from '../../../shared/services/local-storage.service';

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
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(VoteCoinComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        localStorage = TestBed.inject(LocalStorageService);
    });

    beforeEach(() => {
        component.coinName = 'BTC';
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('checkVote', () => {
        it('should keep vote', () => {
            const date = new Date().setHours(2);
            localStorage.setItem(
                'BTC_vote',
                JSON.stringify({ value: 'BTC', expireDate: date })
            );
            component.checkVote();

            expect(component.didVote).toBe(true);
        });

        it('should remove vote with expired date', () => {
            const date = new Date().setHours(-2);
            localStorage.setItem(
                'BTC_vote',
                JSON.stringify({ value: 'BTC', expireDate: date })
            );
            component.checkVote();

            const item = localStorage.getItem('BTC_vote');

            expect(item).toBeFalsy();
        });
    });

    describe('vote', () => {
        it('should set token in local storage', () => {
            component.vote(1);
            const token = localStorage.getItem(`${component.coinName}_vote`);

            expect(token).toBeTruthy();
        });
    });
});
