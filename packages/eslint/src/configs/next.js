import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

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
