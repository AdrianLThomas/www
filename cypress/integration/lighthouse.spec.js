beforeEach(() => {
  cy.visit('/');
});

it(
  'Should pass the audits',
  {
    retries: {
      runMode: 9,
    },
  },
  function () {
    // As I'm at the mercy of GHA cloud runners,
    // retries and an overall lower threshold
    // than reality is required (see: `cypress.json`).
    cy.lighthouse();
  }
);
