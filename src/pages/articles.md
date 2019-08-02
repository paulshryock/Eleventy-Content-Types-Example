---
title: 'Articles'
slug: articles
description: Check out our articles
---
{%- for post in collections.articles %}
- [{{ post.data.title }}]({{ post.url }})
{%- endfor %}