/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  root: true,
  extends: [
    '@x7ddf74479jn5/x7ddf74479jn5',
    '@x7ddf74479jn5/x7ddf74479jn5/+react',
    '@x7ddf74479jn5/x7ddf74479jn5/+prettier',
  ],
  parserOptions: { ecmaVersion: 2021 },
  env: { es2021: true, node: true, browser: true, jest: true },
  rules: {
    // プロジェクト固有のルールをここに書く
  },
  overrides: [
    // For TypeScript
    {
      files: ['*.ts', '*.tsx', '*.cts', '*.mts'],
      extends: [
        'next/core-web-vitals',
        '@x7ddf74479jn5/x7ddf74479jn5/+typescript',
        '@x7ddf74479jn5/x7ddf74479jn5/+prettier',
      ],
      rules: {
        // TypeScript 向けのプロジェクト固有のルールをここに書く
      },
    },
  ],
};
