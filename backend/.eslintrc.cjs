module.exports = {
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended', // Must be the last one.
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json'],
  },
  env: {
    node: true,
  },
  root: true,
  rules: {
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.mts', '*.cts', '*.jsx', '*.tsx'],
      rules: {
        'no-undef': 'off', // The checks it provides are already provided by TypeScript.
      },
    },
  ],
};
