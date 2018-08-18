# Pranit Bauva's Website

Welcome to the website of Pranit Bauva. The look of this website has been
changed way too many times but this one right now is the final look. Now
the look isn't going to change and I will focus all my time and energy in
adding the content to the website.

## Theme

This is the `So Simple Theme`.
[Here](https://github.com/mmistakes/so-simple-theme) is the github repo
of the theme. It is good to refer how to add content from that repo and
it contains valuable posts which demonstrate different use cases.

## Setup

How to go about with setting up:

 * Clone the repo
 * `$ sudo gem install bundler`
 * `$ bundle install`

Congrats! You have the environment setup

## Test Locally

You can test the website locally by various means. Some are:

 * Serve: You can directly serve the website on localhost by the command
   `bundle exec jekyll serve` and go to the link `http://127.0.0.1:4000/`

 * Build: You can just build the site by using `bundle exec jekyll build`
   which will output all the html site in the `_site` directory and then
   you can browse through the directory and open the respective webpage.

## Travis CI

Always run the command `travis-ci.sh` to test the modifications you have
done before commiting.

What does this script do?

 * Tries to install all the required bundles.
 * Tries to build the site locally.
 * Verifies the integrity of the website with `html-proofer` which can
   detect broken links, etc.

## Theme Setup

If you want to make changes, then please refer to
[this link](https://mmistakes.github.io/so-simple-theme/theme-setup/)
which also describes how to go about to make modifications with the
website.

## Suggestions

If you have any suggestions for the website, feel free to open up an
issue token. We can discuss about this and then I will take the necessary
steps. It would be even better if you could open a PR with the actual
change and help me!
