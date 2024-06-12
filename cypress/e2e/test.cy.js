describe('template spec', () => {
  it('search someting on Youtube', () => {
    cy.visit('https://youtube.com');
    cy.get('input#search').type('a search{enter}');
    cy.get('div#contents').should('be.visible').and('be.');
  })
})