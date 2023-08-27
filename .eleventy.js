module.exports = function (eleventyConfig) {
  // Copy the 'img/' directories 
  eleventyConfig.addPassthroughCopy("src/img");
  
  return {
    dir: {
      input: "src",
      output: "public",
    },
    markdownTemplateEngine: "njk"
  };
};