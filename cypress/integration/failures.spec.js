describe('Basic Checks', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('404', () => {
    cy.visit(`/some-rubbish`, { failOnStatusCode: false });
    cy.contains('404');
  });
});
