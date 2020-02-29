const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    content: [
      './components/**/*.js',
      './pages/**/*.js',
      './components/**/*.jsx',
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];
module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss',
    'autoprefixer',
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};
