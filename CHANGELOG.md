# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

<!--
## X.X.X - XXXX-XX-XX - XXXXXX

### Added
### Changed
### Deprecated
### Removed
### Fixed
### Security
-->

## 1.1.0 - 2019-08-02 - Home page layout

### Added
- Add screenshot (`screenshot.png`)
- Add site description (`/_data/site.js`, `/_includes/header.liquid`)
- Add more styles: (`/src/css/*.css`)
- Add content dates for chronological post order
- Add home page layout (`/src/_layouts/home.liquid`)
- Add footer include: (`/src/_includes/footer.liquid`)

### Changed
- Update content permalinks
- Update navigation permalink

## 1.0.0 - 2019-08-02 - Initial release

### Added
- Add Changelog, Gitattributes, Gitignore, License, Readme
- Initialize npm
- Install Eleventy (`^0.8.3`)
- Configure Eleventy: data, includes, input, layouts, output (`.eleventy.js`)
- Add npm scripts
- Add content collections: pages, articles, projects, testimonials (`.eleventy.js`)
- Add content: pages, articles, projects, testimonials (`/src/*/*.md`)
- Add content directory data files: (`/src/*/*.11tydata.js`)
- Add global data files: (`/src/_data/*.js`)
- Add layouts: (`/src/_layouts/*.liquid`)
- Add includes: (`/src/_includes/*.liquid`)
- Add styles: (`/src/css/*.css`)
- Add Passthrough file copy (`.eleventy.js`)