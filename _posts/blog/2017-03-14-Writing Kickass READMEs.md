---
layout: post
title: "Writing Kickass READMEs"
categories: blog
excerpt:
tags: []
author: pranitbauva1997
share: true

date: 2017-03-12
---

Writing documentation for code is **extremely** important. Alas! I realized
this late. Nevertheless, you should not make this mistake again.

This is written with respect to software related READMEs, if you want
guidelines for other stuff, then probably this isn't the right place.

Let's discuss the potential problems of not having a good README:

### Not a clear description of the project

I don't recount how many times this has happened with me. I usually
just scroll through all of my friends' projects on GitHub to see what
they are upto these days and time and again I have been disappointed
by not seeing a good description about the project and it is too
time consuming to read the whole source code to find out what that
repository is actually doing.

In fact some professional projects too have vague description and you are
left clueless as to what the code does. Sometimes the project is so
big that they can't really mention all of it in one thing. That is the
time you should probably split it in many repositories or folders
(if you desperately want a big mono repo like Google) and each folder
should contain some high-level information of what the code inside it
will do, just like recursive `Makefiles`.

### Not having a installation guide (or an incomplete one)

So since you have got the viewer interested in trying our your software
by writing a good introduction, you would now probably piss off her
by sucking at writing an installation guide.

What a developer should understand that since your development
environment is setup to run that code, doesn't mean everybody's is.
One should always write the whole installation process for all
systems that the software supports and it should clearly mention that
the software doesn't really have support for this system but it would
be great to support it in future or something.

For unix-based systems, one should list out all the ways to install
the software. Let's take an example of Ubuntu. If you have managed to
get your software packaged with a `.deb` file and also uploaded it
upstream so that it can be used with `apt-get`, just awesome!

Sometimes you might be releasing it and then packing the source code
in a `tar.gz` format, still awesome. In the latter case, it would be
worth while to mention all of the dependencies required. Also, just
the name isn't enough, their exact version numbers is even better
because you might never know when a python code breaks because of the
version bump because well that's how things work in python world.

If you are expecting the user to do a `gcc` based compiling for each
source code file then God just forgive you. It is time to move on to
at least `Makefiles` to automate that process for you.

If something doesn't work in particular systems, it is **important** to
list it out.

### No User Documentation

You don't have a user documentation? Well then how do you expect others
to use your software. User documentation should be in another file
or folder (if it is quite big) and should probably be in some kind of
a format which can be rendered easily. You can either write it in
markdown format so that it can be easily read on GitHub or you can
write in `man` pages form for the oldies to read it. But you should
have it. And that's not it, your README should explicitly point out
to the documentation and also tell the user how to access it and actually
read it.

Also you can include the very basic use case in the README itself.

### No guide for people to actually contribute

If you have the viewer till now and she is thinking of actually
contributing to your project, then kudos, your project is **awesome**.

A very important part of the contributing guide is to setup the
development environment. Again in this it is worthwhile to get
into the platform specific information. For eg. Windows will have
different development environment while Ubuntu will have a different one.
You should mention what IDE you used or the tools that you used.

Now you project might have some development related dependencies.
You should mention about that too. Now finally the viewer can have
successful setup to actually contribute to your code.

Now, you might be following some conventions for writing your code,
right? It is worth while to mention the conventions that you have
followed in a separate file and link it in the README.

Then you would have a specific way or two in which you accept others'
code, right? You might be using Github's Pull Request based system
or the age old sending patches via email using `git-format-patch` and
`git-send-email` just like old times. Whichever you prefer, it is
important to specify this in a new file possibly named as
`CONTRIBUTING GUIDELINES` or something. If you have any specifics
about the project **mention** it there. Don't just expect people to know
it by default.

It is also worth while to link the `easy to fix` bugs for new comers
so that they can get familiar with the code base without trying to
mingle with the core parts of the software.

### No technical documentation

If you are having a big project, then you might be having a "core" part
which is used by other parts of code. Have you documented it? Or you
just expect people to `git-grep` and `git-blame` to find the relevant
use cases, definition of the functions and the documentation inside
the commit messages? If you are doing that, it is not exactly bad (I
understand you might be having your own reasons) but it is good
to write a technical documentation wherein you will tell the programmer
what a method does and how to use it. This will also make sure she
doesn't write a method to do the same stuff again and thus it would
reduce your redundancy.

### No license

Yes, legal matters are important too! Whether you are releasing it
as an truly open-sourced software with `BSD` license or something
else, you should mention it. If you don't realize the importance of
licensing, that is maybe because your project isn't big enough.
Once a lot of people read your code, use it, they might try to finger
with it whether you like it or not. You should explicitly specify
"how much fingering" you can tolerate in a separate file named
as `LICENCE` in full detail like a legal document and if you are using
a popular license, you can just mention the name in the README.

### No place to mention about bugs

You don't have a bug management system? Okay, I agree this isn't really
always required but if you do, you should explicitly mention and link
to that. If you talk about bugs in GitHub issues, then mention it there.
Also if you are using GitHub, use labels to specify the bugs. If you
still track bugs using emails via mailing list, specify that too
also include a link to the old archives of the mailing list.

### No mention about the version control system

Well if you are seeing the project on Github, is it wrong to assume
that it uses `git`? Yes, there are many projects that I know use
multiple version control systems and the best example is `nmap`.
They accept patches (and PRs) in all forms and integrate it together.
So explicitly mention about all the version control systems that you
would be using and how you would accept foreign code for each.

### No contacts

How should the viewer contact you in case he needs something or has
something for you? Probably now you have a good incentive to give out
your contact information (mainly email is good) for others to contact
you or just say "Thanks for the awesome software!".

### No fancy GUI pictures

You probably would have spent a hell lot of time in designing and
tweaking the GUI and were frustrated when a font size looks bigger
than it should, so you should show it off. There are lots of people
who like the fancy GUI way of software rather than the good old
black terminal with green text. If you have a fancy GUI, try and
put the pictures of it in the README. GitHub's markdown renders it, but
I don't think `man` pages do. But if you **really** care about man pages,
you probably won't even have cared enough to make a fancy GUI.

### No table of contents

Well if you try to write everything that I have pointed out, then
it is probably good for you to follow this advice too. Have a `Table
of Contents`. This way, the README will look more organized and it
would make reading much easier.


Okay, now that I have ranted a lot, I hope you know know
**How to Write KickAss READMEs**.
