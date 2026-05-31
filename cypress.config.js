const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'pvx3v3',
  allowCypressEnv: false,

  video: true,
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true
  },

  e2e: {
    viewportWidth: 800,
    viewportHeight: 600,
    chromeWebSecurity: false,
    testIsolation: false,
    watchForFileChanges: false,
  },
});
