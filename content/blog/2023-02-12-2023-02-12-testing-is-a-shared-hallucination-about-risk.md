---
title: Testing Is A Shared Hallucination About Risk
date: 2023-02-12T12:32:12+04:00
---
Today in the Guild company chat, someone brought up the [[Ship of Theseus]]. The idea is simple: take a given ship. If you replace one part, most reasonable people would say that's still the same ship.

But now, replace every part, one by one. Even better, replace some parts twice.

Is it still the "same ship"?

There isn't a correct answer to this problem. A deconstructionist would say there is no ship. In fact, there's also no wood. Everything is just molecules, and the fact that they happen to be near one another is not scientifically meaningful. The ship, therefore, exists _only in your mind._ You _give_ it meaning, and therefore the only answer is the one you provide meaning to.

The hallucination trick is that we have a shared meaning of the ship - that any other given person you ask about the ship would agree that indeed, that is the Ship of Theseus. The collective agreement on the meaning makes it something more than a simple hallucination. But, the hallucination breaks down differently under change; _"is it still the same ship?"_ has less uniform adherence than the original concept of the ship.


## Testing doesn't exist
This discussion reminded me of another discussion I had recently with a colleague about test strategies.

Most software engineers have as many or more opinions about testing as they do about programming paradigms or cuisine. What shape is your testing strategy? Is it a trophy or a pyramid? Do you do real E2E or do you stub out the services? What is your coverage percentage? Do you test integrations directly? Do you test your private code? Unit tests? Feature tests? Do you automate performance regressions?

Don't get me wrong - these are excellent conversations to have. Often, the most seasoned engineers I know spend more time focusing on writing tests than the code being tested. (This lines up with the reality that code is not the bulk of the work you do - it is just the outcome.)

But if you put two engineers at a bar to resolve to the best testing strategy, there's a close-to-certain chance it will end in a stalemate. Add a third engineer to the mix and you've almost created a perpetual motion machine.

Testing doesn't exist, in the same way that the ship doesn't exist; not because we're replacing the code constantly, but because testing in all of these formats is essentially "more code" (or, in some cases, more button clicking).

What exactly is it that exists? What are the molecules here? Or, what is a more useful layer of abstraction that the 3 engineers at the bar can settle with?

## Testing As A Materials Tool
The concept that "testing doesn't exist" shouldn't be incendiary - of course the shared concept does exist. However, what happens if, like Theseus's Ship, we replace some unit tests with some other kind of test... or, more to the point, if we adopt a strict type-safe approach that eliminates the need for some of our unit tests... are we still testing?

Instead of thinking about testing as a primary mode, it is more useful to think about testing as a variety of tooling. Your intent, then, is to think about and manage risk.

How do you decide whether to do a unit test? Risk modeling.
How do you decide whether to do manual tests? Risk modeling.

What about feature tests? Trophy? It's all the same. The value of testing is to reduce risk.

## "But Testing isn't Just About Risk"

"It's also great documentation," you say, sitting back and sipping your pourover. Yep, sure - the same concept exists here, though! Documentation exists to _reduce risk!_

Your new engineer onboarding and reading tests to understand what's happening? That learning reduces the risk that they will change something in a dangerous or unproductive way.

So, even for tests that don't directly increase confidence (which carries a loosely inverse correlation to risk), they are still also reducing risk by creating clarity around how your code works to other human beings.

## Okay... Enlightenment achieved, everything must be about risk?
No. This is just a useful mental model and thought exercise. I don't actually believe documentation and testing don't exist. This is just a way to determine whether your tests and documentation are actually useful or not.

If your tests are not reducing risk directly or indirectly, what are they doing?

## Testing as a Cost Center
Testing in this model can be considered a cost center. If you could achieve equivalent risk reduction _without_ automated or manual testing, why wouldn't you?

Many cost centers are risk reduction mechanisms. Some types of employee benefits (but not all) fit into this category.

For example, unlimited vacation time might be used to reduce risk of employee turnover. This is two sides of the same coin; vacation time is also correlated with higher productivity, which also has a positive effect on retention. Calibrating the amount of vacation time, then, becomes an exercise in understanding risk. Too little vacation and you risk burnout and turnover; too much vacation and you theoretically risk too much interruption. The "right" amount is dependent on many factors.

As it turns out, you can nearly 1-1 replace words in the above paragraph with testing. Let's try it:

> For example, testing might be used to reduce risk of shipping bugs to production. This is two sides of the same coin; testing is also correlated with higher productivity, which also has a positive effect on quality code. Calibrating the amount of testing, then, becomes an exercise in understanding risk. Too little testing and you risk quality issues; too much testing and you theoretically risk shipping too slowly. The "right" amount is dependent on many factors.

