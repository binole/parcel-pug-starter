module.exports = {
  plugins: [
    require('autoprefixer'),
    require('@fullhuman/postcss-purgecss')({ content: ['./src/**/*.pug'] }),
  ],
};
