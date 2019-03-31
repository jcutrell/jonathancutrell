---
id: 211
title: Running Long One-Off Rails Console Commands Detached on Heroku
date: 2017-05-03T22:08:01+00:00
author: Jonathan Cutrell
templateKey: blog-post
tags:
  - Code
---
Ever wanted to run some kind of one-off thing without pushing up a rake task? I came across this today and needed to clear out some database records. This works wonderfully:

```
heroku run:detached rails runner 'SomeModel.long_running_method' -r heroku
```
