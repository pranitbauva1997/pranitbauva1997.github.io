+++
title = "Annual Report FY20-21"
date = 2020-04-01
+++

This is the 10th anniversary of me installing Ubuntu on my laptop which changed the course of history of my life. Last year in April, I remembered it has been 9 years since I have switched to Linux full time. Nine years just just passed by so easily. It was almost like yesterday when I was waiting for the release of Ubuntu 11.04 LTS (Natty Narwhal).

Why is this anniversary special? Because that’s the first heavy long term bet I took on myself to go venture out into this amazing world of computers and explore how machines works, how software works, how hardware works, how does all the magic happen, and most importantly, **how can I be the magician**?

Why write annual reports in the first place? Because, I want to held accountable for each year I spend on earth. As most things, this would too happen in phases. This is my first year out of college and as an apprentice I want to focus majorly on learning, improving my competitive advantage, and have a baseline capital and network. Readers of these reports would get to observe me through the phases. Here is a nice poem by Shakespeare titled [“All the World’s A Stage”](https://www.poetryfoundation.org/poems/56966/speech-all-the-worlds-a-stage), let me know how you think about it.


## Things I learned this year

### Tech

**Rust, Go and Backend**

I started with Rust in Q2 by helping Amit Upadhyay build FifthTry. Before this, I was sort of in a motion to explore more in the finance/business side and was reading and pulling the trigger on a few ideas. I knew that I had to change this and rust was there to seize the show. My personal preference of programming languages before using rust was C > C++ > Python > Javascript > every thing else. Sure, I had tried out haskell in between but I couldn’t get into a state where I could easily write real world code and support it in production. I was too bored to write APIs in C or C++ and Python & JavaScript without static types seemed too forgiving for my adulthood. I wanted something that gave me the powers and responsibilities of C while having the energetic youthful attitude so that the mundane tasks of checking and error handling are taken cared of. Rust is strongly typed and has “type wrappers” for errors so that it becomes difficult to ignore them. Once the concept of ownership, borrowing and lifetime of data is understood, memory management becomes a breeze thanks to having immutable state by default with the option to make it mutable by adding a special keyword. It’s also one of the few languages which isn’t cursed with OOP. Rust also comes with a special assistant a.k.a the compiler, which is unlike the compilers of other languages because it has some of the most descriptive errors. Amit challenged me that I could just learn rust by reading compiler messages and only the introduction of rust language. He won!

Rust made me fell in love with learning new programming languages once again.

Go was always on the back of my mind as it managed to make quite some noises. I had earlier tried the syntax by following [gobyexamples](https://gobyexample.com/) but hadn’t really worked on a production project in it. Luckily Carousell has a major portion of their services in Go and were slowly deprecating python and moving fully to Go. Carousell had been hosting their support helpdesk on zendesk and wanted to customize more aspects of it while still retaining some aspects. A customized chatbot would help with better customer conversations and more successful closures since the chat journeys could be customized, have a custom recommender system for choosing helpdesk articles, and A/B tested for our particular usecase. Go made me learn all the basics of what was happening underneath while Django and other frameworks choose to hide and it absolutely blew my mind. Using [Carousell’s Orion framework](https://github.com/carousell/Orion), I had gained some proficiency in maintaining the [CROP tool](https://crop.carousell.com/) with security and stability patches, migrated another service to the very new version of Orion and added better observability, creating a new service and exposing HTTP & GRPC and handling the business logic by querying/persisting data. I had in my mind that I should get some sort of a boilerplate ready and implement the basic things so that I will learn better and it could be useful for me in future to reference from.


**Elm, CSS and Frontend**

Elm is the reason I started loving frontend. I remember distinctly when starting out I had the task of building a sort of a Pull Request page which has a title input, description input, and submit button. I was so naive that I created something like this:


![](https://paper-attachments.dropbox.com/s_368C598B0EF4456E1CF8F964B839CC28119DDA49CE0F0CF114FED0CBBABBC770_1660072813289_horrible_ui.png)


I had been using GitHub for quite some while now and this just felt so horrible and it had so few elements to make mistakes. Only when I saw GitHub’s new issue page, I realized why it didn’t look as good as GitHub’s. From going to having very little design sense, I quickly transformed into making usable and not-so-ugly designs which I would consider a very good progress. Elm makes me want to do more and more of frontend programming. It’s a purely functional language with a unique architecture of defining a model to store state, the view function to operate on the state and generate HTML elements, update message passing mechanism to modify the state according to the user’s actions and a subscription function to listen to outside events. Imagining things this way seemed a lot more intuitive to me rather than writing HTML, CSS and JS. Plus, any mistake I made, elm compiler was kind enough to hold my hand through my mistakes and really take the pain out of debugging to make my life a chill breeze.

**Product Development**

As a part of Fifthtry, I could give suggestions to Amit who would then polish it and we would implement it together since I had a lot to learn. Once I joined Carousell, all those skills I learned were put to good use as I was given a well-defined success criteria with a lot of leeway on the tech side and how operational things would work. I was responsible for maintaining the customer support chat bot ensuring the reliability and usefulness of it for users. I learned how to prove one’s ability to ask for ownership of the project, manage to slice up work and execute it.

**Supporting Production Code**

The only people using Fifthtry were the initial people working on it and Amit’s friends. At Carousell, there were a hell lot of users and it was my first time writing software which is going to be used by so many people and has to work 24x7. I think I have come a long way from writing single file programs meant to be run once on desktop vs services which have to work 24x7 on a remote machine.

**Dealing with Tech Debt**

I think the trick when dealing with tech debt is patience. As I had started maintaining the [CROP tool](https://crop.carousell.com/), I had to introduce several logs and improve the error handling quickly just to figure out what’s exactly happening. Code is often always considered the single source of truth and documentation may exist, may not exist, may be outdated. At times, it is a long way before one could actually see through what was happening and one always feels lost and the only light which needs to be followed is to do the user journeys and attach a debugger to/or check logs for each request being processed and move slowly line by line to keep inspecting the variables. It is crucial to proactively communicate the state of technical debt so that it’s easier for everyone in the team when it comes to task estimation.


### Finance / Business

**Be comfortable reading financial statements**

Financial Statements can at times look scary and can contain immense amount of information. I did know the basics of reading a balance sheet, income statement, cash-flow statement right after my first year of college and I could be an accountant for a small lemonade shop. But then I got more serious in the business of investing money so I had to dig in deeper. I started out with some of the toughest and most difficult to interpret financial statements i.e. the big banks and financial companies. Of course, I wasn’t of the opinion that I had to purposely choose the hardest ones for myself. I am strongly convinced in the idea that financials do very well and help in the growth of emerging countries like India where capital is scarce. So to invest a heavy amount of my portfolio in financials, I made a rule that the more I learned about accounting, the more I could invest.

**Financial Institutions**

*Financials’ raw material is money*: They borrow money in different forms (using contracts) and pay a different rate. The way they calculate their liabilities and interest expense depends on the approach an accountant takes and different ways of borrowing money give different amounts of flexibility in recording the liabilities and interest expense. For e.g. banks/NBFCs at times borrow using coupon bonds and zero coupon bonds. Now zero coupon bonds give flexibility to the accountant to either charge the interest expense to the I/S statement or they can entirely skip the I/S and directly deduct the amount from equity reserves which of course mis-states the “true income” since it directly updates the B/S instead of updating the B/S through P/L statement . The coupon bonds could have been issued at a discount or a premium and liability calculations have to reflect that appropriately.

*Financials’ product is credit*: The loans which they have given to various people show up in the asset side of B/S. The asset side can disappear without any warning but the liability stays strong which is why banks often get into trouble. A careful reading of their assets tells us what they are doing with the money and whether they are putting it to a good use or not. Lots and lots of magic can happen on the asset side. The promoter can lend to one of his private companies with the intention of not paying it back. The asset under distress can be sold off with kickbacks to promoters when sold below the intrinsic value. The non-performing loans could be hidden by giving the borrower can extra loan to service the previous loan and interest. The loans could be given to riskier borrowers where the interest rate isn’t reflective of the premium to be charged on those loans. The promoter could be obsessed with growth and gives out more loans by reducing the required credit quality and financing it’s lending by raising more debt thus increasing leverage because it needs to show growth to the analyst covering the stock which in turns help to raise money by selling more stock to investors so that the company can lend and borrow even more.

Most of what happens in asset side is unknown to an investor who is only reliant on public filings. So public investors develop their own sort of “sniffing tests” or “smoke signals”. While this isn’t the right medium to go in full detail about the various sniffing tests, I can say one thing: **Each one should have their own sniffing test**. Having the privilege to see the financial states at different point in time and the transition from one state to another, tells you a lot about what was going on in the promoter’s mind. Promoters often give information in various forms i.e. coming to TV, giving ppts, writing annual letters like this one, etc. Almost of my sniffing tests are dis-guised forms of checking inconsistency in a story. Mind you, telling stories is a core component of all promoters’ job, but, the more coherent the stories, the better I like it. I believe that every story a promoter tells has a number trail which needs to be checked which a rich dimension of information available for analysis. Buffett has a saying, “If you find one cockroach, there are usually more hidden somewhere”, and I have found this pattern occurring time and again especially in financials.

**Manufacturing Business**

I also happen to own a bike manufacturer. These business tend to have long-lived assets in terms of factory, machinery, etc. Learning to read them made me read up on accounting for depreciation and inventory. Their financial statements are much simpler to understand than banks/NBFCs. Their product is easy to understand, **they sell bikes**. Customer pays them while giving the order for a bike and expects a delivery. They make good margins and have a strong brand re-call. It manages to pass the “litmus test competitive advantage” i.e. whether users would pay first and get the product later which is evident through it’s working capital {{ compute working capital }} requirements.

**FMCG / Cigarettes Business**

What I like about large-cap FMCG businesses in India:

1. Distribution
2. Brand recall
3. Quality Assurance
4. Essential items so very predictable volumes
5. Low cash conversion cycle thus less capital required to generate top line
6. Strong Return on Equity and Cash flow left to reinvest or return to shareholders

ITC as a cash equivalent: Selling cigarettes is a recession free business. Even during Nazi era in Germany cigarettes were a hot commodity. If available at a good yield, it throws off cash to hold an option like position where all the upside of future profits is captured while having debt like returns.

So as you see, I like to own businesses and accounting helps me to understand what’s going on inside a business so I read more of accounting when I am required to understand the financial statements. I haven’t studied accounting for pension liabilities yet (a small portion of a few of my portfolio companies) but have scheduled it for a later date.


## Goals for next year


### Tech

Go deep into the Golang and try to soak up as much knowledge as possible given that I have to write it at my full time job and try to do some side-projects based on golang to improve skills and create something useful for myself. Also, keep reading blogs/articles/documentation to keep up.


### Finance / Business

**Maintenance Research**

I have lots of stock ideas now which can yield me 20-25% for the next 5 years. What I have to do now is to bet heavily on them and that’s only possible when I get more information about them. This year’s progress should be that I should start reading the financial documents much faster.

**Portfolio Management**

Thanks to my salary, I have constant cash-flow coming in which begs to be invested. I have set some investment policies which I have to adhere to and I would have to buy/sell different sort of assets to manage my portfolio.


## Goals for the next decade

### Ability to fend for yourself

I am glad to have realized the importance of this through **many lucky events of my life**. I had plenty of moments which led me to believe that, “Geez, one really has to rely only on himself” and thus I started working on it.

These are some of the things I have learned to do, and I have to keep getting better at it:

1. Knowing how to ask for help
2. Knowing how to find your way around the internet and look for things you need
3. Having a decent education to be employable
4. Knowing your way around your computer (terminal) inside out by exploring the secret dungeons ;)
5. Learning to experiment, breaking and fixing things yourself
6. Knowing which information to trust by diving deep beyond surface levels to get crux of the matter by identifying credible sources and learning about the assumptions and validating them with your own world view
7. Knowing how to trade time, money and energy efficiently
8. Knowing how to make friends
9. Building credible sources of information for an edge
10. Focusing on building a strong fundamental base of knowledge for sustained long term competitive advantage
11. Ability to identify opportunities and market dislocation to put the skills and capital to use


### Ability to read and interpret technical & trade documents

Deciphering what’s written and understanding how to carefully develop plans/strategies and executing it. Whether it’s technical documentation, specifications, annual reports, financial statements, legal contracts, the ability to read and understand what’s happening around you is critical for continued success. The best part about this skill is that compounding works in it’s true sense over here. These documents often have very significant information hidden in it and gives an edge which other people will often find difficult to compete against.

### Ability to do a start a company and run it

I believe these are the key things to start a company:

1. Identifying market need
2. Skills
3. Capital
4. Courage
5. Network
