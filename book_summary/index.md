---
layout: page
title: Latest Summaries
excerpt: "Sportsman turned into Programmer and Mathematician"
search_omit: true
---

<ul class="post-list">
{% for post in site.categories.book_summary limit:10 %}
<li><article><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span>{% if post.excerpt %} {% endif %}</a></article></li>
{% endfor %}
</ul>
