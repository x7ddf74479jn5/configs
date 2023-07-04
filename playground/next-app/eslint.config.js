const configs = require('@x7ddf74479jn5/eslint-config');

module.exports = configs.next;

// const { FlatCompat } = require("@eslint/eslintrc");
// const prettier = require("eslint-config-prettier");
// const ts = require("@typescript-eslint/eslint-plugin");
// const tsParser = require("@typescript-eslint/parser");

// const compat = new FlatCompat();

// module.exports = [
//   ...compat.extends("next/core-web-vitals"),
//   {
//     files: ["src/**/*.ts", "src/**/*.tsx"],
//     languageOptions: {
//       parser: tsParser,
//     },
//     plugins: {
//       "@typescript-eslint": ts,
//     },
//     rules: {
//       ...ts.configs["recommended"].rules,
//       ...ts.configs["eslint-recommended"].rules,
//     },
//   },
//   {
//     files: ["src/**/*.tsx"],
//     ignores: ["src/components/Link.tsx"],
//     rules: {
//       "no-restricted-imports": [
//         "error",
//         {
//           paths: ["next/link"],
//         },
//       ],
//     },
//   },
//   {
//     rules: {
//       "import/no-duplicates": "error",
//       ...prettier.rules,
//     },
//   },
// ];
