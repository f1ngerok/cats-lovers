import type { Config } from 'jest';

const config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/unit/setupFilesAfterEnv.ts'],
  transformIgnorePatterns: ['node_modules'],
  testMatch: ['<rootDir>/tests/unit/**/*.(test|spec).(ts|tsx)'],
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  collectCoverage: true,
  coverageReporters: ['text-summary'],
  coverageDirectory: '<rootDir>/tests/.coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
} satisfies Config;

export default config;
