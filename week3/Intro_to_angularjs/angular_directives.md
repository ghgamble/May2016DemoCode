#AngularJS Basics + Directives

##Learning Objectives
By the end of today's lesson, you will be able to:

* Setup AngularJS in your projects
* Understand what a Angular Directives are
* Use some of the built in Angular Directives in your templates


##What are Directives?
At a high level, directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS's HTML compiler to attach a specified behavior to that DOM element or even transform the DOM element and its children.

Angular comes with a set of these directives built-in, like ngBind, ngModel, and ngClass. When Angular bootstraps your application, the HTML compiler traverses the DOM matching directives against the DOM elements.


##WHY??

One way to think of directives is as **reusable web components**. Your content (as shown in the browser) is updated based on data. Directives are very flexible, and once you master how to use them, you can accomplish a great deal. It's one of the reasons we dig Angular so much!

**Best practice bonus:** directives with only one job are the most reusable, and therefore the most generally useful. For example, ```ng-repeat``` exists only to handle repetition, not anything else. We love that!

![You only had one job](http://i3.kym-cdn.com/entries/icons/original/000/012/300/you-had-one-job34-580x425.jpg)


**A quick syntax note about the hyphenated-words and camelCase:**

HTML:
```<html ng-app>```

Javasript:
```App.directive('ngApp', function() {... });```


##Built in Directives

Angular comes with several built-in directives. These are some key built-ins that you'll probably encounter fairly often:

- **ngApp / ng-app** -- bootstraps Angular onto your app!

```<html ng-app>```

- **ngModel / ng-model** -- binds an input (or other form controls, like select, textarea, etc) to a property on the scope

```
Enter name: <input type="text" ng-model="name">
Hello {{ sometext }}
```

- **ngBind / ng-bind** -- replaces contents of an HTML element with the value of the selected expression / updates when that expression changes

```
Hello <span ng-bind="name"></span>!
```

- **ngClass / ng-class** -- allows dynamic setting of classes on an HTML element via bound expression 
- **ngClick / ng-click** -- triggers a custom action (function) on click
- **ngController / ng-controller** -- assigns the controller of your choice to a section of code
- **ngRepeat / ng-repeat** -- loops over a structure (like an array) and executes an instance of the selected code once per item
- **ngStyle / ng-style** -- conditionally sets style on an HTML element



##Links:
Main App
- [ng-app](https://docs.angularjs.org/api/ng/directive/ngApp)
- [ng-controller](https://docs.angularjs.org/api/ng/directive/ngController)

Behavior
- [ng-click](https://docs.angularjs.org/api/ng/directive/ngClick)

Variable Binding
- [ng-bind](https://docs.angularjs.org/api/ng/directive/ngBind)
- [ng-model](https://docs.angularjs.org/api/ng/directive/ngModel)

CSS
- [ng-class](https://docs.angularjs.org/api/ng/directive/ngClass)
- [ng-style](https://docs.angularjs.org/api/ng/directive/ngStyle)
- [ng-show](https://docs.angularjs.org/api/ng/directive/ngShow) / [ng-hide](https://docs.angularjs.org/api/ng/directive/ngHide) / [ng-if](https://docs.angularjs.org/api/ng/directive/ngIf)

Image Source
- [ng-src](https://docs.angularjs.org/api/ng/directive/ngSrc)

Arrays
- [ng-repeat](https://docs.angularjs.org/api/ng/directive/ngRepeat)
