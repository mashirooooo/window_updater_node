module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    "standard"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "@typescript-eslint"
  ],
  rules: {
    semi: ["error", "always"],
    "no-console": "off",
    quotes: ["error", "double"]
  }
};
