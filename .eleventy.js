module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/scss/");
  
  // Copy the 'images' directory 
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/fonts");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};