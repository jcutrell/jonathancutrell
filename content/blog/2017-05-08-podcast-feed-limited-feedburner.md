---
id: 212
title: Podcast Feed Limited by Feedburner
date: 2017-05-08T15:49:33+00:00
author: Jonathan Cutrell
templateKey: blog-post
tags:
  - Code
  - Podcasting
---
The last two episodes of Developer Tea haven't shown any downloads, so naturally I reached out to Simplecast to get an answer.

While waiting, I kept trying to diagnose the feed directly, having totally forgotten that the RSS feed itself was being managed by Feedburner.

Unfortunately, Feedburner has a limit to the size of feed it will parse - specifically 1024K.

Luckily, Apple has made managing podcasts easy; updating an RSS feed is as simple as entering it into a field in the Podcasts Connect interface. Goodbye, Feedburner.
