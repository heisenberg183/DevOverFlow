import { fileURLToPath } from "node:url";

import { FlatCompat } from "@eslint/eslintrc";

const __dirname = dirname(fileURLToPath(import.meta.url));

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "plugin:unicorn/recommended",
      "plugin:import/recommended",
      "plugin:playwright/recommended",
      "plugin:prettier/recommended",
      "prettier",
    ],
    plugins: ["simple-import-sort"],
    rules: {
      camelcase: [0, { properties: "never" }],
      "no-undef": "off",
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error",
      "unicorn/no-array-callback-reference": "off",
      "unicorn/no-array-for-each": "off",
      "unicorn/no-array-reduce": "off",
      "unicorn/prevent-abbreviations": [
        "error",
        {
          allowList: {
            e2e: true,
          },
          replacements: {
            props: false,
            ref: false,
            params: false,
          },
        },
      ],
    },
    ignorePatterns: ["components/ui/**"],
    overrides: [
      {
        files: ["*.ts", "*.tsx"],
        rules: {
          "no-undef": "off",
        },
      },
    ],
  }),
];

export default eslintConfig;
