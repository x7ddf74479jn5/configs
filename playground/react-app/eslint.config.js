// @ts-check

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import globals from 'globals';

const __dirname = new URL('.', import.meta.url).pathname;

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  { ignores: ['**/dist'] },
  ...compat.extends('@x7ddf74479jn5/x7ddf74479jn5', '@x7ddf74479jn5/x7ddf74479jn5/+react'),
  {
    languageOptions: {
      ecmaVersion: 2021,
      globals: { ...globals.node, ...globals.browser, ...globals.jest },
    },
    rules: {
      // Write your favorite rules
    },
  },
  ...compat.config({
    overrides: [
      {
        // For TypeScript
        files: ['*.ts', '*.tsx', '*.cts', '*.mts'],
        extends: ['@x7ddf74479jn5/x7ddf74479jn5/+typescript'],
        rules: {
          // Write your favorite rules for TypeScript
        },
      },
    ],
  }),
  ...compat.extends('@x7ddf74479jn5/x7ddf74479jn5/+prettier'),
];
