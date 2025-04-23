const pluginSitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function (eleventyConfig) {
  // Pass through directories
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/scripts"); // Scripts directory

  // Sitemap plugin setup
  eleventyConfig.addPlugin(pluginSitemap, {
    sitemap: {
      hostname: "https://www.macopainting.com",
    },
  });

  return {
    dir: {
      input: "src",
      includes: "includes",
      layouts: "layouts",
      output: "_site",
    },
    pathPrefix: "/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    templateFormats: ["njk", "html", "xml"], // Add XML support here
    // Force Eleventy to include all Nunjucks pages (index.html, sitemap.xml)
    eleventyComputed: {
      permalink: (data) => {
        if (data.page.filePathStem && data.page.inputPath.endsWith(".njk")) {
          if (data.page.filePathStem.endsWith("sitemap.xml")) {
            return "/sitemap.xml";
          }
          return data.page.filePathStem + "/index.html";
        }
        return false;
      },
    },
  };
};
