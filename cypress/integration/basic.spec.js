describe('Basic Checks', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Home Page', () => {
    cy.contains('Adrian L Thomas');
    cy.contains('Latest Posts')
    cy.contains('September 06, 2021')
  });

  it('A Post', () => {
    cy.contains('Making a Smart TV Dumber').click();
    cy.url().should('include', '/blog/2021-10-04/marking-a-smart-tv-dumber/');
    cy.contains('I recently purchased a shiny new 4K Samsung TV');
    cy.get('.blog-post > section img').should('exist')
  });
});
