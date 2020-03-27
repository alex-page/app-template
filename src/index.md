---
layout: page
eleventyComputed:
  menu:
  - text: "{{pkg.name}}"
    url: /
    icon: 🧪
  - text: GitHub
    url: "{{pkg.homepage}}"
    icon: "{% include 'icons/github.njk' %}"
  - text: Twitter
    url: "{{pkg.author.twitter}}"
    icon: "{% include 'icons/twitter.njk' %}"
  - text: "{{pkg.author.name}}"
    url: "{{pkg.author.url}}"
    icon: "{% include 'icons/author-logo.njk' %}"
  asideFooter: "{{pkg.name}} - v{{pkg.version}}"
noScriptMessage: The application requires JavaScript to work 💔.
---
# Hello world

Pretty dang coooool 🧙‍♂️

{{pkg.homepage | dump | safe}}
