module.exports = {
  printWidth: 80,
  tabWidth: 2,
  jsxSingleQuote: true,
  singleQuote: true,
  semi: true,

  importOrder: [
    "^react$",
    "^(?!components)(?!context)(?!formio)(?!forms)(?!hooks)(?!images)(?!mocks)(?!pages)(?!routes)(?!store)(?!theme)(?!utils)(?!\\.).*$",
    "^(?!\\.).*$",
    "^\\.",
    "^.*$",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
};
