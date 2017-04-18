---
layout: post
title: "Stop Ranting, You Moron"
categories: blog
excerpt:
tags: []
author: pranitbauva1997
share: true

date: 2017-04-18
---

Everybody loves ranting! At some point in our life, each of us was
frustrated with a particular thing and internet is a wonderful platform
to share all those feelings.

While the _Coding rants_ are quite famous (I have come across a hell lot
of these, maybe because I am a developer), there are lots of other
categories which are favourite targets for people like _India_.

There are coding rants wherein the person makes a lot of sarcastic comments
about the things which are wrong but tells nothing specifically. These
types are a wonderful read as they are meant for humour and not for
serious business. On the other hand, the rants wherein the person
specifically points out the _wrong things_ going on, get pretty serious
and you can definitely see the frustration in that article. I am pretty
sure that if you do a semantic analysis with the fancy IBM Watson APIs,
the article will show as negative.

Well, one might have guessed where this article is leading, right?

I am at that point of my life, when I am frustrated about the people making
serious rants. Yes, I **hate** serious rants and that is just because they
are quite ill-written maybe because the author was frustrated himself
when he wrote it and it is clearly visible, or whatever might be the
reason, the point is serious rants if _ill-written_, are disgusting.

The humorous ones are extremely amusing on the other hand, and you will
have a smile (or even better, a laugh) by the time you end up reading.

I will take two examples in describing the different between the two.

#### Humorous One

[Fuck You Startup World](https://medium.com/startup-grind/fuck-you-startup-world-ab6cc72fad0e)
is a very good example of this category written by
[Shem Magnezi](https://medium.com/@shemag8). I can bet that after reading
that article, you will definitely have a good laugh but I will still advice
to finish off this one before moving on to that. But I will just give you
a peak into that article.

> Fuck your drinking culture too. Please stop celebrating every fucking
imaginary milestone with whisky, beer, or pizza and beer. Like, every
‘cool’ company has a bar now? Oh, OK, I’ll come work for you because you
have the Glenlivet 17 and not the 15. That’s why I show up to work every
day.

As most of you might be knowing that a few startups actually have a free
and open bar in their office spaces, but well who knows why? If you are
someone like me, you would actually turn up to office and still work late
just to have a good drink or not. The best part about this is that, the
author leaves the judgement to the reader thus being on the "safe side"
and on top of that, people just take this lightly.

#### Serious but ill-written one

[The Indian Startup Ecosystem - Something Isn't Right](https://inc42.com/resources/indian-startup-ecosystem-something-isnt-right/)
definitely belongs to this category written by
[Nishant Rao](https://medium.com/@nishantrao).
If you read this although again, I
will strongly advice you to do it after reading the current article, it
will just leave you with disgust without even providing a solution.

Don't get me wrong, I do agree with all the points raised in the article
and I too believe the same thing, but the reason I don't go ranting about
it is the thought that comes to my mind, "What good will you do by ranting
about it?". One extract from the article:

> It is interesting to note that most of the first generation startups in
the US and also in China were bootstrapped. That played a huge role in
their successes. Why? Because it is human nature which drives us that
extra bit when our own money is involved.

This is a true fact and I totally agree with this. _But_, why point it out?
Are the VCs going to stop funding those startups just because you said
it? Do they not know about this problem? How do you propose to solve
this problem? What good did it do to you or anyone who reads it, except
acknowledge about the existing problem?

I strongly believe if you are spending your time doing something, there
should be something good out of it, otherwise it is waste of **everybody's**
time and time is precious, darling especially the one which isn't yours.

Instead what should he do is write about the problems and also do a
proper analysis by breaking it into pieces and telling **where exactly did
it broke** and even better, **provide a solution**.

#### Serious but nicely written one

[An email thread on the kernel mailing list](https://lwn.net/Articles/249460/)
by the famous-for-ranting
[Linus Torvals](https://en.wikipedia.org/wiki/Linus_Torvalds).

Here is the frustration point of linus:

> In other words: the choice of C is the only sane choice. I know Miles
Bader jokingly said "to piss you off", but it's actually true. I've come
to the conclusion that any programmer that would prefer the project to be
in C++ over C is likely a programmer that I really *would* prefer to piss
off, so that he doesn't come and screw up any project I'm involved with.

In this paragraph, he rants about the problem just like Nishant did but
in a more aggressive way. But the good thing is that, he also describes
what specifically is the problem here:

> C++ leads to really really bad design choices. You invariably start using 
the "nice" library features of the language like STL and Boost and other 
total and utter crap, that may "help" you program, but causes:
 - infinite amounts of pain when they don't work (and anybody who tells me 
   that STL and especially Boost are stable and portable is just so full 
   of BS that it's not even funny)
 - inefficient abstracted programming models where two years down the road 
   you notice that some abstraction wasn't very efficient, but now all 
   your code depends on all the nice object models around it, and you 
    cannot fix it without rewriting your app.

This guy actually cares about giving explanations about why the problem
exists in the first place. Again whether it is correct or not, is just
his and readers' opinion. He also goes ahead and gives a solution to
the problem (which actually works no matter how absurd it might sound
to a guy who orgasms on _Object Oriented Programming_ and claims how it has
helped him to be the "Greatest coder" which placed foot on earth):

> In other words, the only way to do good, efficient, and system-level and
portable C++ ends up to limit yourself to all the things that are
basically available in C. And limiting your project to C means that people
don't screw that up, and also means that you get a lot of programmers that
do actually understand low-level issues and don't screw things up with any
idiotic "object model" crap.

At this point of the article I would really like to clarify that while
mentioning about these articles, I am not validating the truth of what
you have written, instead I am focusing on _How did you deliver it_. The
reason Linus is well respected in the community despite of his extreme
rude behavior, is his ability to convey his ideas properly in a systematic
manner which makes the reader think that his time wasn't wasted. If you are
writing a humorous one, make sure your reader has a good laugh at the end,
if you are writing a serious one, make sure you reader actually gains
something out of it.

#### My Rant

I wrote [Writing Kickass READMEs](http://www.bauva.com/blog/Writing-Kickass-READMEs/)
some time ago. This was I think GSoC period where I was just browsing
through the repositories and at that time it struck me that the
READMEs they have are mostly ill-written and one ends up wasting a lot
of time. Pissed off from that, I wrote a rant about it wherein I also
explained how it could have been made better. After reading this article
you will definitely keep these points in your README and more people will
see and contribute to your code.
