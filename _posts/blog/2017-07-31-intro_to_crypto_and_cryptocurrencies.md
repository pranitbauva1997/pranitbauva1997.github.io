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
