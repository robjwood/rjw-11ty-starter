module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  
  // Copy the 'images' directory 
  eleventyConfig.addPassthroughCopy("src/images");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};