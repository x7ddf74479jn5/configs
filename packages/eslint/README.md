# @x7ddf74479jn5/eslint-config-x7ddf74479jn5

ESLint config for @x7ddf74479jn5

## インストール

```sh
pnpm add -D @x7ddf74479jn5/eslint-config-x7ddf74479jn5 eslint
```

## 使い方

### legacy config から使う場合

```javascript
// @ts-check
****
/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  root: true,
  extends: ['@x7ddf74479jn5/x7ddf74479jn5', '@x7ddf74479jn5/x7ddf74479jn5/+react', '@x7ddf74479jn5/x7ddf74479jn5/+prettier'],
  parserOptions: { ecmaVersion: 2021 },
  env: { es2021: true, node: true, browser: true, jest: true },
  rules: {
    // プロジェクト固有のルールをここに書く
  },
  overrides: [
    // For TypeScript
    {
      files: ['*.ts', '*.tsx', '*.cts', '*.mts'],
      extends: ['@x7ddf74479jn5/x7ddf74479jn5/+typescript', '@x7ddf74479jn5/x7ddf74479jn5/+prettier'],
      rules: {
        // TypeScript 向けのプロジェクト固有のルールをここに書く
      },
    },
  ],
};
```

### flat config から使う場合

```javascript
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
        extends: ['@x7ddf74479jn5/x7ddf74479jn5/+typescript.js'],
        rules: {
          // Write your favorite rules for TypeScript
        },
      },
    ],
  }),
  ...compat.extends('@x7ddf74479jn5/x7ddf74479jn5/+prettier'),
];
```

## 組み込みの 3rd-party packages

利便性のため、`eslint-config-x7ddf74479jn5` は以下のパッケージを [`dependencies`](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#dependencies) としてインストールします。そのため、これらのパッケージを `eslint-config-x7ddf74479jn5` を利用するプロジェクトの `devDependencies` としてインストールする必要はありません。

- [`@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [`@typescript-eslint/parser`](https://www.npmjs.com/package/@typescript-eslint/parser)
- [`eslint-config-prettier`](https://www.npmjs.com/package/eslint-config-prettier)
- [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import)
- [`eslint-plugin-jsx-a11y`](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- [`eslint-plugin-n`](https://www.npmjs.com/package/eslint-plugin-n)
- [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react)
- [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [`eslint-plugin-unicorn`](https://www.npmjs.com/package/eslint-plugin-unicorn)
- [`eslint-plugin-simple-import-sort`](https://www.npmjs.com/package/eslint-plugin-simple-import-sort)
- [`eslint-plugin-sort-destructure-keys`](https://www.npmjs.com/package/eslint-plugin-sort-destructure-keys)

## 利用可能な config

### `@x7ddf74479jn5/x7ddf74479jn5`

基本的な rule をまとめた config です。利用するには、`parserOptions.ecmaVersion` と `env.es20XX` を指定する必要があります。

```js
module.exports = {
  root: true,
  extends: ['@x7ddf74479jn5/x7ddf74479jn5'],
  parserOptions: { ecmaVersion: 2021 }, // required
  env: { es2021: true }, // required
};
```

### `@x7ddf74479jn5/x7ddf74479jn5/+node`

Node.js で実行されるコード向けの config です。利用するには、[`eslint-plugin-n` のドキュメントに従って Node.js のバージョンを指定しておく](https://github.com/eslint-community/eslint-plugin-n#configured-nodejs-version-range)必要があります。

```js
module.exports = {
  root: true,
  extends: ['@x7ddf74479jn5/x7ddf74479jn5', '@x7ddf74479jn5/x7ddf74479jn5/+node'],
  parserOptions: { ecmaVersion: 2019 },
  env: { es2019: true },
};
```

```json
// package.json
{
  "name": "your-module",
  "version": "1.0.0",
  "engines": {
    "node": ">=16.0.0" // required
  }
}
```

### `@x7ddf74479jn5/x7ddf74479jn5/+typescript`

TypeScript 向けの config です。利用するには、`overrides` オプションを使用し、TypeScript のコードだけに config が適用されるようにしてください。

```js
module.exports = {
  root: true,
  extends: ['@x7ddf74479jn5/x7ddf74479jn5'],
  parserOptions: { ecmaVersion: 2021 },
  env: { es2021: true },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.cts', '*.mts'],
      // NOTE: prettier を利用する場合は @x7ddf74479jn5/x7ddf74479jn5/+typescript の後に
      // @x7ddf74479jn5/x7ddf74479jn5/+prettier の extends も必要です。
      extends: ['@x7ddf74479jn5/x7ddf74479jn5/+typescript'],
      rules: {
        // TypeScript 向けのプロジェクト固有のルールをここに書く
      },
    },
  ],
};
```

### `@x7ddf74479jn5/x7ddf74479jn5/+react`

React を使っているコード向けの config です。`env.browser` を `true` にして利用することを推奨しています。

```js
module.exports = {
  root: true,
  extends: ['@x7ddf74479jn5/x7ddf74479jn5', '@x7ddf74479jn5/x7ddf74479jn5/+react'],
  parserOptions: { ecmaVersion: 2019 },
  env: {
    es2019: true,
    browser: true, // recommended
  },
};
```

### `@x7ddf74479jn5/x7ddf74479jn5/+prettier`

Prettier を使っているコード向けの config です。全ての config の最後に extends することを想定しています。

```js
module.exports = {
  root: true,
  extends: ['@x7ddf74479jn5/x7ddf74479jn5', '@x7ddf74479jn5/x7ddf74479jn5/+prettier'],
  parserOptions: { ecmaVersion: 2019 },
  env: { es2019: true },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.cts', '*.mts'],
      extends: ['@x7ddf74479jn5/x7ddf74479jn5/+typescript', '@x7ddf74479jn5/x7ddf74479jn5/+prettier'],
    },
  ],
};
```
