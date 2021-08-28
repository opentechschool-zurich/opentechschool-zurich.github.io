---
layout: default
title: Wilkommen
order: 1
ref: index
permalink: /willkommen
lang: de
---

# OpenTechSchool in Zürich

OpenTechSchool ist eine [weltweite Community-Initiative](http://www.opentechschool.org/), die kostenlose Programmier-Workshops und Meetups für Technologiebegeisterte aller Altersgruppen, Hintergründe und Erfahrungsstufen anbietet. Das Hauptziel von OTS ist es, eine freundliche Lernumgebung zu gestalten, in der sich niemand scheut, Fragen zu stellen. Jeder ist herzlich eingeladen, teilzunehmen – als Coach oder Lernender – und auch neue Veranstaltungen vorzuschlagen und zu organisieren.

## Die Co-Learning Gruppen

![Am Arbeiten](assets/images/ots-at-liip.jpg)

Jeden Dienstag (und im Winter auch sonntags) trifft sich die OpenTechSchool Co-Learning-Gruppe in der Liip Arena (und manchmal an anderen Orten…). Wir machen unsere ersten Schritte in der Programmierung oder verbessern unsere Programmierkenntnisse.

Derzeit haben wir zwei Co-Learning-Gruppen:

- Programmieren lernen mit Python, Java, Javascript, C(++) oder …
- Üben Sie Ihre Programmierkenntnisse mit Python, Javascript, Java, C(++) oder …

Beide Gruppen treffen sich zur gleichen Zeit am gleichen Ort.

Meistens treffen wir in der [Liip Arena](), prüfe aber in der Terminliste wo wir treffen.

We have a list of tuorials and other resources that we recommend:

- [Python]({{ site.baseurl }}/python)
- [C and C++]({{ site.baseurl }}/cpp)
- [Javascript]({{ site.baseurl }}/javascript)
- [Other Languages]({{ site.baseurl }}/other)
- [Tools & co]({{ site.baseurl }}/tools)

## Unsere Sponsoren

[![Liip Logo]({{ site.baseurl }}/assets/images/sponsors-liip.png)](https://liip.ch){: .sponsors-logo}

Danke an [Liip](https://liip.ch) dafür, dass sie uns die Arena zu verfügung stellen!

## Nächste Termine

Wir veröffentlichen unsere nächsten Termine in unserer [Meetup-Gruppe](https://www.meetup.com/opentechschool-zurich):

<div id="meetupEvents"></div>
<script src="{{ site.baseurl }}/js/meetup.js"></script>

## Das was wir machen

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
