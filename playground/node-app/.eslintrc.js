module.exports = {
  root: true,
  extends: [
    '@x7ddf74479jn5/x7ddf74479jn5',
    '@x7ddf74479jn5/x7ddf74479jn5/+node',
    '@x7ddf74479jn5/x7ddf74479jn5/+prettier',
  ],
  parserOptions: { ecmaVersion: 2023 },
  env: { es2023: true },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.cts', '*.mts'],
      extends: ['@x7ddf74479jn5/x7ddf74479jn5/+typescript', '@x7ddf74479jn5/x7ddf74479jn5/+prettier'],
    },
  ],
};
