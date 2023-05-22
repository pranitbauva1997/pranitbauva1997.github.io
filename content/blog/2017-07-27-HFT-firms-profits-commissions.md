+++
title = "HFT firms' profits are like commissions"
date = 2017-07-27
+++

In **HFT** or **High Frequency Trading**, one buys and sells
multiple times within a second. In this a millisecond delay can affect
your profits adversely and make the algorithm bizarre. The best selling
point of an HFT firm is that it can never go in loss. All HFT firms have
had only good trading days, the only bad days where when their computer
systems had some technical glitches. Needless to say, HFT are not affected
by the mood swings of the market but instead they just profit like
brokerages. In fact, the way their algorithms work for profits are exactly
like commission business except that their commissions are big fat
paychecks. Now let's describe how all this happens. Each part is important
to the whole story so please bear with me, if it seems a long post.

**Note**: Everything written is a very simplistic model. In order to get
accurate information, please read the books given at the end.

### A little back story

Long back in the days when trading was manually done by going to exchanges
and trading your shares there, brokerages would have very high commissions
because they enjoyed some kind of monopoly and it was time consuming. As
time passed by, brokerage fees has reduced to a minimum because with
technology, it is possible to handle a very huge amount of trades and its
no longer a monopoly business. Somewhere just after the financial crisis
of 2008, a new concept named **HFT** or **High Frequency Trading** came which
just changed trading forever.

### What actually happens at Exchanges and Brokerages

Now let's say a company issues 1,00,00,000 shares in an IPO and registers
itself with the exchanges and every share gets sold in the IPO. Now if
you want to buy some shares, you can only do it when another person wants
to sell them. Now these exchanges are basically a place where you can
swap shares with another person using money. To go in more details about
how it functions, exchanges maintain a bid/offer stack for each company
registered with them. *Bid* means the
price one offers to buy a stock while *offer* is the price in which one
wants to sell the stock.

Now when a retail trader goes to buy a stock, he
has to go through his broker which has a line connection to the exchange.
So when the retail trader puts an "buy order" with the broker, the broker
forwards the buy order, let's say 1000 shares at Rs. 100 for company A.
Now instantly the person won't get the shares he demanded because there
is no one wiling to sell in the market. Now let's say another participant
comes to the market which puts a sell order of company A of 2000 shares
at Rs. 120 . Now even other market participants will enter this market
and all of them will come to a price equilibrium by the rules of **supply
and demand** which is very nicely explained by *John Geanakoplos* in his
course [**Financial Theory**](http://oyc.yale.edu/economics/econ-251) at
*Yale University* in the lecture
*[Why Finance?](http://oyc.yale.edu/economics/econ-251/lecture-1#ch6)* with
an experiment. It is highly recommended to watch it in order to understand.

Now the stack with many trades might look like:

| Action   | Quantity   | Price   |
| -------- | ---------- | ------- |
| Bid      | 1000       | 100     |
| Offer    | 2000       | 120     |
| Bid      | 200        | 110     |
| Bid      | 500        | 112     |

Now the exchanges' job is to match up the trades. So the bid offer of 500
shares at Rs. 112 will be matched up, then 200 shares at 110 and then 1000
at 100. Of course this is a very simplistic view of the markets and because
of the shear amount of trades happening at the exchanges, the gap is in
decimal points and not this huge. An interesting fact to note would be
that this gap is also governed by supply and demand. In normal market
conditions where people are willing to buy and sell shares, the difference
would be in decimals while in the financial crisis where everyone was
wiling to sell and no one to buy a dying company, the differences were
huge.

I know, you would have thought it as some complicated machinery of
mathematical formulas which would be governing the stock prices but instead
these trades are exactly similar like when you go and try to buy things
from the road side dealer. One can even bargain by putting and order and
cancelling it when a suitable price is not found. It is the job of
brokerages to put up the order at exchanges, and see whether a good deal is
found. It is the job of exchanges to match buyers with sellers.

Now in this, one can be confused as to if this is how exchanges work then
how can the exchanges show the price of shares as a fixed number. Well,
if one notices carefully they specifically mention that this is the
average price. What it means is that let's say in 1 second equal stocks
where bought/sold at 100, 102, 101 then a weighted average would be 101
which will be showed as the average price the onces which you usually see
on your brokerage screens or NDTV.


Now that we have a highly simplistic but still accurate model of how
exchanges and brokerages work, lets dive deeper.

### Trading before there was HFT

Let's take a simple example of apples. You are organising a party and you
need 1000 apples. Now there are two markets in your locality. You take
your car and go to market A and see that only 200 apples are available
at Rs. 10, so you buy them but you still have 800 apples to buy more,
so you take your car and then go to market B where there are 900 apples
available at Rs. 10.50, so you finish your order by buying 800 more apples.

{{ image(src="/images/blog/hft-profits-commissions/1.jpg", text="") }}

### Trading after HFT

Let's continue the simple example of apples. When you go to the market A
and see buy 200 apples while you still have 800 to buy, a rat comes to know
about this and before you get into car and go to the next market, that rat
goes to the market B buys all the apples at Rs. 10.50 and before you arrive
there it offers to sell at Rs. 11 .

{{ image(src="/images/blog/hft-profits-commissions/2.jpg", text="") }}

### Putting it all together

HFT firms are like **rats**. They have a privileged connection between two
exchanges which is faster than any other route. The exchanges flash the
buy/sell stack to them. If you carefully see, the only ones at a loss are
the normal market participants. The rat eat away some money from the
market participant and this profit is not subject to any market risks.
This is purely like commissions without giving service. It is because
of this that HFT's can't go in loss. They are just not exposed to the
rise and falls of the bare market.

In fact with this example one can also understand how this trading game
is a zero-sum game which doesn't create an economic value for the society.

Well these days HFT trading is gone far. There are algorithms to predict
what algorithms are doing but thats a story of another time!

Click [here to read the medium article](https://medium.com/@pranit.bauva/hft-firms-profits-are-like-commissions-d2112c203800).

To know more read the books,
[**Trading and Exchanges**](https://www.goodreads.com/book/show/1290158.Trading_and_Exchanges)
by *Larry Harris* and
[**Flash Boys**](https://www.goodreads.com/book/show/24724602-flash-boys)
by *Michael Lewis*.
