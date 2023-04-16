# @x7ddf74479jn5/eslint-config

x7ddf744979j5のeslintプリセット。

## インストール

```sh
pnpm add -D @x7ddf74479jn5/eslint-config
```

## 使い方

すべてのルールを有効化して使う場合は、次のように設定してください。

`eslint.config.js`

```js
// ESM
import configs from "@x7ddf74479jn5/eslint-config";

export default configs.react;

// CommonJS
const configs = require("@x7ddf74479jn5/eslint-config");

module.exports = configs.react;
```

プリセットを拡張して使う場合は、次のように設定してください。設定はカスケードされるため後ろに書いてルールで上書きできます。

`eslint.config.js`

```js
// ESM
import configs from "@x7ddf74479jn5/eslint-config";

export default [
  ...configs.react,
  {
    rules:{
      "no-restricted-imports": [
          "error",
          {
              patterns: ["@/features/*/*"],
          },
      ],
    }
  },
];

// CommonJS
const configs = require("@x7ddf74479jn5/eslint-config");

module.exports = [
  ...configs.node,
  {
    rules:{
      "no-restricted-imports": [
          "error",
          {
              patterns: ["@/features/*/*"],
          },
      ],
    }
  },
];
```

## 公開プリセット一覧

| preset  | configs  |
|---|---|
| node  | base, typescript, prettier |
| react | base, typescript, react, prettier |
| next  | base, typescript, next, react, prettier |

- preset: プリセット名
- configs: 読み込んでいる設定集（下記参照）

## 設定詳細

デフォルトでは、次のような設定になっています。個別にルールを有効・無効化することも可能です。

### base

基本の共通設定として各プリセットで読み込まれます。

#### プラグイン一覧

- `eslint-plugin-import`
- `eslint-plugin-jsx-a11y`
- `eslint-plugin-simple-import-sort`
- `eslint-plugin-sort-destructure-keys`

```js
// デフォルトで除外するディレクトリとファイル
export const baseIgnores = [
  "dist",
  "out",
  "build",
  "generated",
  "**/*.generated.ts",
];

export const baseConfig = {
  plugins: {
    import: imp,
    "jsx-a11y": jsxA11y,
    "simple-import-sort": simpleImportSort,
    "sort-destructure-keys": sortDestructureKeys,
  },
};

export const baseRules = {
  "import/newline-after-import": "error",
  "jsx-a11y/no-autofocus": "off",
  "jsx-a11y/anchor-is-valid": [
    "error",
    {
      components: ["Link"],
      specialLink: ["hrefLeft", "hrefRight"],
      aspects: ["invalidHref", "preferButton"],
    },
  ],
  "no-console": ["error", { allow: ["warn", "info", "error"] }],
  "no-restricted-syntax": [
    "error",
    { selector: "TSEnumDeclaration", message: "Don't declare enums" },
  ],
  "prefer-arrow-callback": "error",
  "prefer-const": "error",
  "simple-import-sort/imports": "error",
  "simple-import-sort/exports": "error",
  "sort-destructure-keys/sort-destructure-keys": 2,
};
```

### prettier

基本の共通設定として各プリセットの最後で読み込まれます。

#### コンフィグ一覧

- `eslint-config-prettier`

### typescript

TypeScript共通設定として各プリセットで読み込まれます。

#### コンフィグ一覧

- `@typescript-eslint/eslint-plugin/eslint-recommended`
- `@typescript-eslint/eslint-plugin/recommended`
- `@typescript-eslint/eslint-plugin/recommended-requiring-checking`

```js
export const tsConfig = {
  files: ["**/*.{ts,mts,cts,tsx}"],
  plugins: {
    "@typescript-eslint": ts,
  },
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      project: "./tsconfig.json",
    },
  },
  rules: {
    ...ts.configs["eslint-recommended"].rules,
    ...ts.configs["recommended"].rules,
    ...ts.configs["recommended-requiring-type-checking"].rules,
  },
};

export const tsRules = {
  "@typescript-eslint/no-explicit-any": "off",
  "@typescript-eslint/no-var-requires": "off",
  "@typescript-eslint/explicit-module-boundary-types": "off",
  "@typescript-eslint/consistent-type-imports": [
    "warn",
    { prefer: "type-imports" },
  ],
  "@typescript-eslint/no-import-type-side-effects": "error",
  "@typescript-eslint/no-unused-vars": [
    "error",
    { varsIgnorePattern: "^_", argsIgnorePattern: "^_" },
  ],
  "@typescript-eslint/naming-convention": [
    "error",
    { selector: ["typeAlias", "typeParameter"], format: ["PascalCase"] },
    { selector: ["method"], format: ["camelCase"] },
    {
      selector: "variable",
      types: ["boolean"],
      format: ["PascalCase"],
      prefix: ["no", "is", "has", "should"],
      filter: { regex: "^_", match: false },
    },
  ],
};
```

### node

```js
export const nodeRules = {
  "no-console": "off",
};
```

### react

#### コンフィグ一覧

- `eslint-plugin-react`
- `eslint-plugin-react-hooks`

```js
export const reactRules = {
  "react/prop-types": "off",
  "react/react-in-jsx-scope": "off",
  "react/display-name": "error",
  "react/jsx-handler-names": [
    "error",
    {
      eventHandlerPrefix: "handle",
      eventHandlerPropPrefix: "on",
      checkLocalVariables: true,
      checkInlineFunction: true,
    },
  ],
  "react-hooks/rules-of-hooks": "error",
  "react-hooks/exhaustive-deps": "warn",
};

export const reactConfig = {
  files: ["**/*.{tsx,jsx}"],
  plugins: {
    react: react,
    "react-hooks": reactHooks,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
```

### next

#### コンフィグ一覧

- `eslint-config-next/core-web-vitals`

```js
export const nextConfig = {
  ...compat.extends("next/core-web-vitals"),
  rules: {
    "next/no-img-element": "off",
  },
};

export const nextRules = [
  {
    files: [
      "src/pages/**/*.tsx",
      "src/pages/api/**/*.ts",
      "src/app/**/{page,layout}.tsx",
      "src/app/**/{sitemap,robots,manifest}.{js,ts,jsx,tsx}",
    ],
    rules: {
      "import/no-default-export": "off",
      "@typescript-eslint/naming-convention": [
        "error",
        { selector: ["typeAlias", "typeParameter"], format: ["PascalCase"] },
        {
          selector: ["classProperty", "typeProperty", "method"],
          format: ["camelCase"],
        },
        {
          selector: "variable",
          types: ["boolean"],
          format: ["PascalCase"],
          prefix: ["is", "has", "should"],
        },
      ],
    },
  },
  {
    files: ["src/types/**/*.ts"],
    rules: {
      "@typescript-eslint/naming-convention": [
        "error",
        { selector: ["typeAlias", "typeParameter"], format: ["PascalCase"] },
        { selector: ["classProperty", "method"], format: ["camelCase"] },
        {
          selector: "variable",
          types: ["boolean"],
          format: ["PascalCase"],
          prefix: ["is", "has", "should"],
        },
      ],
    },
  },
];
```
