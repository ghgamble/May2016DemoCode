# Angular UI-Router Is Awesome

## Learning Objective(s)
- Students will be able to know & understand what routes (and states) are in a web app
- Students will be able to add a couple states to our Todo app

## Essential Question(s)
- What's a router? What's it for?
- How do we add routes to our Angular application?

- - -

## What We're Here For: Routing

What do we mean by routing? What is that?

Routing is adding in the ability to simulate different pages in a single-page application, like we've been building with Angular. We're making changes to our page without refreshing, and we want to be able to navigate between different pages with the same idea.

Angular comes with a basic routing mechanism, ``ngRoute``, which you can read about here if you want to – https://docs.angularjs.org/api/ngRoute/service/$route

But today we're looking at an even more beefed up router, which is a third-party plugin called ``ui-router`` – https://github.com/angular-ui/ui-router

**Our ultimate goal is to build out two pages – our main Todo list, and an Archive page for all the Todos we've completed.**

Let's walk through it.

### The Setup

Because of the nature of what we're building today, we can't just open our file with ``file://`` anymore. Just trust me on this one, we'll use a really easy tool to open our angular app on a super mini local server. It's a node library, called [http-server](https://github.com/nodeapps/http-server).

In your Terminal, run a quick command to install a tool that'll get us started.

```bash
$ npm install http-server -g
```

When that's done, navigate to our working TodoApp folder and run this:

```bash
$ http-server .
```

From now on, rather than opening the HTML file directly, we can navigate to ``http://0.0.0.0:8080``.

### Step One: The Source

Include the source. It's not an official, core library, and it's not hosted on Google's site. CDNJS has it (https://cdnjs.com/libraries/angular-ui-router), or you can download it from github & include it yourself.

Assuming the latter, let's make sure our script tag is _after_ including angular, and before we try to use it.

```html
<script src="js/angular.js"></script>
<!-- new router script -->
<script src="js/angular-ui-router.js"></script>
<!-- end new router script -->
<script src="js/main.js"></script>
```

### Step Two: Our First Dependency

Because we're adding in a new library, it'll be a dependency – we'll need to make sure Angular knows about our library, so we can use it. We're finally going to put _something_ in those empty brackets in our ``main.js``.


```javascript
// in main.js
angular
	.module('todoApp', ['ui.router']);
```

``'ui.router'`` just happens to be what the library is called in it's source. Most libraries will tell you what to write here, and if you need more than one, just list them like any array.


### Now, WTF is Routing?

A route, in general, is just the path you take to get somewhere. That's not specific to web development, but it's one of those words we've latched on because it's a good description – when you're changing URL, when that location bar changes, you're on a new route.

Our router just sets up which routes we want to exist, and points our code to how to make it happen.

This means our Angular app can simulate having multiple pages. Which gives us the ability to make more complex applications. Which is awesome.

Let's open up our ``main.js`` and add some routes.

### Step Three: Add Some Routes

In ``main.js``, we had this:

```javascript
// in main.js
angular
	.module('todoApp', ['ui.router']);
```

Let's add on to it:

```javascript
// in main.js
angular
	.module('todoApp', ['ui.router']);
	.config(MainRouter);
```

Of course, now we need a ``MainRouter()`` function, so let's build one:

```javascript
function MainRouter($stateProvider, $urlRouterProvider) {
	// WTFROUTESOMG
}
```
Those arguments are necessary parts for our router to do it's work. We'll see what they do with this next chunk.

### Step Three: Add Some Routes

Because in Angular we're not really changing locations (we're working on single-page apps here), we don't really call them _routes_, though the idea is the same – we call them **states**. We're changing the current state of the app, as in a snapshot of the stuff we're looking at and working with at this particular moment.

```javascript
function MainRouter($stateProvider, $urlRouterProvider) {
	$stateProvider
	  .state('home', {
	    url: "/",
	    templateUrl: "home.html",
	  });
}
```

That weird ``$stateProvider`` argument comes from our library, and it allows us to add a state to our application.

We define a **name** for the state. This is important, because it's how we can refer to it later.

We also define a **relative url** for each state, to tell the browser how to simulate navigating different pages. A ``/`` here says it'll be the default homepage, basically.

And finally, we add a **templateURL**, which is sort of a partial HTML file. We'll fill a partial in with _just_ the code we'd need to change on the page here – it's just a part of the overall page, remember.

Now, before our route can work, we've got to extract some of our view into that partial. Let's do that.

### Step Four: Building Partials

Go over to our ``index.html``, and we'll see we've already got a container for our main list. 

```html
<div class="wrapper" ng-controller="TodosController as todos"><!-- a bunch of list-related view stuff --></div>
```

Grab everything inside that div, and make a _new_ file. You can call it whatever you like, but make it obvious. I'm calling mine ``home.html``

```bash
$ touch home.html
```

And paste all that view code inside. Now you've got a partial, and all we have left to do is tell our ``index.html`` where we want to put it. 

In that ``div.wrapper`` on our ``index.html``, we'll add a new directive: ``ui-view``.

```html
<div class="wrapper" ui-view ng-controller="TodosController as todos"><!-- a bunch of list-related view stuff --></div>
```

 and since our route is a default route at ``/``, and our ``templateUrl`` is already ``home.html``, it should actually work!

### Step Five: One More State!

Of course, that's exactly what we were looking at before.

But _now_ we have the ability to switch out that view with different partials, depending on our _state_.

So let's make things interesting, and add another state in here. Let's make a state for when we're looking at an archived list.

```javascript
// in main.js again
function MainRouter($stateProvider, $urlRouterProvider) {
	$stateProvider
    .state('home', {
      url: "/",
      templateUrl: "home.html",
    })
    .state('archive', {
    	url: "/archive",
    	templateUrl: "archive.html",
    });
  
}
```

We'll need another partial for ``archive.html``, and for that one, instead of listing all our todos, let's just list the completed ones.

Our new partial will be almost exactly the same as our last, so duplicate that file. Inside, find our ``ng-repeat``:

```html
<li ng-repeat="todo in todos.todoList">
```

and switch that sucker out:

```html
<li ng-repeat="todo in todos.completedTodos()">
```

We're 10 seconds away from seeing something awesome. We need one more thing.


### Step Six: A Flipping Navbar!

In order to jump between one view & the other, we need _links_! But not normal links, because we're not changing pages. Luckily, `ui.router` gives us a custom directive. Open up both your new partials, and beneath the head, let's add a `nav` with a few `a`'s

```html
<header><!-- stuff --></header>
<nav class='tabs'>
	<a ui-sref="home">My List</a>
	<a ui-sref="archive">Archives</a>
</nav>
```

That custom directive, ``ui-sref`` is like ``href``, but referencing _states_ instead. That came with our library, and **the text we're putting in there are just the names of the states we defined**.

Add a little CSS in our ``style.css`` to make it look nice.

```css
nav.tabs {
	background: #4d5d70;
	max-width: 55%;
	margin: 0 auto;
}
nav.tabs a {
	display: inline-block;
	background: rgba(255,255,255,0.7);
	color: black;
	padding: 10px 20px;
	margin-right: 1px;
}
```

Check it out. Click through, jump from page to page. Super awesome, yeah?

### Helpful Extra - Which state am I on?

``ui.router`` actually gives us another really useful custom directive. Throw it on whichever links are using ``ui-sref``:

```html
<nav class='tabs'>
	<a ui-sref-active="active" ui-sref="home">List</a>
	<a ui-sref-active="active" ui-sref="archive">Archive</a>
</nav>
```
This is a really nice helper that will apply the class of "active" (or whatever you put in quotes) to the link that's currently active, depending on which state you're looking at.

Now you could add some css, like:

```css
nav.tabs a.active { background: rgba(255,255,255,1);}
```

And suddenly, your interface makes a ton more sense. Super helpful.


### Bonus Suggestions

- Having multiple states is really useful. What other states would be good to add to your app? Try adding an about page to start, or even crazier, maybe adding an extra state to be able to edit a todo.

- Also, you could try to refactor our TodosController using the factories we talked about this morning. It would make for a more obvious separation of model & controller, and would be good practice for future object-oriented programming.
