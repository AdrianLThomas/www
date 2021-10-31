describe("SEO Checks", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("robots.txt", () => {
    cy.request(`/robots.txt`).its("body").should("include", "User-agent: *")
  })

  it("rss.xml", () => {
    cy.request(`/rss.xml`)
      .its("body")
      .should(
        "include",
        'version="2.0"><channel><title><![CDATA[Adrian L Thomas]]></title>'
      )
      .and("include", "<title><![CDATA[The Beginning]]></title>")
  })

  it("sitemap.xml", () => {
    cy.request(`/sitemap/sitemap-index.xml`)
      .its("body")
      .should("include", "<sitemap>")
  })
})
