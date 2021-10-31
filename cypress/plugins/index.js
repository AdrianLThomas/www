// @ts-ignore
const { lighthouse, prepareAudit } = require('cypress-audit');

module.exports = (on) => {
  on('before:browser:launch', (_, launchOptions) => {
    prepareAudit(launchOptions);
  });

  on('task', {
    lighthouse: lighthouse(),
  });
};
