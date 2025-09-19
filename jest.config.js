const ts = require('typescript')

/** @type {import('jest').Config}    */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**tests/**/*.test.ts'],
    verbose: true,
    transform: {
        '^.+\\.ts?$': ['ts-jest', { tsconfig: 'tsconfig.json' }]
    }
};