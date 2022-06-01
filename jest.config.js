// File: config.jest.js
module.exports = {
    verbose: true,
    silent: true,
    setupFilesAfterEnv: [
      '<rootDir>setup-test.js',
      './node_modules/jest-enzyme/lib/index.js',
    ],
    coverageDirectory: 'reports/coverage',
    collectCoverage: true,
    testPathIgnorePatterns: ['/node_modules/', 'build/'],
    transformIgnorePatterns: [
        '"node_modules/(?!(@thoughtspot/radiant-react))/"',
    ],
    collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/**/*.test.js'],
    coverageReporters: ['json', 'lcov'],
  };
  