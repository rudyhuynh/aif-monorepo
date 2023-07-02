/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",

  testEnvironment: "jest-environment-jsdom",

  moduleNameMapper: {
    "^lodash-es$": "lodash", // an escape hatch to make lodash-es works
    "^[./a-zA-Z0-9$_-]+\\.css$": "<rootDir>/test/mockStyle.js",
  },
};
