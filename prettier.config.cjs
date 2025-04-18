/**
 * @type {import('prettier').Config}
 */
module.exports = {
  semi: true,
  tabWidth: 2,
  printWidth: 80,
  endOfLine: 'lf',
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  arrowParens: 'avoid',
  bracketSameLine: false,
  plugins: ['prettier-plugin-tailwindcss'],
};
