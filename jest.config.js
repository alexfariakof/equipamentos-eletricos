/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    collectCoverage: true, 
    coverageDirectory: 'coverage',
    bail: false, 
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], 
    collectCoverageFrom: [
      './__client__/src/**/*.ts',
      './__client__/src/**/*.tsx',
      './__server__/src/**/*.ts',
      './__server__/src/**/*.tsx',
      './__server__/src/**/*.tsx',
      '!./__server__/src/prisma/client/**',      
      '!src/**/*.test.ts', 
      '!src/**/*.test.tsx',
      '!./__client__/src/**/index.tsx', 
      '!./__client__/src/**/index.ts'
    ],
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    }    
  };