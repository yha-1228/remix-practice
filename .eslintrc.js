/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "@remix-run/eslint-config/jest-testing-library",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  env: {
    "cypress/globals": true,
  },
  plugins: ["cypress", "tailwindcss"],
  rules: {
    // JavaScript, TypeScript
    "dot-notation": "warn",
    "prefer-const": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        ignoreRestSiblings: true,
        destructuredArrayIgnorePattern: "^_",
      },
    ],

    // react
    "react/react-in-jsx-scope": "off",
    "react/jsx-no-useless-fragment": ["warn", { allowExpressions: true }],
    "react/jsx-curly-brace-presence": "warn",
    "react/jsx-boolean-value": "warn",
    "react/prop-types": "off",
    "react/self-closing-comp": "warn",
    "react/jsx-fragments": "warn",
    "react/hook-use-state": "warn",

    // import
    "import/newline-after-import": ["warn", { count: 1 }],
    "import/no-cycle": "error",
    "import/order": [
      "warn",
      {
        "newlines-between": "never",
        groups: [
          "builtin",
          "external",
          "internal",
          "unknown",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        pathGroups: [
          {
            pattern: "react",
            group: "builtin",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  // we're using vitest which has a very similar API to jest
  // (so the linting plugins work nicely), but it means we have to explicitly
  // set the jest version.
  settings: {
    jest: {
      version: 28,
    },
  },
};
