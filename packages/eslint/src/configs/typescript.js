import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export const tsRules = {
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-var-requires': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
  '@typescript-eslint/no-import-type-side-effects': 'error',
  '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
  '@typescript-eslint/naming-convention': [
    'error',
    { selector: ['typeAlias', 'typeParameter'], format: ['PascalCase'] },
    { selector: ['method'], format: ['camelCase'] },
    {
      selector: 'variable',
      types: ['boolean'],
      format: ['PascalCase'],
      prefix: ['no', 'is', 'has', 'should'],
      filter: { regex: '^_', match: false },
    },
  ],
};

export const tsConfig = {
  files: ['**/*.{ts,mts,cts,tsx}'],
  plugins: {
    '@typescript-eslint': ts,
  },
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: './tsconfig.json',
    },
  },
  rules: {
    ...ts.configs['eslint-recommended'].rules,
    ...ts.configs['recommended'].rules,
    ...ts.configs['recommended-requiring-type-checking'].rules,
  },
};

export const tsConfigCJS = {
  // files: ["**/*.{ts,mts,cts,tsx}"],
  // plugins: {
  //   "@typescript-eslint": ts,
  // },
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      project: './tsconfig.json',
    },
  },
  // rules: {
  //   ...ts.configs["eslint-recommended"].rules,
  //   ...ts.configs["recommended"].rules,
  //   ...ts.configs["recommended-requiring-type-checking"].rules,
  //   ...tsRules,
  // },
};
