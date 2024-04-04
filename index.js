const fs = require('fs');
const path = require('path');

function setupTests() {
    const projectRoot = process.cwd();
    const jestConfigTemplate = fs.readFileSync(path.resolve(__dirname, 'templates/jest.config.js'), 'utf-8');
    const setupTestsTemplate = fs.readFileSync(path.resolve(__dirname, 'templates/setupTests.js'), 'utf-8');

    fs.writeFileSync(path.resolve(projectRoot, 'jest.config.js'), jestConfigTemplate);
    fs.writeFileSync(path.resolve(projectRoot, 'src/setupTests.js'), setupTestsTemplate);

    console.log('Unit test setup completed.');
}

module.exports = setupTests;
