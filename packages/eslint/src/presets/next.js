import { baseConfig, baseIgnores, baseRules } from "../configs/base.js";
import { nextConfig, nextRules } from "../configs/next.js";
import { prettierRules } from "../configs/prettier.js";
import { reactRules } from "../configs/react.js";

export default [
  { ignores: baseIgnores },
  baseConfig,
  nextConfig,
  {
    rules: {
      ...baseRules,
      ...nextRules,
      ...reactRules,
      ...prettierRules,
    },
  },
];
