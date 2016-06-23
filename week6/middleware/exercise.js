var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    allDaPokemon = [{
        id: 1,
        name:'jigglypuff'
    },{
        id: 2,
        name: 'charmander'
    }]

app.use(bodyParser())

app.use(function( req, res, next ){
    console.log('Middleware ran.')
    next()
})

// http://localhost:8080/api/pokemon
app.get('/api/pokemon', function ( req, res ) {
    // console.log(req.params)
    res.json(allDaPokemon);
})

app.post('/api/pokemon', function (req,res) {
    // with body parse, req.body exists
    console.log(req.body)
    res.send(req.body)
})

// http://localhost:8080/api/pokemon/1
app.get('/api/pokemon/:id', authenticate, hoistly, ( req, res ) => { // es6 syntax
    console.log(req.params)

    var id = req.params.id
    var found = false

    allDaPokemon.forEach(function(element, index, array){
        if( element.id == id ) {
            found = true;
        }
    })

    if( found ) {
        res.json({
            success: true,
            message: 'Pokemon found!',
            pokemon: allDaPokemon[id-1]
        })
    } else {
        res.json({
            success: false,
            message: 'Pokemon not found!'
        })
    }
})

function hoistly( req, res, next ) {
    console.log('Hoistly')
    next()
}

function authenticate( req, res, next ) {
    if( req.headers.token === 'gotta-catch-them-all!' ) {
        next()
    } else {
        res.status(403).json({
            status: 403,
            message: 'Forbidden! Thou shall not pass.'
        })
    }
}

// app.listen(process.env.PORT||8080)
app.listen(8080)
