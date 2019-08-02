module.exports = function () {

  const title = 'Eleventy Content Types Example'
  const description = 'This is how I create many content types in Eleventy.'
  const year = new Date().getFullYear()

  return {
    'contentType': 'page',
    'copyright': `&copy; ${year} ${title}. All rights reserved.`,
    'description': description,
    'layout': 'page',
    'permalink': './{{ slug }}/index.html',
    'title': title
  }
}