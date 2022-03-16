const config = {
    
modulePathIgnorePatterns: [
    "/lib/",
    "/node_modules/"
  ],
  preprocessorIgnorePatterns: [
    "/node_modules/"
  ],
  scriptPreprocessor: "scripts/jest/preprocessor.js",
  setupFiles: [
    "scripts/jest/environment.js"
  ],

}
module.exports = config;
