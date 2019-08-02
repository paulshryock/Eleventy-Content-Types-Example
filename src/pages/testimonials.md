---
title: 'Testimonials'
slug: testimonials
description: Check out our testimonials
---
{%- for post in collections.testimonials %}
- [{{ post.data.title }}]({{ post.url }})
{%- endfor %}