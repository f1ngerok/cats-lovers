import esLint from '@eslint/js';
import pluginTanstackQuery from '@tanstack/eslint-plugin-query';
import tsParser from '@typescript-eslint/parser';
import pluginJest from 'eslint-plugin-jest';
import perfectionist from 'eslint-plugin-perfectionist';
import pluginReact from 'eslint-plugin-react';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tsLint from 'typescript-eslint';

export default tsLint.config(
  {
    files: ['**/*.ts', '**/*.tsx'],
    name: 'cat-lovers/eslint/rules',
    rules: {
      ...esLint.configs.recommended.rules,
      'no-undef': 'off',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    },
  },
  {
    name: 'cat-lovers/typescript/rules',
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      ...tsLint.configs.strictTypeChecked[2].rules,
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'off',
      '@typescript-eslint/no-confusing-void-expression': 'off',
    },
  },
  {
    name: 'cat-lovers/typescript/setup',
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': tsLint.plugin,
    },
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.browser,
        ...globals.es2025,
        ...globals.node,
        document: 'readonly',
        navigator: 'readonly',
        window: 'readonly',
      },
      parserOptions: {
        projectService: true,
        sourceType: 'module',
        ecmaVersion: 'latest',
        project: ['tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    name: 'cat-lovers/jsx',
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    name: 'cat-lovers/react/setup',
    plugins: {
      react: pluginReact,
      'react-refresh': reactRefreshPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    name: 'cat-lovers/react/rules',
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      ...pluginReact.configs.recommended.rules,

      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    name: 'cat-lovers/tanstack-query',
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@tanstack/query': pluginTanstackQuery,
    },
    rules: {
      ...pluginTanstackQuery.configs.recommended.rules,
    },
  },
  {
    name: 'cat-lovers/jest-setup',
    files: ['**/*.test.ts', '**/*.(spec|test).tsx'],
    plugins: {
      jest: pluginJest,
    },
    languageOptions: {
      globals: pluginJest.environments.globals.globals,
    },
  },
  {
    name: 'cat-lovers/rules',
    files: ['**/*.test.ts', '**/*.(spec|test).tsx'],
    rules: {
      ...pluginJest.configs['flat/recommended'].rules,
    },
  },
  {
    name: 'cat-lovers/import-resolver',
    files: ['**/*.ts', '**/*.tsx'],
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: import.meta.dirname,
        },
      },
    },
  },
  {
    name: 'cat-lovers/perfectionist',
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      perfectionist: perfectionist,
    },
    rules: {
      'perfectionist/sort-array-includes': [
        'error',
        {
          order: 'asc',
          type: 'alphabetical',
        },
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          groups: [
            'type',
            ['builtin', 'external'],
            'internal-type',
            ['internal'],
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'object',
            'style',
            'side-effect-style',
            'unknown',
          ],
          internalPattern: ['^@/.*'],
          newlinesBetween: 'always',
          order: 'asc',
          type: 'natural',
        },
      ],
      'perfectionist/sort-interfaces': [
        'error',
        {
          groups: ['unknown', 'method', 'multiline'],
          order: 'asc',
          type: 'alphabetical',
        },
      ],
      'perfectionist/sort-jsx-props': [
        'error',
        {
          customGroups: {
            callback: 'on*',
            reserved: ['key', 'ref'],
          },
          groups: ['shorthand', 'reserved', 'multiline', 'unknown', 'callback'],
          order: 'asc',
          type: 'alphabetical',
        },
      ],
    },
  }
);
