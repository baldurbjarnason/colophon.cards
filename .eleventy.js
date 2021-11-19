module.exports = function (eleventyConfig) {
  // Output directory: _site

  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("images");

  // Copy `css/fonts/` to `_site/css/fonts`
  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy("styles/source-serif-var");
  eleventyConfig.addPassthroughCopy("assets");
  let markdownIt = require("markdown-it");
  let options = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
  };

  eleventyConfig.setLibrary("md", markdownIt(options));
};
