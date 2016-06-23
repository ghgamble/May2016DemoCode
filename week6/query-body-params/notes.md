---
title: Request bodies, queries, and params
type: Lesson
duration: "0:50"
instructor: Brandon
---

## REQ Objects

### keywords
| *keyword*   | *example*                      |
|-------------|--------------------------------|
| protocol    | `http`, `https`                |
| hostname    | `google.com`, `localhost`      |
| tld         | `.com`, `.io`, `.org`          |
| path        | `/dashboard/login`             |
| segments    | `[ dashboard, login ]`         |
| querystring | `?page=5&order=desc&limit=100` |

**GET/POST/PUT/DELETE** (often referred to as METHODS) are the most common request types.

There are three major properties of interest on the `req` object and two of these properties are only available on specific types of requests.

- `GET` **Query string**
    * http://localhost:8080/library/books?title="Othello"
    * `?title="Hamlet` <<< that is the query string
    * Lives at: `req.query`

Given we have a route defined like so:

```javascript
    app.get('/library/books')
```

... and this request is sent to the server:

    http://localhost:8080/library/books?title="Hamlet"

Here is the URL split into its parts (parsed)

```javascript
{
    protocol: "http",    
    hostname: "localhost",
    port: 8080,
    path: "/library/books",
    segments: ["library", "books"]
    query: {
         title: "Hamlet"
    }
}
```

- `POST | PUT` **Request body**
    * http://localhost:8080/library/books
    * `payload` is in the `headers`
    * Lives at : `req.body`

Given we have a route defined like so:

```javascript
    app.post('/library/books')
```

... and this `payload` is sent to the server:
   
   title=How%20to%20tell%20if%20your%20cat%20is%20plotting%20to%20kill%20you&author=The%20Oatmeal&published=2012

Here is the URL split into its parts (parsed)
    
```javascript
{
    protocol: "http",    
    hostname: "localhost",
    port: 8080,
    path: "/library/books",
    segments: ["library", "books"]
    body: { 
      title: "How to tell if your cat is plotting to kill you",
      author: "The Oatmeal",
      published: "2012"
   }
}
```

The third object is independent of request type. It deals with what is entered into the URL. Parameters are essentially the `segments` of a URL's `path`.

- `parameters` :: Dynamic URL segments
    * http:/localhost:8080/library/book/:id
    * Lives at : `req.params`

Parameterized routes are dynamic; we can define `segments` in a URL to accept *ANY* value.

Given we have a route defined like so:

```javascript
    // segment 3 is parameterized
    app.get('/library/book/:id')
```

... and this request is sent to the server:

    http://localhost:8080/library/book/1

Here is the URL split into its parts (parsed)

```javascript
{
    protocol: "http",    
    hostname: "localhost",
    port: 8080,
    path: "/library/book/1",
    segments: ["library", "book", "1"]
    params: {
        id: 1
    }
}
```
