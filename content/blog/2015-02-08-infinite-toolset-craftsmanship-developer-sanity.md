---
id: 152
title: The Infinite Toolset, Craftsmanship, and Developer Sanity
date: 2015-02-08T18:34:18+00:00
author: Jonathan Cutrell
templateKey: blog-post


dsq_thread_id:
  - "3497216912"
tags:
  - Habits

---
I've been using the metaphor of blacksmith and cobbler recently in discussions about craftsmanship. Why?

Blacksmiths and cobblers are renowned as dedicated to their craft. Repeating the motions every day. They both take raw materials, perform a process of actions using a set of tools to refine those materials, and consistently produce something of practical value that is ready to use. For blacksmiths, the tools and materials are quite different from the cobbler's, but they share a lot of the same fundamental disciplines in practice.

With a little bit of Google research, you can find that a blacksmith today uses basically the same tools as blacksmiths before the industrial revolution, and those tools went largely unchanged for centuries. Of course, the Industrial Revolution changed our reliance on the local blacksmith, but the toolset of any blacksmith of any period would be quite similar to any blacksmith from any other period.

<img src="http://hackingtheimpossible.com/wp-content/uploads/2015/02/5249580870_b64a07d62a_b.jpg" alt="5249580870_b64a07d62a_b" width="1024" height="683" class="alignnone size-full wp-image-153" />

Similarly, the cobbler's tools have remained relatively unchanged. When new tools have come into the scene, they come by absolute necessity. The blacksmith and the cobbler wouldn't spend all of their time searching out new tools, constantly on the lookout for something to bend iron in a new way. More likely, the blacksmith would always be on the lookout for great scrap iron, and the cobbler on the lookout for good deals on leather, or building relationships with the people who fashion the cloth and buy the boots he makes.

<h2>We have a tooling problem.</h2>
Notice that neither the blacksmith nor the cobbler are careless about their tools. Both of them are highly focused, and highly skilled with their tools, and actually rely quite heavily on them. Their jobs depend on having a reliable toolset that they are experts at using.

I think developers today have a fundamental problem with tooling, and it's simple: <strong>we are constantly shopping for new tools.</strong>

You might be thinking, "I'm not shopping - these tools are free!"

But that's not totally true. Certainly, free and open-source projects don't cost you the currency available in your bank account. But they cost you another, perhaps more valuable, currency: time. You spend time looking, adopting, and deprecating your tools. You spend time reading blogs and books that compare tools, just for the sake of picking one. You spend time switching your code from one set of tools to another. You spend time retraining muscle memory, sometimes to accomplish the same goals.

<h3>Admission: this analogy isn't perfect.</h3>
Of course, we have a different trade from blacksmiths and cobblers. Our trade requires that we do, at a much faster pace, adapt our toolset to new demands in our industry. And perhaps it's because the product we make is virtual, not physical - the materials we use are thoughts, not iron and leather. And, it's also important to know that picking the right tools absolutely has an undeniable value proposition for your work. But the underlying truth is this: our constant shopping for new tools costs us that precious currency of time. The time you spend browsing the endless aisles of new programming libraries is time that could be spent becoming an expert craftsman, learning your existing toolset inside out.

I know, it's a hard problem to solve. I know, it seems like not knowing about a particular tool or another might put you behind the ball. So I'm going to make a very clear distinction here:

<strong>I'm not saying to bury your head in the sand, and never investigate new tools.</strong> Some very smart, influential programmers recommend learning a new language every year. I don't disagree; this keeps your brain sharp, and helps you stay aware in a constantly changing landscape. What I am saying is this: if you are constantly trying to <em>master</em> something new, you'll never master anything. Instead, you should be consistently <em>aware</em> of new things, while focusing on mastering <em>few</em> things.

<h2>When to pick tools: 6 guidelines</h2>
<em>Note: this is not a cohesive list of the only times you should pick tools, but it should give you some idea of how to think.</em>
<ol>
<li>When you've got a problem that is proveably unsolvable or otherwise extremely inefficient to solve with current tools, especially if that problem has already been solved elsewhere. (If you're a C programmer and you need to serve a webpage, it's probably a good idea to learn about an existing tool like Apache instead of rewriting a web server in C.)</li>
<li>When switching provides undeniable and exponential long-term gains. For example, switching to a new text editor that will increase your productivity every moment you are using it (I did this recently by moving to vim).</li>
<li>When the tool is an easy win. Pick tools that are easy to adopt and provide obvious value without much investment.</li>
<li>Lest we be hacked, upgrade your tools when there are security vulnerabilities in that tool.</li>
<li>If You rely on your tool having adequate support or community involvement, it might be a good idea to choose a new tool when an old tool's support or community become dormant. With that said, choose based on your values in the first place. If the community is an extremely important value to you in the long run, only choose to invest time into tools that have a thriving, vibrant, and committed community.</li>
<li>When the tool stacks well on your existing toolset. For example, if you have already learned HTML and CSS, it's probably a good idea to learn JavaScript, as the gains you receive by learning JavaScript are naturally complemented and increased by your knowledge of HTML and CSS. Other stacks you could learn:
<ul>
  <li>You know Assembler? Learn C.</li>
  <li>You know PHP? Learn Laravel.</li>
  <li>You know LISP? Try out emacs.</li>
  <li>You know Ruby? Learn about Rack or mruby.</li>
  <li>You know Objective-C? Look into Swift.</li>
  <li>You know JavaScript? Learn about how Node/IO.js works.</li>
  <li>You know Java? Learn about virtualization, or learn Scala.</li>
  <li>You know Apache? Learn some Linux sysadmin basics.</li>
</ul>
</li>
</ol>

Pro tip: Be certain that you differentiate your <em>learning</em> efforts from your <em>tool-picking</em> efforts. You might choose to learn a new language that doesn't stack well with your current toolset, just to expand your brain's ability to adapt and think in new patterns. This has value, even if you never use that language as an actual tool. This is the whole idea of <a href="https://developertea.com/episodes/6877">code kata</a>.

<h2>5 step guide to picking tools</h2>
<ol>
<li>Look at your materials (read: consumer devices, browsers, iOS APIs, your unique service offering, etc)</li>
<li>Look at the available toolset (languages, frameworks, hardware, outsourced efforts)</li>
<li>Imagine your product (you fill in the parentheses on this one)</li>
<li>Pick the tools that can turn your materials into your product (make your best educated guess)</li>
<li>Repeat every 2-3 years, keeping a majority of the tools you picked previously, and dropping only the ones that didn't work so well.</li>
</ol>

<h2>Conclusion</h2>
You use your toolset every day; it's natural to want to refine that toolset. But changing your toolset constantly might mean that instead of spending time becoming a craftsman, you are just wasting your time constantly tool shopping. Learn to say no when your tools are perfectly capable of doing the job you need for them to do, and learn how to properly adopt new tools when the time and situation are right.
