/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    collectCoverage: true, 
    coverageDirectory: 'coverage',
    bail: false, 
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], 
    collectCoverageFrom: [
      'src/**/*.ts',
      'src/**/*.tsx',
      '!src/**/*.test.ts', 
      '!src/**/*.test.tsx',
      '!src/**/index.tsx', 
      '!src/**/index.ts'
    ],
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    }    
  };