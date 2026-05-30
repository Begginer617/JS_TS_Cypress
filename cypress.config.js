const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'pvx3v3',
  allowCypressEnv: false,

  e2e: {
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
    viewportWidth: 800,
    viewportHeight: 600,
    chromeWebSecurity: false,
    testIsolation: false,
    watchForFileChanges: false,
    video: true,
  },
});
