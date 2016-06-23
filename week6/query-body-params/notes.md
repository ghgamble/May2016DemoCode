---
title: Request bodies, queries, and params
type: Lesson
duration: "0:50"
instructor: Brandon
---

### keywords
| *keyword*   | *example*                    |
|-------------|------------------------------|
| protocol    | http, https                  |
| hostname    | google.com, localhost        |
| tld         | .com, .io, .org              |
| path        | /dashboard/login             |
| segments    | [ dashboard, login ]         |
| querystring | ?page=5&order=desc&limit=100 |

> There are three major objects of interest on the request object.

Two of these objects on the `req` object deal with data stored on different types of requests.

*GET/POST/PUT/DELETE* (often referred to as METHODS) are the most common request types.

- `GET` :: Query String
    * http://google.com?password=dragons
    * ?password=dragons <<< that is the query string
    * Lives at : req.query


- `POST | PUT` ::  Request Body
    * http://google.com
    * Lives at : req.body

The third object is independent of request type. It deals with what is entered into the URL. Parameters are essentially the `segments` of a URL's `path`.

- `parameters` :: Dynamic URL segments
    * https://facebook.com/USERNAME
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
