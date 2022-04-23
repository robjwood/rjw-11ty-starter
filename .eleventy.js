module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/scss/");
  
  // Copy the 'images' directory 
  eleventyConfig.addPassthroughCopy("src/images");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};