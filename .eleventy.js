const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  // Output directory: _site

  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("_headers");

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
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addCollection("feedPosts", function (collectionApi) {
    // get unsorted items
    return collectionApi.getFilteredByTag("posts").slice(-8).reverse();
  });
  eleventyConfig.setLibrary("md", markdownIt(options));
  return {
    markdownTemplateEngine: "njk",
  };
};
