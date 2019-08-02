module.exports = function () {
  return {
    'contentType': 'page',
    'description': 'This is how I create many content types in Eleventy.',
    'layout': 'page',
    'permalink': './{{ slug }}/index.html',
    'title': 'Eleventy Content Types Example'
  }
}