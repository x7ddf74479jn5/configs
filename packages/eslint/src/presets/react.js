import { baseConfig, baseIgnores, baseRules } from '../configs/base.js';
import { reactConfig, reactRules } from '../configs/react.js';
import { prettierRules } from '../configs/prettier.js';
import { tsConfig, tsRules } from '../configs/typescript.js';

export default [
  { ignores: baseIgnores },
  baseConfig,
  tsConfig,
  reactConfig,
  {
    rules: {
      ...baseRules,
      ...tsRules,
      ...prettierRules,
    },
  },
  {
    files: ['**/*.{tsx,jsx}'],
    rules: reactRules,
  },
];
