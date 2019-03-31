---
id: 57
title: 'My Solution for Quantified Self: Prompted Data Aggregation'
date: 2013-10-30T16:55:03+00:00
author: JCutrell
templateKey: blog-post

dsq_thread_id:
  - '3018589615'
tags:
  - Thoughts
---

<p>The quantified self is really quite a hot topic. Ivan Kirigin talks about it in his post <a href="http://blog.kirigin.com/personal-analytics">here</a> as a potential startup idea. I’ve created something simple I’d like to share with all of you.</p>

<p>It is really quite simple, but also very flexible. Before I explain what it is, I’ll cover some of the conceptual reasoning behind the solution.</p>

<p>I believe that to do lists are generally quite hard to deal with, and overall don’t help my productivity. They require me to return to them over and over throughout the day, managing them, and often only serve as a place to mark things as done (rather than a place to ensure that I am being productive).</p>

<p>However, I don’t mind prompts. I don’t mind alerts. Certainly too many of irrelevant alerts can be annoying. But if I am motivated to use the alerts, I will.</p>

<p>As a developer, I am used to constant feedback. I am used to my machine telling me when I have compile errors. I’m used to having <u>reports</u>. These reports are what I take action on. To-do lists stay dormant until I put effort into them. The same can be said for calorie tracking applications. The same can be said for most tracking applications.</p>

<p>So, I created a small script to ask me a random question. I set up a YAML file to track my answers and the dates of my answers. I then created a simple plist file to load the script every 8 minutes via <code>launchctl</code>. This will give me about 50 data points per workday.</p>

<p>While they may be simple data points, and while the questions will repeat, the concept is simple: my computer asks me a question, and tracks my answer for me. My answers can be arbitrary; I also have two types of questions. One is directly actionable, the other is subjective. (“Tell your wife you love her.” vs “What have you eaten today?”)</p>

<p>Here is the Ruby code:</p>

```ruby
#!/Users/jonathancutrell/.rvm/rubies/ruby-2.0.0-p247/bin/ruby
require 'yaml'
y = YAML::load_file(File.join(__dir__, "stretchr.yml"))
if (rand(10).to_f/10.0).round == 1
    @msgs = y["msgs"]
    @msg = @msgs.sample
    ret = `osascript -e 'set question to display dialog "#{@msg}" buttons {"Nope", "Did it"}'`
    ans = ret.split(":")[1]
else
    @questions = y["questions"]
    @msg = @questions.sample
    ret=`osascript -e 'set question to display dialog "#{@msg}" default answer ""' -e 'text returned of result' 2&gt;/dev/null`
    ans = ret
end
@answers = y["answers"]
@answers[@msg] ||= []
@answers[@msg]&lt;&lt; [ ans, Time.now ]
File.open('stretchr.yml', 'w+') do |file|
  puts file.write(y.to_yaml)
end
```

<p>And here’s the yaml file.</p>

```
---
msgs:
- Stand up and stretch.
- Live healthy, think healthy
- Tell your wife you love her.
- Do something to show appreciation to your coworkers and employees.
- Text a family member.
- Value, now. Stop doing things that don't matter.
- Have you kissed your wife today?
questions:
- Is your desk clean?
- Have you had 10 minutes of quiet thinking time today?
- What word are you thinking of right now?
- Who was the last person you spoke to?
- Is Hacker News open?
- What are you building now for tomorrow?
- Text a family member.
- What have you eaten today?
- On a scale from 1 to 10, how energetic are you?
- On a scale from 1 to 10, how productive do you feel today?
- How many hours did you sleep last night?
answers: {}
```

<p>And finally the plist.</p>

```
&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd"&gt;
&lt;plist version="1.0"&gt;
&lt;dict&gt;
    &lt;key&gt;Label&lt;/key&gt;
    &lt;string&gt;org.jcutrell.stretchr&lt;/string&gt;
    &lt;key&gt;ProgramArguments&lt;/key&gt;
    &lt;array&gt;
        &lt;string&gt;/Users/jonathancutrell/stretchr.sh&lt;/string&gt;
    &lt;/array&gt;
    &lt;key&gt;StartInterval&lt;/key&gt;
    &lt;integer&gt;480&lt;/integer&gt;
&lt;/dict&gt;
&lt;/plist&gt;
```

<p>Some of these you can clearly see come from personal goals. Some of them, though, are much more related to aggregating some sort of arbitrary data. Later, I hope to gain some kind of insights from this into very specific areas of my life.</p>

<p>Notice the name <code>stretchr.sh</code> - this was originally built to be a simple reminder to stand up and stretch at my desk. I would go hours on end without stretching simply because it wasn’t on my mind. So many things we should, could, and want to do go undone because we simply let them slip our mind. I’m interested to see how much of an impact these more consistent reminders will have.</p>

<p>It’s obviously very easy to add new data points. Of course, as you add more questions or imperative messages, it’s more likely that you will have more time between data points on average, assuming an even distribution of the random range generator over time.</p>

<p>It would be easy to take this YAML data somewhere else, like for instance to JSON to be fed into something like D3:</p>

```
require 'yaml'
require 'json'
y = YAML::load_file(File.join(__dir__, "stretchr.yml")) # I think this may be v&gt;=2.0
puts y.to_json
```

<p>Interested in doing something similar? Or interested in making this more than it is? Let me know. I’d love to let this grow.</p>
