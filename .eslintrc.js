// .eslintrc.js
module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 8,
  }, // to enable features such as async/await
  ignorePatterns: ["node_modules/*"], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: ["eslint:recommended"],
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ["**/*.js", "**/*.jsx"],
      settings: { react: { version: "detect" } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        "eslint:recommended",
        "plugin:react/recommended", // React rules
        "plugin:react-hooks/recommended", // React hooks rules
        "plugin:jsx-a11y/recommended", // Accessibility rules
        "plugin:prettier/recommended", // Prettier plugin
      ],
      rules: {
        "react-hooks/exhaustive-deps": "off",
        // No need to import React when using Next.js
        "react/react-in-jsx-scope": "off",

        // This rule is not compatible with Next.js's <Link /> components
        "jsx-a11y/anchor-is-valid": "off",

        "react/display-name": ["off", { ignoreTranspilerName: false }],

        // Why would you want unused vars?
        "@typescript-eslint/no-unused-vars": ["off"],

        "@typescript-eslint/no-explicit-any": "off",

        "react/no-unescaped-entities": "off",

        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",

        "prettier/prettier": ["error", {}, { usePrettierrc: true }],
      },
    },
  ],
};
