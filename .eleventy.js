module.exports = function(eleventyConfig) {
  
  /**
    * Add collections
    */
  
  // Return pages
  eleventyConfig.addCollection("pages", function(collection) {
    return collection.getAll().filter(function(item) {
      return item.data.contentType == "page";
    });
  });
  
  // Return articles
  eleventyConfig.addCollection("articles", function(collection) {
    return collection.getAll().filter(function(item) {
      return item.data.contentType == "article";
    });
  });
  
  // Return projects
  eleventyConfig.addCollection("projects", function(collection) {
    return collection.getAll().filter(function(item) {
      return item.data.contentType == "project";
    });
  });
  
  // Return testimonials
  eleventyConfig.addCollection("testimonials", function(collection) {
    return collection.getAll().filter(function(item) {
      return item.data.contentType == "testimonial";
    });
  });

  // Passthrough file copy
  eleventyConfig.addPassthroughCopy("src/css");
  
  return {
    dir: {
      data: "_data",
      includes: "_includes",
      input: "src",
      layouts: "_layouts",
      output: "build"
    }
  };
  
};