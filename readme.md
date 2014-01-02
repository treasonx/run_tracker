#Playground

This is just a simple app I am using to play around with new tools and frameworks. It uses some of my runkeeper data to populate a better summary UI. 

#Testing

## The Intern

I am playing around with [The intern](http://theintern.io/). 

The Good:

* AMD based
* Selenium Support
* Sauce Labs Support
* Grunt integration


The Bad: 

* Heavy use of Selenium for unit testing
* No built in file watcher
* No unit test server
* Must use the intern framework for writing tests

I am use to writing a lot of unit tests. Over the last year I have made unit testing part of my standard development workflow. It causes me to design my modules with a clean API and forces me to think about dependencies early. This style of development is more of a TDD approach, and I enjoy quick feedback from changes to my modules or tests. Out of the box the intern doesnt seem to support this type of workflow, and it is a little frustrating that I wasnt able to get up and running easily. And I still don't have it setup in a way I like. Testing needs to be fast and easy, or no one will do it! 

That being said I see serious power when it comes to integration tests when using the intern. Since it works closely with selenium and sauce labs, running cross browser integration tests should be a breeze! You can drive the app like a user would and make assertions about how the app will react!  


## Karma

[Karma](http://karma-runner.github.io/) is a test runner by the developers of the AngularJS project. 

The Good: 

* Loader agnostic 
* Testing Framework agnostic
* File watcher
* Easy to use Debug Page
* Support for PhantomJS

The Bad:

* No Selenium Support
* Running Parallel tests can produce false positives 
* AMD requires some setup

I have been using Karam for well over a year. I am partial to Karma because I am so familiar with how it works and what type of workflow it allows. I have added Karma tests to this repo just as a comparison to the intern based workflow. 

Integration testing with Karma sucks! There is no built in selenium support so you cannot drive your application like a user would. You are forced to use JS apis to drive the app, and although this is close, it isnt a replacement for real user interactions.


### But PhantomJS isnt a real browser?!

True, no one uses phantomjs to browse the web. But phantomjs is very quick, and can easily run your entire test suite in no time! 

I use phantomjs much like I use chrome during development. I use chrome to develop and debug my applications about 90% of the time because its fast and the tool are awesome. But that doesnt mean I dont make sure the app runs in all of the required browsers before release! Phantom can be used in the same way, get quick feedback during development, but then be aware you need to run the suite against real browsers to find bugs!

Running the entire suite against all supported browsers is a great task for CI, and should be run regularly. But as a developer it takes way too much time, and automation should take care of it for me.



