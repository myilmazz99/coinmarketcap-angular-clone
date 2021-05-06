describe('coin-market', () => {
    beforeEach(() => cy.visit('/home'));

    it('should vote good for coin', () => {
        cy.clearLocalStorage();
        cy.get('.vote-coin__button-group__button')
            .contains('Good')
            .click()
            .should(() => {
                const token = localStorage.getItem('Bitcoin_vote');
                expect(token).to.not.undefined;
                expect(JSON.parse(token)).keys('value', 'expireDate');
                expect(JSON.parse(token).value).eq(1);
            });

        cy.get('coin-market-vote-coin').contains('You voted');
    });
});
