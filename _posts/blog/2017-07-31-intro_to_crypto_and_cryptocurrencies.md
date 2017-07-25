---
layout: post
title: "Introduction to Crypto and Cryptocurrencies"
categories: blog
excerpt:
tags: []
author: pranitbauva1997
share: true

date: 2017-06-31
---

## Week 1: Introduction

### Cryptographic Hash Functions

A cryptographic function is a mathematical function which can take any
string as input, it produces a fixed sized output and it can be computed
efficiently.

Properties required:
 * It should be collision-free
 * hiding property
 * puzzle-free

#### Hash Property 1: Collision Free

Nobody can find x and y such that
$$ x!= y $$ and
$$ H(x) = H(y) $$. When we say
collision free, we don't mean there exists 0 collisions but instead we
want it such that nobody can find it.

**Why collisions exists?**

The possible inputs are a very big set while the possible outputs are a
quite small set. If we are dealing with 256-bit crypto functions then
the input can be anywhere from 1 byte to 1 gigabyte or even more but the
output has to be in 256-bits. Thus it gets crowded and there *will be
collisions*, we just have to make sure that it is super difficult to find
them.

**How to find a collision?**

Try $$ {2^{130}} $$ random chosen inputs and 99.8% chance that two of them will
collide. So no matter what the hash function is, it any which takes too
longer. Just to give a sense of the numbers, if all current computers in
the universe were computing this with combined power right from the start
of the universe, then the probability of finding a collision would be
around 1% . It is more likely probable that the earth will be hit by a
meteor rather than finding a collision.

**Is there a faster way to find collisions?**

For some possible hash functions, yes.
For others, we don't know of one

No hash function has been proved collision-free.

**Application: Hash as a message digest**

If we know $$ H(x) = H(y) $$,
it's safe to assume that $$ x = y $$.

That means, to recognize a file that we saw before, just remember the its
hash.

This is useful because the hash is small and can be compared more easily.

#### Hash Property 2: Hiding

We want something like this:
Given $$ H(x) $$, it is infeasible to find  $$ x $$.

This property fails when the inputs can be really less, for eg. a coin
toss.

**Hiding Property:**

If r is chosen from a probability distribution that has __high min-entropy__,
then given
$$ H(r | x) $$
, it is infeasible to find x.

High min-entropy means that the distribution is "very spread out", so that
no particular value is chosen with more than negligible probability.

**Application: Commitment**

Want to "seal a value in an envelope", and "open the envelope" later.

Commit to a value, reveal it later.

**Commitment API**

$$ (com, key) := commit(msg) $$

$$ match := verify(com, key, msg) $$

To seal $$ msg $$ in envelope:

$$ (com, key) := commit(msg) --> publish -> com $$

**To open envelope**:

publish $$ key $$, $$ msg $$

anyone can use $$ verify() $$ to check validity

**Security Properties**:

*Hiding*: Given $$ com $$, infeasible to find $$ msg $$.

*Binding*: Infeasible to find $$ msg != msg' $$ such that

$$ verify(commit(msg), msg') == true $$

$$ commit(msg) := (H(key | msg), key) $$

where `key` is a random 256-bit value

$$ verify(com, key, msg) := (H(key | msg) == com) $$

**Security Properties**:

*Hiding*: Given
$$ H(key | msg) $$
, infeasible to find
$$ msg $$.

*Binding*: Infeasible to find $$ msg != msg' $$ such that

$$ H(key | msg) == H(key | msg') $$

#### Hash Property 3: Puzzle-friendly:

For every possible output value y,
if k is chosen from a distribution with __high min-entropy__, then it is
infeasible to find x such that $$ H(k | x) = y $$.

**Application: Search Puzzle**

Given a "puzzle ID" id (from high min-entropy distribution), and a target
set Y:

Try to find a "solution" x such that
$$ H(id | x) \in Y $$

Puzzle-friendly property implies that no solving strategy is much better
than trying random values of x.

#### SHA-256 hash function

Theorem: If c is collision free then the hash function is also collision
free.

![Week 1_1](/images/blog/cryptocurrency/1.png){:.img-reponsive}

## Hash Pointers and Data Structures

Hash Pointer is:
 * pointer to where some info is stored
 * (cryptographic) hash of the info

If we have a hash, we can:
 * ask to get the info back
 * verify that it hasn't changed

![Week 1_2](/images/blog/cryptocurrency/2.png){:.img-responsive}

We can take any data structure and build it with the help of a hash
pointer.

Let's take an example of building a linked list. We can build a linked
list with the help of a hash pointer like this:

![Week 1_3](/images/blog/cryptocurrency/3.png){:.img-responsive}

In this kind of a data structure one can add things at the end of the list
but if somebody wants to modify a previously stored list, then it is not
possible. This is because let's say, you change the data of one element,
now the hash that is stored in the pointer will mis-match to the one
actually stored and thus we can get notified of any tampering. Well we can
technically change the hash pointer to which it points but then the hash
of that particular element and thus a chain reaction will change and then
at the end head of the list would need to be changed which is not possible.

We can also bring a binary tree with the help of a hash pointer. This is
commonly known as "Merkele Tree".

![Week 1_4](/images/blog/cryptocurrency/4.png){:.img-responsive}

It is very easy to even verify the data that we have and the time
complexity of the algorithm will be
$$ \Theta(\log n) $$

#### Advantages of Merkle Tree

 * Tree holds many items but just need to remember the root hash
 * Can verify membership in
 $$ \Theta(\log n) $$ time/space

**Variant**: sorted Merkle Tree
 * Can verify non-membership in
 $$ \Theta(\log n) $$ time/space

**More generally**, we can use hash pointers in any pointer-based data
structure that has no cycles.

### Digital Signatures

We want digital signatures such that only one person can sign but anyone
can verify. Signature is tied to a particular document and can't be
cut-and-pasted to another doc.

#### API for Digital Signatures

$$ (sk, pk) := generateKeys(keysize) $$

$$ sig := sign(sk, message) $$

$$ isValid := verify(pk, message, sig) $$

where,

$$ sk $$: secret signing key

$$ pk $$: public verification key

#### Requirements

 * Signatures should be able to be verified:
   $$ verify(pk, message, sign(sk, message)) == true $$
 * Signatures should not be forged. A person who knows you public key
   should not be able to produce a verifiable signature on another
   message.

#### Practical things which need to be taken care of

 * Algorithms are randomized so we need a good source of randomness
 * limit on message size. fix: use Hash(message) rather than message
 * fun trick: sign a hash pointer, signature "covers" the whole structure

#### Bitcoin things

Bitcoin uses ECDSA standard. ECSDA stands for *Elliptic Curve Digital
Signature Algorithm* which relies on hairy math.

Good randomness is essential for the proper functioning of ECDSA or one
will probably leak your private key.

#### Public Keys as Identities

One useful trick out of this is that a public key is considered as
equivalent as an identity. If we see a signature that we can verify with
a public key then that particular individual is saying that message. If
we know the secret key along with the private key, then one can sign
messages on behalf of that person.

#### How to make a new identity

Create a new, random key-pair (sk, pk) where $$ pk $$
is the public "name" you can use (usually better to use
$$ Hash(pk) $$).
$$ sk $$ lets you "speak for" the identity

You can control the identity, because only you know
$$ sk $$ if
$$ pk $$ "looks random", nobody needs to know who you are

This brings us to the idea of decentralized identity management

#### Decentralized identity management

Anybody can make a new identity at any time and one can make as many as
desired! And the best part is there is no central point of cooridination.

These identities are called "addresses" in Bitcoin.

#### Privacy

Addresses not directly connected to real-world identity. But observer can
link together an address's activity over time, make inferences.

### A Simple Cryptocurrency

#### Goofy Coin

Let's take the simple example of Goofy coin.

Goofy can create new coins. When Goofy creates a coin, it belongs to him.
Now that coin will be signed by Goofy by the method `CreateCoin[uniqueID]`.

A coin's owner can spend it. Now Goofy has to give it to Alice so it
creates a data structure pointing to Alice's public key
and Goofy signs it. Now Alice is able to present the whole data structure
and prove that Goofy gave it to her. Now Alice can pass it again to Bob.

![Week 1_5](/images/blog/cryptocurrency/5.png){:.img-responsive}

Goofy coin is insecure in the way that it doesn't take care of the
double spending problem. Now in this Goofy can give the coin to many people
and the other person won't ever know whether that coin has been given to
someone else or not. This is the main design challenge in digital currency.

![Week 1_6](/images/blog/cryptocurrency/6.png){:.img-responsive}

#### Scrooge Coin

Scrooge publishes a history of all transactions (a block chain, signed by
Scrooge).

![Week 1_7](/images/blog/cryptocurrency/7.png){:.img-responsive}

$$ CreateCoins $$ transaction creates new coins. This is valid because
Scrooge said so. In the transaction type, there is a table of coins created
which have the id, value and a recipient address. If Scrooge puts it into
history then it is valid and we don't need to worry.

![Week 1_8](/images/blog/cryptocurrency/8.png){:.img-responsive}

$$ PayCoins $$ transaction consumes (and destroys) some coins, and creates
new coins of the same total value. This is valid if:

![Week 1_9](/images/blog/cryptocurrency/9.png){:.img-responsive}

 * consumed coins valid
 * not already consumed
 * total value out = total value in
 * signed by owners of all consumed coins

#### Immutable coins

Coins can't be transferred, subdivided into smaller pieces, or combined
into a bigger one.

But: you can get the same effect by using transactions to subdivide: create
new trans. You can consume your coin or pay out two new coins to yourself.

Scrooge coins is still centralized.

## Week 2: How Bitcoin achieves decentralization

### Centralization vs Decentralization

They way bitcoin achieves decentralization is by combination of technical
and clever incentive engineering.

Decentralization is not all-or-nothing. Best example is e-mail which is
a decentralized protocol, but dominated by centralized webmail services.

#### Aspects of decentralization

 1. Who maintains the ledger?
 2. Who has authority over which transactions are valid?
 3. Who creates new bitcoins?
 4. Who determines how the rules of the system change?
 5. How do bitcoins acquire exchange value?

Beyond the protocol:

exchanges, wallet software, service providers ...

**Aspects of decentralization in Bitcoin**

*Peer-to-Peer network*:
 * open to anyone, low barrier to entry

*Mining*:
 * open to anyone, but inevitable concentration of power
 * often seen as undesirable

*Updates to software*:
 * core developers trusted by community, have great power

### Distributed Consensus

**Bitcoin's key challenge**:

Key technical challenge of decentralized e-cash: distributed consensus,
or how to decentralize ScroogeCoin.

**Why consensus protocols?**

Traditional motivation: reliability in distributed system

*Distributed key-value store* enables various applications like DNS,
public key directory, stock trades, ... which are all good for altcoins.

*Altcoins*: They are systems built on bitcoins like principles to achieve
slightly different role, sometimes currency systems sometimes not
currency systems.

**Defining distributed consensus**

 * The protocol terminates and all correct nodes decide on the same
   value
 * This value must have been proposed by some correct node

**How distributed consensus works in bitcoin**

When Alice wants to pay Bob: she broadcasts the transaction to all
Bitcoin nodes. The transaction has Alice's signature which other nodes
need in order to know that it came from Alice, it will also contain
Bob's public key which is his address at where he wants to receive the
bitcoin and further it contains a hash. This hash is a way for Alice
to link together this transaction or this coin to her receipt of this
coin from someone else.

![Week 2_1](/images/blog/cryptocurrency/10.png){:.img-responsive}

Note: In this, Bob is not in this picture. If Bob wants to be notified
that this transaction has in fact happened then he might want to run a
peer-to-peer node on the network in order to listen and be sure that
he has received the bitcoins but it is not required since the bitcoins
will be his whether he is notified or not.

**What do the nodes want to reach a consensus on?**

Given that a variety of users are broadcasting these transactions to
the network, what everybody wants to reach consensus on is exactly which
transactions were broadcast and the order in which they happened.

**How consensus could work in Bitcoin?**

At any given time:

 * All nodes have a sequence of *blocks of transactions* they have
   reached consensus on
 * Each node has a set of outstanding transactions it's heard about

![Week 2_2](/images/blog/cryptocurrency/11.png){:.img-responsive}

Although this has things similar to bitcoins, this is not how bitcoins
exactly work. This is because, doing things in this way is a really
hard technical problem for a variety of reason.

**Why consensus is hard?**

 * Nodes may crash
 * Nodes may be malicious
 * Network is imperfect
    * Not all pairs of nodes connected
    * Faults in network
    * Latency

One particular consequence of high latency is that there is no notion
of global time. Not all nodes can agree with a particular order of events
just on basis of timestamps.

**Many impossibility result:**

 1. Byzantine generals problem
 2. Fischer-Lynch-Paterson (deterministic nodes): consensus impossible
    with a single faulty node

Despite of these, there are still some well known protocols like **Paxos**
which can never give inconsistant result but can (rarely) get stuck.

**Understanding impossibility results**

 * These results say more about the model than about the problem
 * The models were developed to study systems like distributed databases.

Bitcoin consensus works better in practice than in theory. Theory is
still catching up. **BUT** theory is important as it can help predict
unforeseen attacks.

**Some things Bitcoin does differently**:

 * *Introduces incentives*: Possible only because it's a currency!
 * *Embraces randomness*:
    * Does away with the notion of a specific end-point
    * Consensus happens over long time scales - about 1 hour
    * Gives a probabilistic model about the verification of transaction
      over time with exponential growth.

### Consensus without identity: The Block Chain

**Why identity?**

*Pragmatic*: some protocols need node IDs

*Security*: assume less than 50% malicious

**Why don't Bitcoins nodes have identities?**

 * Identity is hard in a P2P sytem - *Sybil attack*
 * Pseudonymity is a goal of Bitcoin

#### Key Idea: Implicit Consensus

In each round, random node is picked. This node proposes the next block
in the chain.

Other nodes implicitly accept/reject this block:
 * by either extending it
 * or ignoring it and extending chain from earlier block

**Every block contains hash of the block it extends**.

#### Consensus Algorithm (simplified)

 1. New transactions are broadcast to all nodes
 2. Each node collects new transactions into a block
 3. In each round a *random* node gets to broadcast its block
 4. Other nodes accept the block only if all transactions in it are
    valid (unspent, valid signatures)
 5. Nodes express their acceptance of the block by including its hash
    in the next block they create

#### What can a malicious node do?

**What can't an attacker not do?**

 * It can't forge a signature thus it can't spend the Bitcoin on behalf
   of the original owner
 * While it can purposely choose to ignore verifying a transaction which
   can cause delays but then that transaction will be taken up by some
   other node and thus it can be signed.

**Double Spending Attack:**

When Alice pays Bob a Bitcoin, that means she will create a transaction
from her address to Bob's public address. She broadcasts it to the
network and let's say some honest node creates this block, listens to
the transaction and includes it in that block.

![Week 2_3](/images/blog/cryptocurrency/12.png){:.img-responsive}

![Week 2_4](/images/blog/cryptocurrency/13.png){:.img-responsive}

Summarizing:
 * Protection against invalid transactions is cryptographic, but enforced
   by consensus
 * Protection against double-spending is purely by consensus
 * You're never 100% sure a transaction is in consensus branch. Guarantee
   is probabilistic

### Incentives and Proof of Work

**Assumption of honesty is problematic**.

Can we give nodes *incentives* for behaving honestly?

![Week 2_5](/images/blog/cryptocurrency/14.png){:.img-responsive}

#### Incentive 1: block reward

Creator of block gets to
 * include *special coin-created transaction* in the block
 * choose recipient address of this transaction

Value is fixed: current 25 BTC, halves every 4 years

Block creator gets to "collect" the reward only if the block ends up on
long-term consensus branch!

**There's a finite supply of Bitcoins**

![Week 2_6](/images/blog/cryptocurrency/15.png){:.img-responsive}

#### Incentive 2: transaction fees

 * Creator of transaction can choose to make output value less than
   input value
 * Remainder is a transaction fee and goes to the block creator
 * Purely voluntary, like a tip

**Remaining Problems**

 1. How to pick a random node?
 2. How to avoid a free-for-all due to rewards?
 3. How to prevent Sybil attacks?

The solution to the problems is **Proof of Work**.

#### Proof of Work

To approximate selecting a random node: select  nodes in proportion to
a resource that no one can monopolize (we hope)

 * In proportion to computing power: proof-of-work
 * In proportion to ownership: proof-of-stake

#### Equivalent views of proof of work

 1. Select nodes in proportion to computing power
 2. Let nodes compete for right to create block
 3. Make it moderately hard to create new identities

#### Proof of work in Bitcoin

**Hash Puzzles**

![Week 2_7](/images/blog/cryptocurrency/16.png){:.img-responsive}

##### PoW property 1: difficult to compute

It takes around
$$ 10^{ 20 } $$ hashes/block

##### PoW property 2: parameterizable cost

Nodes automatically re-calculate the target every two weeks

Goal: *average* time between blocks = 10 mins

This means that the next time one tries to hash a block is not just
dependent on it's own computing power but it mainly depends on the
computing power of other people. To tell it more subtly:

`Prob(Alice wins next block) = fraction of global hash power she controls`

**Key security assumption**:

Attacks infeasible if majority of miners *weighted by hash power* follow
the protocol.

**Solving hash puzzles is probabilistic**:

![Week 2_8](/images/blog/cryptocurrency/17.png){:.img-responsive}

##### PoW property 3: trivial to verify

Nonce must be published as part of block.

Other miners simply verify that
$$ H(nonce || prevhash || tx || ... || tx) < target $$

### Putting It All Together

#### Mining Economics

$$ Profit = reward - hardware - electricity $$

**Complications**:

 * fixed vs. variable costs
 * reward depends on global hash rate

**Summary**:
 * Identities
 * Transactions
 * P2P network
 * Block chain & consensus
 * Hash Puzzles & Mining

#### Bitcoin is bootstrapped

There is a circle of dependency between `security of block chain`,
`health of mining ecosystem`, and `value of currency`.

![Week 2_9](/images/blog/cryptocurrency/18.png){:.img-responsive}

It is a very tricky process as to how all of these three things were
acquired by the Bitcoin system in an interdependent manner. It was of
course fueled by media.

#### What can a "51% attacker" can do?

Steal coins from existing address? NO

Suppress some transactions?
 * From the block chain, yes
 * From the P2P network, no

Change the block reward? No

Destroy confidence in Bitcoin? YES
