//  const { defineConfig } = require('cypress')
// // const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
// // const browserify= require("@badeball/cypress-cucumber-preprocessor/browserify");
// const {
//   addCucumberPreprocessorPlugin,
// } = require("@badeball/cypress-cucumber-preprocessor");
// const {
//   preprocessor,
// } = require("@badeball/cypress-cucumber-preprocessor/browserify");
// async function setupNodeEvents(on, config) {
//   // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
//   await addCucumberPreprocessorPlugin(on, config);

//   on("file:preprocessor", preprocessor(config));

//   // Make sure to return the config object as it might have been modified by the plugin.
//   return config;
// }
// //
// module.exports = defineConfig({
//   projectId: 'uga1ya',
//   retries: {
//     runMode: 1,
//     },

    
//   defaultCommandTimeout: 15000,
//   pageLoadTimeout: 250000 ,
//   e2e: {
//     //setupNodeEvents,
//     //specPattern: 'cypress/e2e/Examples/*.js', // to run .js files 
//     specPattern: 'cypress/e2e/Examples/BDD/*.feature', //to run .feature files
//    //specPattern: 'cypress/e2e/NIEN_Examples/*.js', // to run .js for nIEN files
//    setupNodeEvents,
//   },
    
// })
//
const { defineConfig } = require('cypress')
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { preprocessor } = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config)

  on("file:preprocessor", preprocessor(config))

  return config;
}

module.exports = defineConfig({
  projectId: 'uga1ya',
  //retries: {
    //runMode: 1,
 // },
  defaultCommandTimeout: 15000,
  pageLoadTimeout: 600000,

// specPatterns

 e2e: {setupNodeEvents,
    //specPattern: 'cypress/e2e/NIEN_Examples/*.js',
    specPattern:'cypress/e2e/Evolve-Project/*.js',
    // ['cypress/e2e/NIEN_Examples/*.js',
    //  'cypress/e2e/Examples/BDD/*.feature',
    // 'cypress/e2e/Examples/*.js',
    
    // ]
    },
})
