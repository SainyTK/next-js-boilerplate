const NextI18Next = require('next-i18next').default;

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['th'],
  localeSubpaths: {
    en: 'en',
    th: 'th'
  }
})

module.exports = NextI18NextInstance;
