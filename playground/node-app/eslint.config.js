const configs = require("@x7ddf74479jn5/eslint-config");

module.exports = [
  ...configs.node,
  {
    ignores: ["docs", "idea"],
  },
];

// import configs from "@x7ddf74479jn5/eslint-config";

// export default configs.node;

// const { FlatCompat } = require("@eslint/eslintrc");
// const prettier = require("eslint-config-prettier");

// const compat = new FlatCompat();

// module.exports = [
//   // ...compat.extends("next/core-web-vitals"),
//   {
//     rules: {
//       ...prettier.rules,
//     },
//   },
// ];
