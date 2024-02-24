+++
title = "Annual Report FY21-22: Building a chatbot"
date = 2021-04-01
+++

## Product & Engineering

### Carousell: Chatbot

Carousell uses Zendesk to power their support help desk which contained
written articles and a chatbot. Their chatbot didn't allow us to configure
the chat journeys and their recommendations systems wasn't tuned for
us, and it was costing Carousell around Rs. 7-8L/month. A senior
engineer had done some initial exploration and written a few RFCs on
how to architect the system. The work was split in backend and frontend
and I was responsible to take the RFC and implement it for the backend.
We had a separate engineer to setup parts of frontend since I wasn't
well versed with frontend. Carousell has open-sourced Orion framework
which it uses internally to power all the microservices and I was
responsible for creating, owning and maintaining a new microservice.
I had been given very well defined work with objective metrics for
work well done and I got all the help I needed. This seemed
a perfect way to get started as someone fresh out of college.

My manager and a senior understood the importance of learning how
to slice up the work and after I did some explorations, we all sat
together to slice up the tasks, create JIRA tickets, and schedule
them. They believed in giving me as much freedom as required but
intervening when something was taking more time than expected and
that's how I learned to time-box issues so that they don't end up
dragging me. Since our team didn't have a frontend engineer, we
had asked for help from another team, and he managed to setup
the barebones and did a handover before the backend was ready.
This had a lucky coincidence since I was looking to get my hands
dirty with frontend.

We had planned for two phases, where in the first phase, we would
release it only in one language (English) and see how it's working
out before choosing to release for multiple languages. After the
backend was done, I integrated it with the frontend, did testing,
put it behind feature flags for a controlled roll out and finally
released it. I was so overjoyed once we started small roll outs
and saw it working properly. We then did a full roll out that
same work and it was getting some serious amount of users. This
was the first piece of software that I had put in production which
was accessed by so many users.

Then came time for Phase II, the DB was designed in a way to
accommodate for multiple languages because this requirement
was known at the time of designing, so we just had to wait
for the translations to arrive so that we could get started.
After the translations came, only a month of work was required
in backend and frontend to release it in production. Again, we
did a controlled roll out and after a month of a full roll out,
it had around 50k users a day. My software had never reached
this wide an audience earlier, and I was overjoyed that it
worked properly. In the full year after release, we had only
one downtime, and it worked correctly without any maintenance
long after I was gone.

{{ image(src="/images/annual-reports/FY21-22/carousell_chatbot.png", text="Carousell Support Chatbot", width="400", height="800") }}

Carousell's tech team is quite mature and a lot of things like
CI/CD, logging, infra, etc were already setup with very
*Release for multiple languages*
good practices which helped me in learning the ropes.


## Finance/Business

I have often been asked this question as to why I invest time in
managing my equity portfolio myself considering that my capital base
isn't enough to justify the time spent on this to which I have always
replied, "It's the irrational bet I want to take on myself", but here
is what I never told any of them, "If you don't take that irrational
bet on yourself which can change your personal growth trajectory forever,
then **no one else is going to bet on you**."

Here's the thing about irrational bets on yourself:
1. You look like a fool doing it, and you learn to not be bothered by it
2. It's almost always mispriced and the upside is huge and if planned
   well the downside is limited
3. It's best to align the bet in a direction where one is effortlessly
   good at
4. It takes a very long time to materialise which is why patience, innate
   curiosity, and love for the craft are crucial to survive, otherwise,
   it becomes too easy to give up or be burned out


12 years ago, I took an irrational bet to install linux, and it took a
decade for the bet to materialise. Managing my own equity portfolio is
another irrational bet I want to take on myself and think I am well
prepared to 'pay the toll'.

In 2018, I started keeping good track of my finances (initially using
ledger and hledger, now I just use Sheets/Excel with Dropbox paper).
I like to keep a track of Balance Sheet so that I can understand my
portfolio and make bets appropriately. I often take leverage (capped)
to hold positions and pay interest on it. I made a
5 year plan of saving a minimum of let's say x amount and maximum of
2x amount. The minimum amount was the threshold I kept to qualify
myself to start a startup and get married. I had budgeted out
emergency fund, marriage fund, and startup fund so that I can be my
own investor. These savings are supposed to be the cushion which let
me enjoy life as well as pay for my irrational bets. I am close to
reaching the minimum amount level, which has given me immense
confidence about my direction.

> If you ever find something you are effortlessly good at, don't
  let go of it, nurture it instead. It may look irrational to others,
  learn to live with it.

A few people reached out to me saying they enjoyed reading these
reports and I am glad to know people are enjoying it. Such words
of encouragement keeps me motivated to publish more of these in future.
