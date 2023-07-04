import { baseConfig, baseIgnores, baseRules } from '../configs/base.js';
import { tsConfig, tsConfigCJS, tsRules } from '../configs/typescript.js';
import { nodeConfig, nodeRules } from '../configs/node.js';
import { prettierRules } from '../configs/prettier.js';

export default [
  { ignores: baseIgnores },
  nodeConfig,
  baseConfig,
  tsConfigCJS,
  {
    rules: {
      ...baseRules,
      ...tsRules,
      ...nodeRules,
      ...prettierRules,
    },
  },
];
