# Eleventy Content Types Example

This is how I create many content types in Eleventy.

- Install Eleventy (`^0.8.3`)

  ```bash
  npm init
  npm i --save-dev @11ty/eleventy
  ```
  
- Configure Eleventy: data, includes, input, layouts, output (`.eleventy.js`)

  ```javascript
  module.exports = function(eleventyConfig) {
  
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
  ```
  
- Add content collections: pages, articles, projects, testimonials (`.eleventy.js`)

  ```javascript
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

    // ...

  };
  ```

- Add content: pages, articles, projects, testimonials (`/src/*/*.md`)

  - `/src/pages/home.md`
  - `/src/pages/articles.md`
  - `/src/pages/projects.md`
  - `/src/pages/testimonials.md`
  - `/src/pages/about.md`
  - `/src/pages/contact.md`
  - `/src/articles/article-1.md`
  - `/src/articles/article-2.md`
  - `/src/articles/article-3.md`
  - `/src/projects/project-1.md`
  - `/src/projects/project-2.md`
  - `/src/projects/project-3.md`
  - `/src/testimonials/testimonial-1.md`
  - `/src/testimonials/testimonial-2.md`
  - `/src/testimonials/testimonial-3.md`

- Add content directory data files: (`/src/*/*.11tydata.js`)

  - `/src/pages/pages.11tydata.js`
  - `/src/articles/articles.11tydata.js`
  - `/src/projects/projects.11tydata.js`
  - `/src/testimonials/testimonials.11tydata.js`

- Add global data files: navigation, site (`/src/_data/*.js`)
- Add layouts: global, page, article, project, testimonial, home (`/src/_layouts/*.liquid`)
- Add includes: header, footer, navigation, seotitle, styles (`/src/_includes/*.liquid`)
- Add styles: (`/src/css/site.css`)
- Add Passthrough file copy (`.eleventy.js`)

  ```javascript
  module.exports = function(eleventyConfig) {

    // ...

    // Passthrough file copy
    eleventyConfig.addPassthroughCopy("src/css");

    // ...

  };
  ```

![Screenshot](https://raw.githubusercontent.com/paulshryock/Eleventy-Content-Types-Example/master/screenshot.png)
