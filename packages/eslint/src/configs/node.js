import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

export const nodeConfig = {
  // ...compat.extends("plugin:node/recommended"),
  files: ["**/*.js"],
  languageOptions: {
    sourceType: "commonjs",
  },
  // settings: {
  //   node: {
  //     // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-import.md#tryextensions
  //     tryExtensions: [".js", ".json", ".node", ".ts", ".jsx", ".tsx"],
  //   },
  // },
};

export const nodeRules = {
  "no-console": "off",
};
