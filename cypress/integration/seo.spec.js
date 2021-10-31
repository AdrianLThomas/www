describe("SEO Checks", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("robots.txt", () => {
    cy.request(`/robots.txt`).its("body").should("include", "Allow: /")
  })

  it("rss.xml", () => {
    cy.request(`/rss.xml`)
      .its("body")
      .should("include", '<rss version="2.0">')
      .and("include", "<title>The Beginning</title>")
  })

  it("sitemap.xml", () => {
    cy.request(`/sitemap/sitemap-index.xml`)
      .its("body")
      .should("include", "<sitemap>")
  })
})
