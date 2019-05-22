const join = require('path').join
const tailwindJS = join(__dirname, './tailwind.js')

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx'
  ],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = {
  plugins: [
    require('tailwindcss')(tailwindJS),
    require('autoprefixer'),
    ...process.NODE_ENV === 'production' ? [purgecss] : []
  ]
}
