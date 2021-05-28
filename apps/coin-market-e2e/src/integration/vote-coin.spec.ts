describe('vote-coin', () => {
    beforeEach(() => {
        cy.visit('/currencies/btc');
    });

    it('should display you voted text', () => {
        cy.get('coin-market-vote-coin').contains('How do you feel');

        cy.get('.vote-coin__button-group__button').contains('Good').click();

        cy.get('coin-market-vote-coin').should('contain', 'You voted');
    });
});
