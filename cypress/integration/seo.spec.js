describe('SEO Checks', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('robots.txt', () => {
    cy.request(`/robots.txt`).its('body').should('include', 'Allow: /');
  });

  it('sitemap.xml', () => {
    cy.request(`/sitemap/sitemap-index.xml`)
      .its('body')
      .should('include', '<sitemap>');
  });
});
