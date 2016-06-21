var express = require('express')
var app = express()
var bodyParser = require('body-parser')

// make an app.get route for every individual file in the public folder.
app.use(express.static(__dirname + '/public'))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', function(request, response){
    // response.send('hi')
    // console.log('request: ', request)
    // console.log('response: ', response)
    // response.send('hi') // can't set headers after they are sent!
    // response.sendFile('./public/../../../private/secrets/passwords/passwd.txt') // oops....
    response.sendFile('html/index.html', {root : './public'})
})

app.post('/form-submit', function(req, res){
    console.log(req.body)
    // this is a very common pattern, called POST-REDIRECT-GET
    res.redirect('/success')
})

app.get('/success', function(req,res){
    res.send('success!')
})
// this is super tedious. it's better to use STATIC MIDDLEWARE
// app.get('/css/main.css', function(req, res){
//     res.sendFile('main.css', { root : './public' })
// })

app.listen(3000) 

