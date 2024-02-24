+++
title = "Annual Report FY22-23: Reverse Penny Drop & Redevelopment"
date = 2022-04-01
+++

## Product & Engineering

### Setu: Reverse Penny Drop

I was searching about different payment SDKs/APIs to integrate with banks
and came across Setu's docs. Luckily [Naresh Ramesh](https://ghostwriternr.me/)
worked there and I spoke to him about what [Setu](https://setu.co)
is doing/planning to do and I was pretty excited about the prospects
of Account Aggregator. I joined the Data Gateway and Account Aggregator
team and I was amazed with the culture of experimentation. Setu was
planning to launch a chatbot for BBPS payments on WhatsApp and some
setup had been done, but I was tasked with taking it to production and
fixing it up for marketing. I made it ready and I started talking
with my friends about how they make electricity/gas/fastag payments
and quickly found that the existing UPI apps provide a much
more seamless experience. Not only did others provide a seamless experience,
getting this into the hands of user i.e. distribution required expensive
marketing and Setu had the DNA of B2B sales. I communicated about this to
the CTO & CEO and we quickly shutdown the efforts on this so as to focus
more on other aspects where we can build a long lasting competitive
advantage.

I then started building Reverse Penny Drop (RPD). The premise of this product
is that many regulated entities like banks/NBFCs, brokers, insurers
need to verify bank account details like account number, IFSC and
name before proceeding forward. Before this product there were
only two ways to verify bank accounts:

1. Ask user to input account number and IFSC, transfer Rs. 1 to the account,
   and fetch the confirmation details from bank
2. Ask the user to upload a cancelled cheque and involve Operations/Support
   team to verify the details

Both the approaches are tedious especially if the passbook or cheque book aren't
handy and eventually lead to user drop-offs during the onboarding journey.

With RPD, the end-user clicks on a generated link and if the user is on
mobile, it shows a choice of opening their favourite UPI app and if on web,
it shows a QR code. Once the user pays Rs. 1 using this link with UPI, we
obtain all the required details, forward it so that the onboarding journey
can proceed and then refund the Rs. 1 back to the end-user.

We found our first pilot customer (Kissht) and I was thrilled. It took some
painful iterations to connect our systems with our banking partner and it felt
totally worth it when it worked for the first time. To test our competitive
edge, we asked our next customers to pay before use and it was well adopted.
This instilled a lot of confidence in me and Setu also wanted to focus more
on this product after our initial success which paid off immensely.

RPD is an industry-first product, and just when we launched it, we wanted
to make sure we are doing right by the customers and verifying information
that this new product provided. The simplest way to do that would be to do
a penny drop (deposit Rs. 1 to end-user) to all accounts, but it would also
be costly and would end up eating into our margins.
I did some exploration and figured out a lot of bank accounts have a pattern,
and if we verified a few of them belonging to one pattern, we can skip
penny drop to that entire pattern. Due to the skewed distribution of bank
accounts (top 10 banks have 90% of customers), we were quite lucky and
had to do a penny drop on a much smaller set because of this.

The above exercise helped us in figuring out that some of the end-users
were using Prepaid Instructions like FamPay UPI which don't have the
KYC of a bank account but our product was treating them as a valid
bank account. We took up the task to informing our customers about
this through the webhook which forwarded them account details and
specifically asked the brokers, lenders and insurers to treat this
as invalid accounts because of KYC since we didn't want our customers
on the wrong side of compliance. **Our customers relied on us, and we
considered it our responsibility to build this trust**. We also identified
various corner cases like Canara bank accounts and wrote
about all of our findings publicly on the documentation.

The trick to a successful product with happy customers is **always customer
support**. On running the pilot with our first customer, I had extensive
conversations with customers about their flows and the most optimum way
of designing them. We got to know what they did in preparation before
calling our APIs and what they did after which was crucial in understanding
how to expand our product so as to capture more value and thus make
integrations more friendlier.

For the Data Gateway team, conducting such research was crucial
considering that we have product offerings for various aspects of KYC
and we managed to successfully cross-sell other service once we provided
them an excellent onboarding/customer support experience with one product.
Internally everyone recognized RPD as the "Hero product" which become
a gateway for future cross-sell relationships. It's better to start a new
relationship with a customer with something you know for sure will make
an amazing first impression, especially if it is also the highest margin
product.

**Scaling systems and humans**

After a few months of launching this, a significant portion of my time
was being consumed by going to integrations call with our customers
and manually onboarding them. Integrations call comes after we have
given them a sales demo, they showcase it internally, and their
engineers have some questions which they feel aren't answered in docs.
These calls were important since this is Setu's most important chance
to close a sale if we have provided a sufficient
convincing evidence of how the product can help them and our quality
of customer support. **I am proud of the fact that once a customer had
an integration call with me, there was no way I was going to let Setu
lose that customer. Yes, 100% conversions, you read that right**. I
wrote internal docs extensively so that everyone in the company was
on the same page and more importantly people didn't need to keep
pinging me for trivial issues which could easily be solved by reading
the docs and following the steps. This also meant I had to make
sure integrations engineers and customer success was well aware
about the nuances of the product, even though I made sure I attended
all integrations call, I still wanted other things to be taken
cared of without involving me. I made some integration engineers
pitch RPD to me and I kept asking them questions so that I could
prepare them to take the demo calls so that I could exclusively
focus more on closing customers in integrations call.

Once we reached product-market fit and figured out how to sell this,
I was then fully involved in making sure our systems can scale and
handle all the new traffic. While understanding the request flow
and the paths involved, I had some suspicions about load balancing
not being done properly at nginx level, so I SSH'ed into the containers
and ran a load test. My suspicions were right and load balancing
was incorrectly setup up. I drew up an RFC (Review For Comments) with
some of the proposed solution including some short-term fixes
and some long-term ones and after a healthy debate we were able to
make progress on this. Now all we needed was to click a few buttons
on AWS and viola, the machines could keep up with all the new traffic
whenever required. We successfully engineered a money-printing
machine ;-)

I made RPD the highest-margin product of Setu with a monthly recurring
revenue of Rs. 30L within 9 months. It faced downtime once with
our pilot customer, after which it had zero-downtime till I left. RPD
was the thing for me which made all the work that I have done till
now look like a foot note. 


## Redevelopment: Taking a stand

### Middle class dream

Most of the societies in Mumbai were constructed in 60s-80s when the
cooperative housing societies laws had just come to force. This enabled
middle-class people to pool capital together to buy land, construct
building and allocate flats among themselves. Most of the buildings
had a low number of floors. By 2010s, a lot of those buildings had
started to get old and needed more repair. Luckily the airspace on
top of the land wasn't as utilized which is why real estate developers/
builders could approach society to demolish the building in order to
create much bigger buildings and in return get some portion of flats
to sell. This resulted in a win-win situation as the original owners
could get 20-80% extra area in flat, along with rents during construction
and some corpus amount. I remember, some of my friends in school would
tell me that after redevelopment, there will be swimming pool, bigger
houses and all of this for free. There's just something about this
"free stuff" which triggers a lot of middle-class people's dreams.
Needless to say, my parents too were affected by this.

### Risks

Very few people truly understand the risks associated and have the
operational know-how to mitigate those risks. It's also in no one's
interest to explain the risks associated which is why they often
get ignored. The redevelopment deal is essentially that house owners
would willingly get their house demolished and in return get
something extra in the form of area in new construction, corpus, rent,
etc. Some questions to ponder on:

 - What happens when building is demolished but builder doesn't have
   the required funds to complete the project?
 - What if the building constructed doesn't meet local government's
   rules and doesn't get permissions for habitation?
 - What happens if the builder extends his deliverables timeline
   so as to fetch better prices for his allocation of flats?
 - What happens if the builder sells his allocation of flats but
   cannot complete the project?
 - What happens if the builder refuses to pay the rents?

A significant portion of these risks can be mitigated by careful due
diligence of the builder/developer taking on the project, carefully
drafting the contracts, holding them accountable to RERA laws, and
having adequate safety and security clauses to mitigate against
the risks.

### The situation

The governance of cooperative housing societies is in the hands
of elected representatives called **The Managing Committee**. Usually,
how the redevelopment proceeds is that the society gets conveyance
deed on the land so as to establish the society as the owner of the
land in order to allow society to formally enter into contracts for
redevelopment. Once the society passes the resolution to go ahead
with redevelopment, they typically appoint a Project Management
Consultant (PMC) who oversees tender process, does due diligence before
accepting bids, drafts Developer Agreement and other legal
documents, and keeps a check on the construction progress as well
as the quality. The Managing Committee had a person henceforth
referenced as Mr. UM who is himself
a partner at a construction company and he brewed an innovative plan.
Self-redevelopment is also an option in case the society chooses
to not involve builder. Mr. UM understood the middle class dream
extremely well and started selling it aggressively for self-
redevelopment. The society would need funds to execute a plan like
this so it became essential to raise funds and thus they allowed
existing members to buy area in the non-existent future area for
a steep discount and many committee members pooled capital. With
this, the society put up their construction plans, paid fees
to government for partial Intimation of Disapproval (IOD). The Managing
Committee made a conscious decision to not appoint PMC because
it will start interfering with Mr. UM's plans. After half-work
was done, the society found itself in a position where it was
unable to raise further capital. Mr. UM then convinced members
that it was in their best interest to appoint a builder/developer
now. Not so surprisingly after a rigged tender process, Mr. UM's
construction company came out as the top bidder and the Managing
Committee started pushing this decision on members.
We understood what was happening and we brewed our own plan to
go against the establishment. This started with an innocent looking
one page letter.

{{ image(src="/images/annual-reports/FY22-23/letter_1.png", text="Letter for inquiry" width="720", height="1080") }}

The Managing Committee tried very hard to not answer the question
by giving an illusion of answering the questions.
Nevertheless, we persisted and openly called out their ill-intentions
so as to corner them into giving us the information which they were
legally obligated to give. After the Development Agreement was made
and given to us, we found it crazy that such an agreement which was
against the interest of members and fully in favour of the builder
was being pushed. Worst part was that the committee members themselves
had flats in society and were putting themselves and society in
immense risk for their personal benefit. It's not that they made
a boatload of money doing this, sure they made a little, but taking
the risk of their primary home which made up a significant portion
of their net worth for making extra pennies in their retirement
was a dumb decision they were taking which didn't even safeguard
the interest of their own families.

The below letter summarises the deal offered to the society:

{{ image(src="/images/annual-reports/FY22-23/letter_2_1.png", text="Letter explaining the shitty deal" width="720", height="1080") }}

{{ image(src="/images/annual-reports/FY22-23/letter_2_2.png", text="Letter explaining the shitty deal" width="720", height="1080") }}

{{ image(src="/images/annual-reports/FY22-23/letter_2_3.png", text="Letter explaining the shitty deal" width="720", height="1080") }}

{{ image(src="/images/annual-reports/FY22-23/letter_2_4.png", text="Letter explaining the shitty deal" width="720", height="1080") }}

### Courage to go against the establishment

The same committee members have been "ruling" over the society
since many decades and were unchallenged until they met me and my
brother Krushan Bauva. They
had done good work in the past which is why they had won the trust
of the members and every member just agreed with the committee's
decision. Me and my brother were the necessary **Agents of Chaos**
required to steer the society away from hitting the iceberg.

This involved standing up for oneself and refusing to allow others
to control our destiny. We openly talked about what was really
happening in the name of the redevelopment and we did receive
a lot of hate in return. But we persisted because we knew we
were right. The Managing Committee had in between managed to
convince members to accept the shitty deal and created a
perception that we were nuisance who were blocking redevelopment,
which was far from truth. We faced resistance from members who
supported The Managing Committee and used all the tricks in their
book to pull us down and ruin our reputation. None of this could
deter us, we knew what we had to do and we executed it.

### Ability to read and interpret trade documents

Courage without knowledge and intellect is foolishness. I did some
reading of what are the steps in redevelopment, RERA Act,
Maharashtra Cooperative Societies Act and a few more pdfs which
helped me explain how the law works. Youtube videos of CA Ramesh
Prabhu were quite helpful too. I am pleased that the goal I had
set for myself earlier regarding that I should be able to read,
understand and interpret any kind of trade documents is paying off
big time. This was also an interesting exercise as I found out more
about what kind of due diligence can be done on real estate
developers with the help of publicly available information.


### Corner by opening up your options and restricting others options

> A pen is mightier than the sword.

I could only grasp the full extent of this sentence only after I
had involved myself in redevelopment. Our strategy was simple, we
asked questions by writing letters which exposed the blunders and
illegality of the decisions of the committee. Till our involvement,
all communication was oral and committee members frequently broke
their word, and their reputation meant nothing for them. Our first
move was to bring this on paper. This move allowed us to always
be on the offense while forced the committee members to play defense.
We then controlled the direction while the committee members tried
hard to play catch up and were often behind us by a margin. Slowly,
we accumulated a lot of proofs with which we could prove the
illegality of the committee and the redevelopment. But this wasn't
enough as cooperative housing societies follow the majority's
decisions and the committee still had a strong hold of the majority.
While we could always approach the courts of law, a much more
surer option was to target the majority. Every elected body draws
it's power from majority vote. As one starts to build a minority
of dissatisfied people, one slowly chips away some power one by one,
until very little is left, for it to finally collapse.

### Exposing the cracks in a majority in order to break it

My brother's friend is the son of CA Ramesh Prabhu who is an eminent
figure in Mumbai's redevelopment and also runs his own PMC. On
meeting him, he made us understand the importance of executing our
plan not by pointing out the illegalities but by winning over
the majority. He also suggested various things we can do to start
attacking their majority in order to break it. Turns out, nothing
is more important than building the confidence of other members
since the committee drew their strength from these members. This
had a direct effect on decreasing their strength and increasing
ours which finally handicapped them and we were successful in
kicking out Mr. UM's construction company.

The redevelopment story hasn't still concluded. I am sure, this
will continue to drag me. I am tired of this but will still have
to be involved since my dad's flat is at risk.


## Finance/Business

This was a busy year, and I was mostly focused on adding to my
winning positions (bought more of IDFC First Bank). I also opened
a US brokerage account and bought some Apple and Google shares.
I think they are terrific businesses and the recent tech downturn
gave me a nice entry point with some margin of safety.

## Doing a Startup

I left my job to do a startup for the simple reason that I want to make
year 2023 count for myself. I have been lucky enough to have gotten
the opportunities as well as skilled enough to make the most out of each
opportunity thus made each year count till now, and I have to keep doing
that in future. I started searching for good startup ideas aggressively
since start of H2 FY 22-23 knowing that my competitive advantage was
in writing software for servers and my preferred business model would
be Software as a Service. Luckily I found an interesting problem to
be solved where software companies are spending lots of time and money
to build it themselves. Processing of incoming webhooks and their timely
delivery is crucial in this age of event driven architectures. Typical
examples would be that Stripe/Razorpay would send e-commerce companies
a webhook to notify when someone has made a payment so that 
order can be processed, Github sends a webhook to CI/CD whenever a commit
is pushed/pull request is opened, etc to trigger workflows. The alternative
to webhooks
would involve continuously asking the other server about the status
of information and this can be very inefficient and error-prone.
This is a problem I faced when at Setu working on Reverse Penny Drop
wherein we were responsible for sending payment information to our
customers as soon as we received a payment confirmation from our
banking partner. I was personally responsible to make sure our
customers don't keep pooling our servers buy going in calls and strongly
dissuading them and instead helping build the trust in webhooks.
