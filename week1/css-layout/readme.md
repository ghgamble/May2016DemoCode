# CSS Layout
> All elements in HTML can be styled and layed out with CSS properties. There are many CSS properties to learn, we are going to cover just a few to get you rolling.

You can set `properties` in CSS using `selectors`. Selectors refer to HTML elements on the page.

Given the following HTML...
```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>CSS Layout</title>
    </head>
    <body>
        <div></div>
    </body>
    </html>
```

... here is super simple example of a CSS `selector`

```css
    body { /* tag selector */
        background-color: grey;
    }
```

This _selector_ selects the `body` element of the page and sets its `background-color` property to **black**;

## Attibutes - IDs, and Classes

HTML elements will often have attributes, which can be selected in CSS.

```html
    <section id="boxes">
        <div class="box"></div>
        <div class="box"></div>
        ...
    </section>
```

Given this markup, here are some example selectors one could write:

```css
    .box { /* class selector */
        background-color: blue;
        display: inline-block;
        height: 100px;
        margin: 5px;
        width: 100px;
    }
    #boxes { /* ID selector */
        border: 1px solid black;
    }
```

## On display
All elements have a default display type. Display types have very important nuances that affect the way elements appear on a page. The main display types are:
    * `block` by default, take up the full width of a page, line break before and after
    * `inline` wraps content, no true dimensions
    * `inline-block` best of both worlds, has dimensions but will also share line space
        - sequential `inline-block` elements will respect the `space` character
    * `none` completely removes the element from the document flow (it's as if it's not even there, man)

The following table includes the most commonly used tags and their default display types:

| display        | tags                                         |
|----------------|----------------------------------------------|
| `block`        | `body`, `div`, `section`, `p`, `header`, ... |
| `inline`       | `span`, `i`, `b`, `em`, `strong`, `sup`, ... |
| `inline-block` | `img`                                        |


## Box Model
In HTML, you can think of all of the elements as boxes. In CSS, the term "box model" refers to a "box" that wraps around every HTML element. The "box" is made up of dimensions:
    * margin
    * border
    * padding
    * content

[img]

There are CSS `properties` that can modify the each of the Box Model concepts.

```css
    body: {
        /* borders are pretty inuitive, can be added to block level elements */
        border: 2px solid black;
        /* specific directions of margin can be specified like so */
        /* margin affects the outside space of a the "box" */
        margin-top: 10px;
        margin-right: 20px;
        margin-bottom: 10px;
        margin left: 20px;
        /* short hand way of specifying all directions */
        margin: 10px 20px 10px 20px;
        /* shorter hand, is equivalent to the previously defined margin property */
        margin: 10px 20px;
        /* padding affects the inside space of the "box" and is inside the border */
        /* same shorthand rules apply for padding */
        padding: 5px 10px;
    }
```

The "content" in our Box Model refers to what goes inside the element.

```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>CSS Layout</title>
    </head>
    <body>
        <-- this is the content of the body-->
        <div><-- this is the content of the div --></div>
    </body>
    </html>
```

### One box sizing fits all
All elements have a default `box-sizing` property and the default value is `content-box`. The `width` and `height` of an element will be computed differently depending its `box-sizing`.
    * `content-box` calculates width and height using the total width of an element **includes** the `padding`,`border`, and `content`.
    * `border-box` calculates width and height using **only** the content.

## What's your favorite positioning?
There are 4 types of positioning:
    * static: what all elements have by default (elements are NOT positioned)
    * fixed: positioned with respect to the WINDOW
        - stays with the user as they scroll
    * relative: doesn't change where the element takes up space, only where it is rendered
    * absolute: positioned with respect to an element's closest positioned ancestor (or the body).
        - absolutely positioned items are removed from the document flow

## Float your boat
At its simplest implmentation, `float` was originally designed to wrap text around images (like newspapers).

```html
    <style>
        .box { /* class selector */
            /*display: inline-block;*/
            background-color: blue;
            /*box-sizing: border-box;*/
            height: 100px;
            float: left;
            font-size: 20px;
            margin: 5px;
            padding: 5px;
            text-align: center;
            width: 100px;
        }
        #boxes { /* ID selector */
            border: 1px solid black;
        }
    </style>
    <section id="boxes">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
    </section>
```

### Clear eyes
Elements after a floating element will flow around it. To avoid this, use the clear property.
    * The clear property is used to control the behavior of floating elements.
    * The clear property specifies on which sides of an element floating elements are not allowed to float:
      - Left, Right, Both

### Overflow
Overflow refers to the property that controls what to do with the `content` of an element that exceeds its dimensions
    * typically used to control overflowing content and to hide or show scroll bars
    * also used to change float interactions