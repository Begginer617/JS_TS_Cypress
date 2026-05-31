const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '9htb64',
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
    watchForFileChanges: false,
  },
});
