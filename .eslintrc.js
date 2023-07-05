// @ts-check
'use strict';

/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  root: true,
  extends: [
    '@x7ddf74479jn5/x7ddf74479jn5',
    '@x7ddf74479jn5/x7ddf74479jn5/+node',
    '@x7ddf74479jn5/x7ddf74479jn5/+prettier',
  ],
  parserOptions: { ecmaVersion: 2022 },
  env: { es2022: true, node: true },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.cts', '*.mts'],
      extends: ['@x7ddf74479jn5/x7ddf74479jn5/+typescript', '@x7ddf74479jn5/x7ddf74479jn5/+prettier'],
    },
  ],
};
