---
id: 155
title: 'Quick Tip: Serve Parse Files via HTTPS'
date: 2014-08-22T16:56:32+00:00
author: Jonathan Cutrell
templateKey: blog-post


dsq_thread_id:
  - "3011813711"
tags:
  - Thoughts

---
<p>Trying to serve your Parse files via SSL/HTTPS? You’ll notice that you can’t force it, and Parse doesn’t support this via their file URL scheme. But you can use the same trick Parse uses on <a href="http://www.anypic.org/">Anypic</a>.</p>

<p>Replace <code>http://</code> with <code>https://s3.amazonaws.com/</code>.</p>

<p>So if you start with this:</p>

<pre><code>http://files.parsetfss.com/b05e3211-bf8b-.../tfss-fa825f28-e541-...-jpg
</code></pre>

<p>The final url will look something like this:</p>

<pre><code>https://s3.amazonaws.com/files.parsetfss.com/b05e3211-bf8b-.../tfss-fa825f28-e541-...-jpg
</code></pre>

<p>In ruby, that’s:</p>

<pre><code>url.gsub "http://", "https://s3.amazonaws.com/"
</code></pre>

<p>In JavaScript:</p>

<pre><code>var url = // your url...
var subbedUrl = url.replace("http://", "https://s3.amazonaws.com/");
</code></pre>

<p>Boom - fully secure Parse files.</p>

<p>You’re welcome.</p>
