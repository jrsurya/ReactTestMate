# React Unit Test Setup

React Unit Test Setup is an npm package designed to simplify the process of setting up unit testing in React.js projects. This package automates the installation of necessary dependencies and configuration files required for running unit tests with Jest and Enzyme.

## Installation

To install React Unit Test Setup, run the following command in your terminal:

```bash
npm install reacttestmate-2.0 --save-dev
npm run setup-tests
```

## Usage

After installing the package, you can set up unit testing in your React.js project by running the following command in your project directory:


This command will automatically configure Jest and Enzyme by creating `jest.config.js` and `src/setupTests.js` files in your project directory.

## Templates

The package provides two template files to configure Jest and Enzyme:

### jest.config.js

```javascript
module.exports = {
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,
  
  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'jsx', 'json'],

  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>/src'],

  // A list of paths to directories that Jest should use to search for files in
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],

  // The glob patterns Jest uses to detect test files
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testURL: 'http://localhost',

  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  verbose: true,
};

