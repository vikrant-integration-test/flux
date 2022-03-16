const config = {
    
modulePathIgnorePatterns: [
    "/lib/",
    "/node_modules/"
  ],
  preprocessorIgnorePatterns: [
    "/node_modules/" 
  ],
     transform: {
        "\\.js$": "./scripts/jest/preprocessor.js"
    },
    setupFiles: [
    "./scripts/jest/environment.js"
  ],

}
module.exports = config;
