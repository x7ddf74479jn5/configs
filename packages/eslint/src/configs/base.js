import jsxA11y from "eslint-plugin-jsx-a11y";
import imp from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import sortDestructureKeys from "eslint-plugin-sort-destructure-keys";

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
