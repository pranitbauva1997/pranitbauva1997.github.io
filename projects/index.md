---
layout: page
title: Projects
excerpt: "A description of all the projects"
search_omit: true
---

<ul class="post-list">
{% for post in site.categories.projects %}
  <li><article><h4><a href="{{ post.link }}">{{ post.title }}</a></h4><span class="excerpt">{{ post.content }}</span></article></li>
{% endfor %}
</ul>
