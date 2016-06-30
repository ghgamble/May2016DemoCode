
### Objectives
1. What is middleware? Why do we need it?
2. Using 3rd-party middleware (morgan, body-parser, cookie-parser)
3. Creating custom middleware
4. Middleware priority levels


An Express application is essentially a series of middleware function calls.

Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.


Some of most used examples of middleware
- authentication
- request logging
- analytics

> (Live example with morgan)

- Third-party
    By far, the most commonly used middleware, especially when learning to build express applications, is third party middleware. Often, this middleware is distributed as `npm` modules and often trivial to load into your app.

    ```bash
        $ npm install body-parser --save
    ```
    ```javascript
        var bodyParser = require('body-parser')
        app.use( bodyParser() )
    ```

> ( 10 minute code slot: mount the cookie-parser middleware )

### Custom Middlewares
Middleware functions can:
- Execute any code
- Modify the `request` and `response` objects
- End the request/response cycle
- Call the next function in the middleware stack

Middleware functions *MUST* either call the `next()` or end the request by sending a response.

If a middleware function fails to call `next()` or send a response, your application will be left *hanging*.

```javascript
    var app = express()

    app.use(checkKeyMiddleware)

    // example using next, checks an incoming GET request for the parameter "key"
    function checkKeyMiddleware( req, res, next ) {
        if( req.query.key ) {
            next()
        } else {
            res.send()
        }
    }
```

Note: the `req` object contains `query` (GET requests), `body` (POST requests), and `params`.

> ( together as a class )

```javascript
    app.get('user/:id', function(req, res) {
        console.log(req.params)
        res.send()
    })
```

- Application-level
    You can load middleware across your entire app. This would fire the middleware function *ON EACH REQUEST*

    ```javascript
        // Would log UNIX time in milliseconds on the command line on each request
        app.use(function(req,res,next){
            console.log('Now:', Date.now());
            next()
        })
    ```

- Router-level
    You can load middleware in a router, which would fire for all routes defined on the router.

    ```javascript
        var kittyRouter = express.Router()

        function checkLitter( req, res, next ){
            if( req.body.litter ) {
                next()
            } else {
                res.status(403).send({
                    status: 403,
                    message: 'You must supply litter to access this page!'
                })
            }
        }

        // would fire for every route in the router
        kittyRouter.use(checkLitter)

        // would fire JUST for the /kitty/litter route
        kittyRouter.get('/kitty/litter', checkLitter, function(req,res,next) {
            res.render('kittenDen')
        })
    ```
- Error-handling
    Always takes *FOUR* parameters, but work just like all other middleware

    ```javascript
        app.use(function(err, req, res, next) {
            console.error(err.stack);
            res.status(500).send({
                status: 500,
                message: 'Hold the door!'
            });
        });
    ```

- Built-in
    Express had once incorporated `Connect`, a node module full of useful middlewares, but this dependency was removed in order to make Express a lighter weight framework. You can still leverage `Connect` manually, but as of now Express only provides one internal middleware function: `static`

    `static` is a widely used middleware that can serve static files (html, images, css, js, etc...)

    ```javascript
        // would serve all of the files in public
        app.use( express.static('public') )

        // would serve only html files from the public folders
        app.use( express.static('public', { extensions: ['htm','html'] }) )
    ```

The *ORDER* of middleware matters.

```javascript
    var userRouter = express.Router()

    function checkSession(req,res,next){
        if( req.session.user ) {
            next()
        } else {
            res.send()
        }
    }

    userRouter.get('/dashboard', function(req,res,next) {
        res.render('dashboard')
    })

    // loading this middleware AFTER mounting the route will cause the middleware to fire at the wrong time, or not at all
    userRouter.use(checkSession)
```
