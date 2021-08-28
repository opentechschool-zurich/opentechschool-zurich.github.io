---
layout: default
title: Welcome
order: 1
ref: index
permalink: /
lang: en
---

# OpenTechSchool in Zürich

OpenTechSchool is a [wordlwide community initiative](http://www.opentechschool.org/) offering free programming workshops and meetups to technology enthusiasts of all genders, backgrounds, and experience levels. OTS’ main goal is to create a friendly learning environment where no one feels shy about asking any question. Everyone is invited to participate, whether as a coach or a learner, and get in contact to organize new OTS events.

## The Co-Learning groups

![Group at work]({{ site.baseurl }}/assets/images/ots-at-liip.jpg)

Each Tuesday (and in winter also on Sundays), the OpenTechSchool Co-Learning groups meet in the Liip Arena (and sometimes at other places…). We make our first steps in programming or improve our coding skills.

Currently we have two Co-Learning groups:

- Learn programming with Python, Java, Javascript, C(++) or …
- Practice your programming skills with Python, Javascript, Java, C(++) or …

Both groups meet at the same time in the same place.

Most of the time, we meet in the [Liip Arena](), but check in the events below where we will be meeting next.


We have a list of tuorials and other resources that we recommend:

- [Python]({{ site.baseurl }}/python)
- [C and C++]({{ site.baseurl }}/cpp)
- [Javascript]({{ site.baseurl }}/javascript)
- [Other Languages]({{ site.baseurl }}/other)
- [Tools & co]({{ site.baseurl }}/tools)

## Our sponsors

[![Liip Logo]({{ site.baseurl }}/assets/images/sponsors-liip.png)](https://liip.ch){: .sponsors-logo}


Thanks to [Liip](https://liip.ch) for generously hosting us!

## Next Events

Our next events are published in our [Meetup group](https://www.meetup.com/opentechschool-zurich):

<div id="meetupEvents"></div>
<script src="/js/meetup.js"></script>

## Our Activity

<div class="posts">
  {% for post in site.posts %}
    <article class="post">

      <h1><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h1>

      <div class="entry">
        {{ post.excerpt }}
      </div>

      <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Read More</a>
    </article>
  {% endfor %}
</div>
