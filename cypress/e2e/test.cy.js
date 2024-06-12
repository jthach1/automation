describe('template spec', () => {
  it('search someting on Youtube', () => {
    cy.visit('https://youtube.com');
    cy.get('input#search').type('a search{enter}');
    cy.get('button').should('be.a')
  })
})