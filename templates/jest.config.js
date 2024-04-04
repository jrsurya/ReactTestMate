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
