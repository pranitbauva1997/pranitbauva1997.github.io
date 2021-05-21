+++
title = "Deploying with Heroku"
date = 2017-03-13

[taxonomies]
tags = ["tech", "cloud-computing"]
+++

As their **About page** reads:

> Heroku is a cloud platform that lets companies build, deliver, monitor
and scale apps — we're the fastest way to go from idea to URL, bypassing
all those infrastructure headaches.

Heroku is the fastest deployment service that is available right now.
One can directly use git to deploy heroku apps with simplicity and ease.
The only downside of Heroku is that it can get costly. They only give a
few hours of server use per month free, after that it is chargeable.
Nevertheless, for small-scale apps it heroku fits perfectly without having
the deployment headache. Heroku also integrates with GitHub so you can
directly deploy from there.

You may find a detailed information about heroku from
[here](https://www.heroku.com/what) and you can know more about how it
works from [here](https://devcenter.heroku.com/articles/how-heroku-works).

To learn about deployment process of Heroku I found an online udacity
course named
[**Deploying Web Applications with Heroku**](https://www.udacity.com/course/deploying-applications-with-heroku--ud272).

**Note:** What follows below are notes of that course which I choose to
publish online.

# Deployment in a Flash

### What is Deployment?

When you are working on code, you mostly work on your own PC and test it
there itself. That machine is called as **Local Development Environment** or
**localhost** when it can be accessed only by you. When you want other people
to use your application, you need to put all of the code on some
server and execute it there so that your users can use it. Moving the code
from the local development environment to the server is called as
deployment.

### What is Heroku?

Heroku will take you application code and make it accessible on the
internet with a new simple commands. Heroku is a Platform Service for
the developer to upload your code and make it accessible it to everyone.
This is called as **Platform as a service** and is one kind of internet
product available today along with Infrastructure as a service and
Software as a service. PaaS makes it really simple to host the applications
online.

Before services like Heroku, many developers had to maintain servers where
they had to think about the server hardware, software, physical location,
uptime, security and many more just so that the application runs smoothly.
With heroku you can deploy the code with a few commands. Thus the
developer can focus more on the application and not on deployment.

[**How to Install Heroku**](https://devcenter.heroku.com/articles/heroku-cli)

### Basics

**Heroku Account**:

The first thing we need to do is make sure you have a Heroku account
created. This will give you access to Heroku’s deployment services and
will allow you to manage your deployed applications on their web app.
It is free to sign up so visit the
[Heroku homepage](https://www.heroku.com/) and sign up for an account.

**Heroku Toolbelt:**

The next thing you should do is install the Heroku Toolbelt. The toolbelt
is a command line tool that will expand the functionality of your command
line to include `heroku` commands. For example, once installed you will be
able to use the `heroku login` command to log into your account from your
command shell. To install the
[Heroku Toolbelt](https://toolbelt.heroku.com/) navigate to
toolbelt.heroku.com and follow the installation instructions for your
operating system.

**Heroku Login:**

Once you have your Heroku account and the toolbelt installed you will
want to log in to your Heroku account from the command line. To do this,
open up your command line shell and type `heroku login`. This will prompt
you for your Heroku email and password. If you entered your information
correctly, your command line output should look something like the image
below. You won’t have to log in every time you want to deploy, your
credentials will be saved for some time, so this is a good command to
keep in mind if you get logged out at some point.

**Git Installed**:

Heroku deploys the most recent version of your app by keeping track of
changes via Git. Make sure that you have Git installed on your command
shell. If you do not have Git installed you can visit
[this link](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
to get yourself set up. Most recent MacOS machines come with Git already
installed, and if you have been building applications on your development
environment already, it is likely you have already been using Git.

Clone Repository Now that you have everything you need to get started,
you will need to clone the gallery application you are going to deploy.
Open up your command line and navigate to the location where you want
the repository to live, this is often a projects directory but it can
be anywhere you like on your machine as long as it is not within another
Git repository. If you are not sure if there is a git repository on your
working directory you can check using git status. If you get a message
saying
`fatal: Not a git repository (or any of the parent directories): .git`.
This means you are not in a Git repo and you can clone in this location.
Go to the
[Udacity repository](https://github.com/udacity/galeria) and copy the
clone URL.

Return to your command line and type `git clone` followed by the git
clone URL you just copied. This will clone the code on GitHub to your
computer.

Once you have installed all the tools and cloned the repository, you
are ready to go live. It is generally a good idea to check your `git
status` to make sure you are about to deploy the most updated stable
version. Let’s deploy!

**Heroku Create:**

To get yourself deployed on Heroku, you must first create a remote on
Git. To do this you have to run the `heroku create` command. This will
make a new remote repo named `heroku` where the code will be pushed to.

To ensure you have properly created this remote, run the `git remote -v`
command, you should see something output that reveals the two remotes
listed, `origin` and `heroku`.

**Git Push Heroku Master**

Now the last step, the ribbon cutting is the command
`git push heroku master`. This command is very similar to the git push
that you may be familiar with when pushing your code to GitHub. Instead
of pushing it to github via the origin remote, you are pushing it to
the heroku remote.

From this point you will see a large output from Heroku that is listing
all of the libraries and tools that are being installed on the Heroku
machine before your code is finally decompressed and launched onto the
online server.

**Heroku Open**

Once you have your application deployed, Heroku will provide you with a
URL you can visit to see your site. After this you can run `heroku open`.
This will open up a browser window and navigate to the deployed
application URL.

Now your gallery is live! Click on the “New Art Piece” button to see a
new image appear!

### Types of Deployment

The different places where your application can live is called as
**environments**.

**Development environment:** When you are developing the application on your
machine. This is the local host. You are coding as well as testing the
application and building features. This is not deployed.

**Production environment:** Making you application available for users. The
code needs to be hosted on some server.

**Staging environment:** This is kind of a "live rehearsal" for the production
environment. The code is deployed on servers. This includes additional
tests and sample data.

**Development pipeline** is the process of developing the application, testing
the application on staging area servers and then actually deploying it
for the real world users.

# Common Functionality

### Heroku and Amazon

Heroku internally uses Amazon AWS services for their servers. Heroku
takes a fully fledged Amazon AWS server and makes small tiny servers out
of it and then rents it individually.

### Linux Containers

Virtualized servers that are provided are called as _Linux containers_.
Linux containers on same server don't share files though they share
memory and storage resources. Heroku calls their special single command
containers as **dynos**.

### Procfile

Heroku will allow you one “dyno” or single command container for free.
This means that on a free tier Heroku account, you can run one command
on the container and you will not be charged for it. So many commands
to choose from, which one will you pick? Well the most straightforward
answer would be: _the command that will run your application_!

Running your application on Heroku requires explicitly telling the
container or dyno to run your application. If you take a look at the
`Procfile` in your gallery app you will see how this command is instructed
to run.

The `Procfile` specifies a process of type “web”, which Heroku specifies
to be the only process type that can accept HTTP traffic, which is
necessary for your application to be properly hosted. The command that
is being run on the Heroku virtual dyno is `bundle exec rackup config.ru`
with a specified port, shown by `-p` and the variable `$PORT`.

This command will automatically configure a web server with the `config.ru`
specifications that will run on the `$PORT` port.

You can see here that `config.ru` loads the entire contents of the app
folder which contains the gallery application. It also fires up Sinatra
to run the application, as seen on line 2.

So now you can see how Heroku is able to know what to do with your code
when you push it.

Heroku is able to recognize the `Procfile` as a file that will specify
a process to run on the dyno. You can see in the terminal output of your
Heroku push. It is important to reiterate the the command in the `Procfile`
is not being run on your local environment, it is running on the
production dyno where your application is hosted.

This is a key difference between running your app locally and hosting it
on Heroku. If you were running this application locally, all you would
have to do is run `ruby app.rb` to fire up the server and get your
application running. The `Procfile` is specifically included so that
Heroku knows what to do with the code you gave it.

### Ephemeral Filesystem

Heroku works on a short-lived file system. It means that any files which
are not the part of source code will be removed periodically. Does this
mean that it is not possible to have persistance files on your server?
No, you just have to add the database.

### Setting up a Database

The repository you cloned in Lesson 1 contained multiple branches that
represent different stages of the application. For this step you will
need to create a new local branch within your repository and set it to
be track the remote “pg” branch. To do this make sure that you are in
your repository and run `git checkout -b pg origin/pg`.

We named this branch is called “pg” because the database that we have
is a PostgreSQL database. There are many databases out there that you
can use but Heroku requires that you use PostgreSQL when using a Ruby
application. Sinatra doesn’t require any database by default but other
frameworks like Rails come with SQLite as a default. SQLite will create
a database file in your application directory that will change as your
database updates. Because of Heroku’s ephemeral filesystem this changing
database file will be eventually reset, meaning it is unsuitable for use
with Heroku.

At this point your application is ready to be deployed, however unless
you have PostgreSQL installed in your computer you will not be able to
run this application in your localhost. If you do not have PostgreSQL
installed follow these guides.

 * Mac: Visit http://postgresapp.com/
 * Windows: Visit http://www.postgresql.org/download/windows/
 * Ubuntu: Visit http://www.postgresql.org/download/linux/ubuntu/

You may notice when opening this up in your editor that there are many
more files present than there were in the version without a database.
This is because to get a database working with this Sinatra application
you have to have not only the database but also a way for your
application to interact with the database, in this case ActiveRecord.
ActiveRecord is an ORM or Object Relational Manager that will translate
the ruby code to SQL (pronounced sequel) that the database can execute.

ActiveRecord comes in the form of a gem so you want to make sure that
the application is stable locally before it can be deployed online, so
run `bundle install`.

Now that the required gems are installed on your local system, open
the app as you regularly would on your local development environment.
Run `ruby app.rb`. When you try to open the application by visiting
localhost:4567 you see that we have a Sinatra error.

![Heroku 1](/images/blog/heroku/1.png){:.img-responsive}

Here we see that the table that needs to be in the database does not
yet exist. You need to create it. Return to the command line, shut the
server down and run `rake db:migrate`.

Now that you have created the table required, go ahead and fire up the
server again with `ruby app.rb` and navigate to it on your browser.

To push your `pg` branch to the Heroku remote make sure that you are
on the pg branch (you can check by running `git branch`) and run this
command: `git push heroku HEAD:master`.

This command will ensure that the code that is pushed to heroku master
is the one that is at HEAD. In this case, this is the `pg` branch.

Once you do this open the application by running `heroku open`.

![Heroku 2](/images/blog/heroku/2.png){:.img-responsive}

You will see that we get an internal server error. Well if you recall,
when running the application locally you had to run the database
migrations. To run a command on your Heroku server you have to prepend
the command with `heroku run`. This will tell Heroku that you want to
run a command on the live server, much like you would when you are
running it on localhost. So instead of `rake db:migrate`, try `heroku
run rake db:migrate`.

Well that’s strange, it looks different than the different error you
got last time about the undefined PG table. It looks here that Heroku
is not able to find a database connection.

This happened because you do not have a PostgreSQL addon included in
Heroku. Heroku will only automatically include the PostgreSQL addon
if your very first deploy includes the gem `pg` in the Gemfile. This
is your second deploy to the same Heroku application so it is not
included. To include this addon run
`heroku addons:create heroku-postgresql`.

Now try running the database migrations again in the Heroku server by
using heroku run `heroku run rake db:migrate`.

**Note:** Here you might get an error like
`Cannot run more than 1 Free size dynos`. This is because you already
have a service running on a dyno and you need to shut it down first
before trying to create the database.

Great it looks like you’re almost there. Check if your page is up by
refreshing it.

You have now successfully deployed the version of the Udacity Gallery
application with a database!

Let’s recap the takeaways here:
 * Running commands on your Heroku server is different than running those same commands on your local computer.
    - Prepend your commands with `heroku run`.
 * Installing a database on your Heroku server is not always automatic.
    - If your first deploy contains the pg gem, then Heroku will
      include the `heroku-postgresql` addon.
    - If your application does not start with a postgres database
      but you want to add it you must run the
      `heroku addons:create heroku-postgresql`.


### Log Intro

The heroku app just shows `Internal Server Error` when we didn't run the
migrations but the local environment showed a detailed output of the error.

This is because of:
 * We want to hide complex errors from users.
 * The errors might give out sensitive data which can be pose security
   issues.

### Log Types

If you run into error into the production server, you have to use
`Heroku Logplex` which is a collection of log output from different places.

The types of logs are:
 * Application Logs:
   - Deployed application logs
   - Same as your command line
   - Mirrors development environment

 * System Logs:
   - What Heroku is doing
   - Routing
   - Starting/Stopping the dyno

 * Administrative Logs:
   - Administrative actions
   - Rake tasks
   - New build

It is very important to know where the error occurred and thus we should
be able to read the log output nicely and be able to differentiate between
the types of log outputs.

### Log Structure

`heroku logs` will give the log output. This output can be divided into four
parts namely timestamp, app/heroku (who is doing that thing), dyno, and
finally the log message.

One can use `heroku logs --tail` to collect logs in realtime.

For a detailed description about heroku logs, visit
[here](https://devcenter.heroku.com/articles/logging).

### Ending note

Heroku has a problem of file storage which can be fixed by using Amazon
S3 storage.

Also, some interesting topics to look into are:
 * [Creating a staging environment](https://devcenter.heroku.com/articles/multiple-environments#managing-staging-and-production-configurations)
 * [Scheduling Workers](https://devcenter.heroku.com/articles/background-jobs-queueing)
 * [Continuous Integration](https://devcenter.heroku.com/articles/codeship)

This was a wonderful course, and I gained lots of useful information
about heroku deployment!
