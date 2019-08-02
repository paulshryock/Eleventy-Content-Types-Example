---
title: 'Projects'
slug: projects
description: Check out our projects
---
{%- for post in collections.projects %}
- [{{ post.data.title }}]({{ post.url }})
{%- endfor %}