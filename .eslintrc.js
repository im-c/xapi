module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    node: true
  },
  plugins: [
    "@typescript-eslint"
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "eol-last": ["error"],
    "@typescript-eslint/no-inferrable-types": ["off"],
    "@typescript-eslint/ban-ts-ignore": ["off"],
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/ban-types": ["off"]
  },
  ignorePatterns: ["test/*.js"]
};
